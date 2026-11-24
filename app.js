/* =============================================================
   PrepArquitectura IT — lógica de aplicación
   Vanilla JS, sin dependencias externas.
   Persistencia: localStorage (progreso, intentos, sesión en curso)
                 sessionStorage (autenticación de la pestaña)
   ============================================================= */

/* ---------------- Configuración de acceso ---------------- */
/* Cambia aquí usuario y contraseña antes de publicar.        */
const AUTH = { user: 'candidato', pass: 'arquitectura2026' };

/* ---------------- Constantes de almacenamiento ---------------- */
const K = {
  progress: 'ap_progress',   // { [qid]: {ok:n, bad:n} }
  attempts: 'ap_attempts',   // [ {date, total, ok, pct, mode, feedback, byModule} ]
  session:  'ap_session',    // sesión en curso (para retomar)
  auth:     'ap_auth'        // sessionStorage
};

/* ---------------- Estado global ---------------- */
let progress = load(K.progress, {});
let attempts = load(K.attempts, []);
let session  = null;
let selectedCount = 20;      // opción del modal
let selectedModules = MODULES.map(m => m.id);

/* ---------------- Utilidades ---------------- */
function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function save(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado */ }
}
const $  = sel => document.querySelector(sel);
const $$ = sel => Array.from(document.querySelectorAll(sel));
const shuffle = arr => {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const qById = id => QUESTIONS.find(q => q.id === id);
const moduleById = id => MODULES.find(m => m.id === id);
const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/* =============================================================
   AUTENTICACIÓN
   ============================================================= */
function initAuth() {
  const ok = sessionStorage.getItem(K.auth) === '1';
  if (ok) showApp(); else showLogin();

  $('#login-form').addEventListener('submit', e => {
    e.preventDefault();
    const u = $('#login-user').value.trim();
    const p = $('#login-pass').value;
    if (u === AUTH.user && p === AUTH.pass) {
      sessionStorage.setItem(K.auth, '1');
      $('#login-error').hidden = true;
      $('#login-pass').value = '';
      showApp();
    } else {
      $('#login-error').hidden = false;
      $('#login-pass').value = '';
      $('#login-pass').focus();
    }
  });

  $('#btn-logout').addEventListener('click', () => {
    sessionStorage.removeItem(K.auth);
    showLogin();
  });
}
function showLogin() { $('#view-login').hidden = false; $('#app').hidden = true; }
function showApp() {
  $('#view-login').hidden = true;
  $('#app').hidden = false;
  go('home');
}

/* =============================================================
   NAVEGACIÓN ENTRE VISTAS
   ============================================================= */
function go(view) {
  ['home', 'exam', 'results', 'history', 'howto'].forEach(v => {
    $('#view-' + v).hidden = (v !== view);
  });
  $$('.nav-link[data-go]').forEach(b => {
    b.classList.toggle('active', b.dataset.go === view);
  });
  if (view === 'home') renderHome();
  if (view === 'history') renderHistory();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* =============================================================
   PROGRESO
   ============================================================= */
function moduleStats(moduleId) {
  const qs = QUESTIONS.filter(q => q.module === moduleId);
  const done = qs.filter(q => progress[q.id] && (progress[q.id].ok + progress[q.id].bad) > 0);
  const mastered = qs.filter(q => progress[q.id] && progress[q.id].ok > 0 && progress[q.id].bad === 0);
  const okTotal = qs.reduce((s, q) => s + (progress[q.id] ? progress[q.id].ok : 0), 0);
  const badTotal = qs.reduce((s, q) => s + (progress[q.id] ? progress[q.id].bad : 0), 0);
  const pct = qs.length ? Math.round((mastered.length / qs.length) * 100) : 0;
  return { total: qs.length, done: done.length, mastered: mastered.length, okTotal, badTotal, pct };
}
function globalStats() {
  const total = QUESTIONS.length;
  const touched = Object.keys(progress).filter(id => qById(id)).length;
  const mastered = MODULES.reduce((s, m) => s + moduleStats(m.id).mastered, 0);
  const pct = total ? Math.round((mastered / total) * 100) : 0;
  return { total, touched, mastered, pct };
}

/* =============================================================
   HOME
   ============================================================= */
function renderHome() {
  const g = globalStats();
  $('#global-progress-label').textContent = `${g.pct}% dominado (${g.mastered}/${g.total})`;
  $('#global-progress-bar').style.width = g.pct + '%';

  const totalOk = Object.values(progress).reduce((s, p) => s + p.ok, 0);
  const totalBad = Object.values(progress).reduce((s, p) => s + p.bad, 0);
  const best = attempts.length ? Math.max(...attempts.map(a => a.pct)) : null;

  $('#hero-stats').innerHTML = `
    <div class="stat"><b>${QUESTIONS.length}</b><span>PREGUNTAS EN EL BANCO</span></div>
    <div class="stat"><b>${MODULES.length}</b><span>MÓDULOS</span></div>
    <div class="stat"><b>${totalOk}</b><span>ACIERTOS TOTALES</span></div>
    <div class="stat"><b>${best === null ? '—' : best + '%'}</b><span>MEJOR INTENTO</span></div>
    <div class="stat"><b>${attempts.length}</b><span>INTENTOS</span></div>`;

  // Sesión pendiente
  const pending = load(K.session, null);
  $('#btn-resume').hidden = !(pending && pending.ids && pending.idx < pending.ids.length);

  // Tarjetas de módulos
  $('#module-grid').innerHTML = MODULES.map(m => {
    const s = moduleStats(m.id);
    const masteryLabel = s.pct === 100 ? '¡Dominado!' : `${s.mastered}/${s.total} dominadas`;
    return `
      <article class="module-card" data-module="${m.id}">
        <div class="module-cover" style="background:linear-gradient(135deg, ${m.color}, ${lighten(m.color)})">
          <span class="m-icon">${m.icon}</span>
          <span class="m-count">${s.total} preguntas</span>
        </div>
        <div class="module-body">
          <h3>${m.name}</h3>
          <p class="desc">${m.desc}</p>
          <div class="module-progress">
            <div class="bar"><i style="width:${s.pct}%"></i></div>
            <span>${s.pct}%</span>
          </div>
          <div class="module-foot">
            <span class="link-cta">Practicar este módulo →</span>
            <span class="mastery">${masteryLabel}</span>
          </div>
        </div>
      </article>`;
  }).join('');

  $$('.module-card').forEach(card => {
    card.addEventListener('click', () => openSetup([card.dataset.module]));
  });
}
function lighten(hex) {
  const n = parseInt(hex.slice(1), 16);
  const r = Math.min(255, (n >> 16) + 70), g = Math.min(255, ((n >> 8) & 255) + 70), b = Math.min(255, (n & 255) + 70);
  return `rgb(${r},${g},${b})`;
}

/* =============================================================
   MODAL DE CONFIGURACIÓN
   ============================================================= */
function openSetup(modules) {
  selectedModules = modules && modules.length ? modules : MODULES.map(m => m.id);

  // Conteos disponibles
  const poolSize = QUESTIONS.filter(q => selectedModules.includes(q.module)).length;
  const counts = [10, 20, 30].filter(c => c < poolSize);
  if (poolSize > 0) counts.push(poolSize);
  if (!counts.includes(selectedCount)) selectedCount = counts[0];

  $('#setup-count').innerHTML = counts.map(c => `
    <button class="seg-btn ${c === selectedCount ? 'active' : ''}" data-count="${c}">
      ${c === poolSize ? 'Todas (' + c + ')' : c + ' preguntas'}
    </button>`).join('');
  $$('#setup-count .seg-btn').forEach(b => b.addEventListener('click', () => {
    selectedCount = parseInt(b.dataset.count, 10);
    $$('#setup-count .seg-btn').forEach(x => x.classList.toggle('active', x === b));
  }));

  // Módulos
  $('#setup-modules').innerHTML = MODULES.map(m => `
    <label class="mod-toggle">
      <input type="checkbox" value="${m.id}" ${selectedModules.includes(m.id) ? 'checked' : ''}>
      <span>${m.icon} ${m.name}</span>
    </label>`).join('');
  $$('#setup-modules input').forEach(i => i.addEventListener('change', () => {
    selectedModules = $$('#setup-modules input').filter(x => x.checked).map(x => x.value);
    updateSetupTotal();
  }));
  updateSetupTotal();

  $('#setup-modal').hidden = false;
  document.body.style.overflow = 'hidden';
}
function updateSetupTotal() {
  const pool = QUESTIONS.filter(q => selectedModules.includes(q.module)).length;
  $('#setup-total').textContent = `Disponibles en la selección: ${pool} preguntas`;
}
function closeSetup() {
  $('#setup-modal').hidden = true;
  document.body.style.overflow = '';
}

/* =============================================================
   SESIÓN DE EXAMEN
   ============================================================= */
function startSession() {
  const order = ($$('input[name=order]').find(r => r.checked) || {}).value || 'random';
  const feedback = ($$('input[name=feedback]').find(r => r.checked) || {}).value || 'immediate';

  let pool = QUESTIONS.filter(q => selectedModules.includes(q.module));
  if (!pool.length) {
    alert('Selecciona al menos un módulo para continuar.');
    return;
  }

  if (order === 'failed') {
    const failed = shuffle(pool.filter(q => progress[q.id] && progress[q.id].bad > 0));
    const rest   = shuffle(pool.filter(q => !(progress[q.id] && progress[q.id].bad > 0)));
    pool = failed.concat(rest);
  } else {
    pool = shuffle(pool);
  }

  const count = Math.min(selectedCount, pool.length);
  session = {
    ids: pool.slice(0, count).map(q => q.id),
    idx: 0,
    answers: [],              // {id, sel, ok}
    order, feedback,
    startedAt: Date.now()
  };
  save(K.session, session);
  closeSetup();
  go('exam');
  renderQuestion();
}

function renderQuestion() {
  const q = qById(session.ids[session.idx]);
  const total = session.ids.length;
  const pct = Math.round((session.idx / total) * 100);

  $('#exam-progress-bar').style.width = pct + '%';
  $('#exam-progress-label').textContent = `Pregunta ${session.idx + 1} de ${total}`;
  const ok = session.answers.filter(a => a.ok).length;
  const bad = session.answers.length - ok;
  $('#exam-score').textContent = `✅ ${ok}`;
  $('#exam-wrong').textContent = `❌ ${bad}`;

  const m = moduleById(q.module);
  $('#q-module-tag').textContent = `${m.icon} ${m.name}`;
  $('#q-topic-tag').textContent = q.topic;
  $('#q-text').textContent = q.q;

  const answered = session.answers.find(a => a.id === q.id);
  $('#q-options').innerHTML = q.options.map((opt, i) => `
    <button class="option" data-i="${i}">
      <span class="letter">${LETTERS[i]}</span><span>${opt}</span>
    </button>`).join('');

  $('#q-feedback').hidden = true;
  $('#q-feedback').className = 'feedback';
  $('#btn-next').disabled = true;
  $('#btn-next').textContent = (session.idx === total - 1) ? 'Ver resultado 🏁' : 'Siguiente →';

  $$('#q-options .option').forEach(btn => {
    btn.addEventListener('click', () => pickOption(parseInt(btn.dataset.i, 10)));
  });

  // Retomar: si ya había respondido (modo "al final"), restaurar selección
  if (answered && session.feedback === 'end') {
    selectVisual(answered.sel);
    $('#btn-next').disabled = false;
  }
}

function selectVisual(i) {
  $$('#q-options .option').forEach(b => b.classList.toggle('selected', parseInt(b.dataset.i, 10) === i));
}

function pickOption(i) {
  const q = qById(session.ids[session.idx]);
  const already = session.answers.find(a => a.id === q.id);
  if (already && session.feedback === 'immediate') return; // ya respondida y bloqueada

  if (session.feedback === 'end') {
    // Cambiar de opción permitido antes de avanzar
    if (already) already.sel = i; else session.answers.push({ id: q.id, sel: i, ok: i === q.answer });
    save(K.session, session);
    selectVisual(i);
    $('#btn-next').disabled = false;
    return;
  }

  // Retroalimentación inmediata
  const ok = i === q.answer;
  $$('#q-options .option').forEach(b => {
    const bi = parseInt(b.dataset.i, 10);
    b.classList.add('locked');
    if (bi === q.answer) b.classList.add('correct');
    else if (bi === i) b.classList.add('wrong');
  });

  if (!already) session.answers.push({ id: q.id, sel: i, ok });
  save(K.session, session);

  const fb = $('#q-feedback');
  fb.hidden = false;
  fb.className = 'feedback ' + (ok ? 'ok' : 'bad');
  fb.innerHTML = ok
    ? `<b>✅ ¡Correcto!</b>${q.exp}`
    : `<b>❌ Incorrecta. La respuesta correcta es ${LETTERS[q.answer]}.</b>${q.exp}`;

  $('#exam-score').textContent = `✅ ${session.answers.filter(a => a.ok).length}`;
  $('#exam-wrong').textContent = `❌ ${session.answers.filter(a => !a.ok).length}`;
  $('#btn-next').disabled = false;
}

function nextQuestion() {
  const total = session.ids.length;
  if (session.idx >= total - 1) { finishSession(); return; }
  session.idx++;
  save(K.session, session);
  renderQuestion();
}

function finishSession() {
  const answers = session.ids.map(id => {
    const a = session.answers.find(x => x.id === id);
    const q = qById(id);
    return a ? a : { id, sel: -1, ok: false, unanswered: true, correct: q.answer };
  });
  const ok = answers.filter(a => a.ok).length;
  const total = answers.length;
  const pct = total ? Math.round((ok / total) * 100) : 0;

  // Actualizar progreso por pregunta
  answers.forEach(a => {
    if (!progress[a.id]) progress[a.id] = { ok: 0, bad: 0 };
    if (a.ok) progress[a.id].ok++; else progress[a.id].bad++;
  });
  save(K.progress, progress);

  // Desglose por módulo
  const byModule = {};
  answers.forEach(a => {
    const q = qById(a.id);
    if (!byModule[q.module]) byModule[q.module] = { ok: 0, total: 0 };
    byModule[q.module].total++;
    if (a.ok) byModule[q.module].ok++;
  });

  // Guardar intento
  const attempt = {
    date: new Date().toISOString(),
    total, ok, pct,
    mode: session.order,
    feedback: session.feedback,
    byModule
  };
  attempts.unshift(attempt);
  attempts = attempts.slice(0, 50);
  save(K.attempts, attempts);

  // Limpiar sesión
  localStorage.removeItem(K.session);
  const last = { answers, pct, ok, total, byModule, mode: session.order };
  session = null;
  renderResults(last);
  go('results');
}

/* =============================================================
   RESULTADOS
   ============================================================= */
function renderResults(res) {
  $('#score-pct').textContent = res.pct + '%';
  $('#score-frac').textContent = `${res.ok}/${res.total}`;

  const CIRC = 2 * Math.PI * 52;
  const fg = $('#ring-fg');
  fg.style.strokeDasharray = CIRC;
  fg.style.strokeDashoffset = CIRC;
  setTimeout(() => { fg.style.strokeDashoffset = CIRC * (1 - res.pct / 100); }, 60);
  fg.style.stroke = res.pct >= 80 ? '#16a34a' : res.pct >= 60 ? '#f59e0b' : '#e11d48';

  let title = '¡Examen finalizado!';
  if (res.pct >= 90) title = '¡Excelente! Dominas el tema 🎉';
  else if (res.pct >= 75) title = '¡Muy buen resultado! 👏';
  else if (res.pct >= 60) title = 'Vas por buen camino 💪';
  else title = 'Sigue practicando, lo lograrás 📚';
  $('#result-title').textContent = title;
  $('#result-sub').textContent =
    `Respuestas correctas: ${res.ok} de ${res.total} · ${res.mode === 'failed' ? 'priorizando las que fallaste' : 'orden aleatorio'}`;

  // Desglose
  $('#breakdown').innerHTML = Object.keys(res.byModule).map(mid => {
    const m = moduleById(mid);
    const b = res.byModule[mid];
    const p = Math.round((b.ok / b.total) * 100);
    return `
      <div class="bd-card">
        <div class="bd-head"><b>${m.icon} ${m.name}</b><span class="pct" style="color:${p >= 60 ? 'var(--ok)' : 'var(--bad)'}">${p}%</span></div>
        <div class="bar ${p >= 60 ? 'ok' : ''}"><i style="width:${p}%;${p < 60 ? 'background:linear-gradient(90deg,#e11d48,#fb7185)' : ''}"></i></div>
        <div class="bd-sub">${b.ok} correctas de ${b.total}</div>
      </div>`;
  }).join('');

  // Revisión
  $('#review-list').innerHTML = res.answers.map((a, idx) => {
    const q = qById(a.id);
    const m = moduleById(q.module);
    const badge = a.ok
      ? '<span class="badge ok">Correcta</span>'
      : `<span class="badge bad">${a.unanswered ? 'Sin responder' : 'Incorrecta'}</span>`;
    const opts = q.options.map((o, i) => {
      let cls = 'is-plain', mark = LETTERS[i] + '.';
      if (i === q.answer) { cls = 'is-correct'; mark = '✅ ' + LETTERS[i] + '.'; }
      else if (i === a.sel) { cls = 'is-wrong'; mark = '❌ ' + LETTERS[i] + '.'; }
      return `<div class="review-opt ${cls}"><b>${mark}</b><span>${o}</span></div>`;
    }).join('');
    return `
      <div class="review-item">
        <div class="review-head">
          <span class="tag">${m.icon} ${m.name}</span>${badge}
        </div>
        <div class="q-tags"><span class="tag tag-soft">${q.topic}</span></div>
        <div class="review-q">${idx + 1}. ${q.q}</div>
        ${opts}
        <div class="review-exp"><b>Por qué:</b> ${q.exp}</div>
      </div>`;
  }).join('');
}

/* =============================================================
   HISTORIAL
   ============================================================= */
function renderHistory() {
  const box = $('#history-list');
  $('#history-empty').hidden = attempts.length > 0;
  box.hidden = attempts.length === 0;

  box.innerHTML = attempts.map(a => {
    const d = new Date(a.date);
    const fecha = d.toLocaleDateString('es-CO', { day: '2-digit', month: 'short', year: 'numeric' });
    const hora = d.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit' });
    const mini = Object.keys(a.byModule || {}).map(mid => {
      const m = moduleById(mid);
      const b = a.byModule[mid];
      return `<span class="mini-bar">${m.icon} ${m.name}: ${b.ok}/${b.total}</span>`;
    }).join('');
    return `
      <div class="attempt">
        <div>
          <h3>Intento · ${a.total} preguntas</h3>
          <div class="meta">${fecha} ${hora} · ${a.mode === 'failed' ? 'priorizando falladas' : 'orden aleatorio'} · ${a.feedback === 'end' ? 'explicación al final' : 'explicación inmediata'}</div>
          <div class="mini-bars">${mini}</div>
        </div>
        <div class="attempt-score">
          <b>${a.pct}%</b>
          <span>${a.ok}/${a.total} correctas</span>
        </div>
      </div>`;
  }).join('');
}

/* =============================================================
   ARRANQUE
   ============================================================= */
function init() {
  initAuth();

  $$('.nav-link[data-go]').forEach(b => b.addEventListener('click', () => go(b.dataset.go)));
  $('#brand-home').addEventListener('click', e => { e.preventDefault(); go('home'); });

  $('#btn-new-exam').addEventListener('click', () => openSetup(null));
  $('#btn-resume').addEventListener('click', () => {
    const s = load(K.session, null);
    if (s && s.ids && s.idx < s.ids.length) { session = s; go('exam'); renderQuestion(); }
    else { localStorage.removeItem(K.session); openSetup(null); }
  });

  $('#setup-close').addEventListener('click', closeSetup);
  $('#setup-modal').addEventListener('click', e => { if (e.target.id === 'setup-modal') closeSetup(); });
  $('#sel-all').addEventListener('click', () => {
    $$('#setup-modules input').forEach(i => i.checked = true);
    selectedModules = $$('#setup-modules input').map(x => x.value);
    updateSetupTotal();
  });
  $('#sel-none').addEventListener('click', () => {
    $$('#setup-modules input').forEach(i => i.checked = false);
    selectedModules = [];
    updateSetupTotal();
  });
  $('#btn-start').addEventListener('click', startSession);

  $('#btn-next').addEventListener('click', nextQuestion);
  $('#btn-quit').addEventListener('click', () => {
    if (confirm('¿Salir del examen? Tu progreso se guardará para poder retomarlo.')) {
      save(K.session, session);
      go('home');
    }
  });

  $('#btn-restart').addEventListener('click', () => openSetup(null));
  $('#btn-result-home').addEventListener('click', () => go('home'));

  document.addEventListener('keydown', e => {
    if (!$('#setup-modal').hidden && e.key === 'Escape') closeSetup();
  });
}

document.addEventListener('DOMContentLoaded', init);
