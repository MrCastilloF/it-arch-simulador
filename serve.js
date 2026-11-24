/* =============================================================
   serve.js — servidor local mínimo para PrepArquitectura IT
   No requiere instalación de nada más: solo Node.js.

   Uso:   node serve.js
   Luego abre:  http://127.0.0.1:8090

   (Alternativa sin Node: doble clic en index.html)
   ============================================================= */
const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8090;
const ROOT = __dirname;
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'text/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.png':  'image/png',
  '.svg':  'image/svg+xml',
  '.json': 'application/json; charset=utf-8',
  '.md':   'text/markdown; charset=utf-8'
};

http.createServer((req, res) => {
  let rel = decodeURIComponent(req.url.split('?')[0]).replace(/^\/+/, '');
  if (!rel) rel = 'index.html';
  const file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); res.end('Prohibido'); return; }
  fs.readFile(file, (err, data) => {
    if (err) { res.writeHead(404); { res.end('No encontrado'); } return; }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, '127.0.0.1', () => {
  console.log('PrepArquitectura IT en http://127.0.0.1:' + PORT);
});
