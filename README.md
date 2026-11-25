# 🛡️ PrepArquitectura IT — Entrenador de entrevistas

Aplicación web **autocontenible** para prepararte a entrevistas de **Ingeniero de Arquitecturas IT**, enfocada en ciberseguridad, datacenter y nube híbrida. Sin backend, sin dependencias externas y sin instalación: se ejecuta directamente en el navegador. El repositorio es **privado** y la página pide **usuario y contraseña** para entrar (ver [Acceso](#acceso-usuario-y-contraseña)).

## ✨ Funcionalidades

- 📚 **Catálogo de módulos tipo Udemy**: portada, tarjetas de temas, barra de progreso global y por módulo.
- ❓ **Banco de preguntas de opción múltiple** organizado por módulos (ciberseguridad, datacenter, nube híbrida, UC/CCTV IP, protección de datos, PMI y propuestas).
- 🔢 **Tú eliges cuántas preguntas** evaluar en cada sesión: **10, 20, 40, 60, 80 o todas**.
- 🗄️ **Banco de más de 700 preguntas** (≥100 por módulo) repartido en 7 módulos.
- 🔀 **Tú eliges el orden**: aleatorio o **priorizando las que fallaste** en intentos anteriores.
- 💬 **Retroalimentación inmediata o al final**, con explicación de cada respuesta correcta e incorrecta.
- 🏆 **Puntaje final** con porcentaje y **desglose por módulo**.
- 🔄 **Botón para reiniciar el examen**.
- 💾 **Progreso e historial guardados en el navegador** (`localStorage`): puedes retomar una sesión a medias y comparar tus intentos.

## 📁 Estructura de archivos

```
Open_Group_APP/
├── index.html      # Interfaz (login, inicio, examen, resultados, historial)
├── styles.css      # Estilos, paleta clara y luminosa
├── app.js          # Lógica: login, sesión, puntaje, progreso, localStorage
├── questions.js    # Banco de preguntas y definición de módulos
├── serve.js        # Servidor local opcional (node serve.js → http://127.0.0.1:8090)
├── .gitignore      # Exclusiones del repositorio
└── README.md       # Este archivo
```

## ▶ Ejecutar en el navegador (sin instalación)

1. Descarga o clona esta carpeta.
2. **Opción 1:** haz doble clic en `index.html`. Se abre en tu navegador y la aplicación funciona completa.
3. **Opción 2 (con URL):** si tienes Node.js, ejecuta `node serve.js` y abre **http://127.0.0.1:8090**.
   - Todo se guarda en el almacenamiento local de ese navegador.
   - En ambos casos pide usuario y contraseña al iniciar.

## 🚀 Publicar la aplicación web

### 🌐 Publicación activa (ya funcionando)

| | |
|---|---|
| **Página en vivo** | https://mrcastillof.github.io/it-arch-simulador/ |
| **Usuario / contraseña** | `candidato` / `arquitectura2026` |
| **Repo público (despliegue)** | https://github.com/MrCastilloF/it-arch-simulador (rama `gh-pages`) |
| **Repo privado (fuente)** | https://github.com/MrCastilloF/Open_Group_APP (rama `main`) |

**Actualizaciones:** el sitio se sirve desde la rama `gh-pages`. Tras cada cambio:

```bash
git push origin main                 # repo privado (fuente)
git push pages main:gh-pages         # publica en la web
```

El repo `pages` apunta a `MrCastilloF/it-arch-simulador`. Pages tarda ~30-60 s en reconstruir.

### Otras opciones

### Opción A · Local (sin servidor, gratis)

Doble clic en `index.html`. Funciona completa y pide usuario y contraseña al abrir.

### Opción B · GitHub Pages (requiere GitHub **Pro**)

GitHub Free solo permite Pages desde repositorios **públicos**; con GitHub Pro sí se publica desde un repositorio **privado**:

1. En el repo: **Settings → Pages → Deploy from a branch**.
2. Rama `main`, carpeta `/ (root)` → **Save**.
3. La URL queda en `https://TU-USUARIO.github.io/Open_Group_APP/`. El código fuente sigue privado; quien abra la URL se encuentra la pantalla de usuario y contraseña.

### Opción C · Hosting gratis que acepta repos privados

[Netlify](https://www.netlify.com/), [Vercel](https://vercel.com/) o [Cloudflare Pages](https://pages.cloudflare.com/) se conectan a tu repositorio **privado** de GitHub y publican el sitio sin costo. La URL es pública, pero la aplicación exige usuario y contraseña.

> ⚠️ La puerta de entrada es del lado del navegador. Para una protección real conviene añadir delante un proxy con autenticación (por ejemplo, Cloudflare Access con tu correo como único usuario permitido).

### Subir cambios desde la línea de comandos

```bash
git add .
git commit -m "PrepArquitectura IT: mejora"
git push
```

## 🔐 Acceso (usuario y contraseña)

La puerta de entrada está definida al inicio de `app.js`:

```js
const AUTH = {
  user: 'candidato',
  passHash: '51146c8e…'   // SHA-256 de la contraseña (no queda a la vista)
};
```

**Usuario actual:** `candidato` · **Contraseña actual:** `arquitectura2026`

Para cambiarla:

1. Abre la consola del navegador (F12) y ejecuta `hashPass('tu-nueva-contraseña')`.
2. Copia el hash que imprime y pégalo en `AUTH.passHash` de `app.js`.
3. Si además cambias el usuario, actualiza `AUTH.user`.

Comportamiento del login:

- Tras **5 intentos fallidos** la pantalla se bloquea 30 segundos.
- La sesión vive en `sessionStorage`: se cierra al cerrar la pestaña.
- El repositorio es privado: el código no es visible para el público.

## 🧠 Cómo estudiar

1. **Inicia un examen** y elige cantidad de preguntas, orden y momento de la explicación.
2. **Responde**: con retroalimentación inmediata verás el porqué de cada respuesta.
3. **Revisa el resultado**: porcentaje, desglose por módulo y explicación de todas las preguntas.
4. **Repite** activando *Priorizar las que fallé* hasta dominar cada módulo; compara tus intentos en *Historial*.

## ➕ Cómo agregar preguntas

Edita `questions.js` y añade objetos al arreglo `QUESTIONS`:

```js
{
  id: 'seg-12',              // id único y estable
  module: 'seg',             // id de un módulo en MODULES
  topic: 'Subtema',
  q: 'Enunciado de la pregunta',
  options: ['Opción A', 'Opción B', 'Opción C', 'Opción D'],
  answer: 0,                 // índice de la opción correcta (0 = A)
  exp: 'Explicación de por qué es correcta.'
}
```

Para agregar un módulo, añade una entrada al arreglo `MODULES` con `id`, `icon`, `name`, `desc` y `color`.

## 🧰 Tecnologías

HTML5 + CSS3 + JavaScript vanilla. Cero dependencias externas, cero build, funciona sin conexión.

---

Hecho para la preparación de entrevistas de **Ingeniero de Arquitecturas IT** · Perfil: https://github.com/MrCastilloF/
