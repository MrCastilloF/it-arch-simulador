# 🛡️ PrepArquitectura IT — Entrenador de entrevistas

Aplicación web **autocontenible** para prepararte a entrevistas de **Ingeniero de Arquitecturas IT**, enfocada en ciberseguridad, datacenter y nube híbrida. Sin backend, sin dependencias externas y sin instalación: se ejecuta directamente en el navegador y se publica en GitHub Pages.

> Acceso restringido con **usuario y contraseña** (puerta de entrada en el cliente). No es un control de seguridad de nivel servidor: ver la sección [Acceso](#acceso-usuario-y-contraseña).

## ✨ Funcionalidades

- 📚 **Catálogo de módulos tipo Udemy**: portada, tarjetas de temas, barra de progreso global y por módulo.
- ❓ **Banco de preguntas de opción múltiple** organizado por módulos (ciberseguridad, datacenter, nube híbrida, UC/CCTV IP, protección de datos, PMI y propuestas).
- 🔢 **Tú eliges cuántas preguntas** evaluar en cada sesión (10, 20, 30 o todas).
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
├── app.js          # Lógica: sesión, puntaje, progreso, localStorage
├── questions.js    # Banco de preguntas y definición de módulos
└── README.md       # Este archivo
```

## ▶ Ejecutar en el navegador (sin instalación)

1. Descarga o clona esta carpeta.
2. Haz doble clic en `index.html`. Se abre en tu navegador y la aplicación funciona completa.
   - Todo se guarda en el almacenamiento local de ese navegador.

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en tu cuenta (por ejemplo `Open_Group_APP`) y sube los 5 archivos a la rama `main`.
2. En el repositorio: **Settings → Pages → Build and deployment**.
3. En *Source* elige **Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
4. En unos segundos estará en `https://TU-USUARIO.github.io/Open_Group_APP/`.

### Publicar desde la línea de comandos

```bash
git init
git add .
git commit -m "PrepArquitectura IT: app de entrevistas"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/Open_Group_APP.git
git push -u origin main
```

## 🔐 Acceso (usuario y contraseña)

La puerta de entrada está definida al inicio de `app.js`:

```js
const AUTH = { user: 'candidato', pass: 'arquitectura2026' };
```

**Cambia `user` y `pass` antes de publicar.** Recomendaciones:

- Es un control **del lado del cliente**: quien abra las herramientas del navegador podrá ver el código. No sirve para proteger datos sensibles.
- Para mayor privacidad, publica el repositorio como **privado** o protege la URL con un servicio de acceso (por ejemplo, la protección de GitHub Pages con autenticación de GitHub o un proxy con contraseña).
- La sesión vive en `sessionStorage`, así que se cierra al cerrar la pestaña.

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
  module: 'seg',             // id de un módulo de MODULES
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
