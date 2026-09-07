# Portafolio — Marco Hernández

Portafolio personal construido con [Astro](https://astro.build), estático y sin framework de UI.
Publicado en **https://markohj84.github.io** vía GitHub Pages.

## Estructura

```text
/
├── public/
│   ├── assets/          # imágenes de los casos (cb/ = Ciudad Bienestar, lc/ = Las Cholulas)
│   └── uploads/         # CV en PDF
├── src/
│   ├── data/cases.ts    # los 9 casos de estudio, con textos ES/EN
│   ├── layouts/         # Layout.astro — head, cabecera, nav y toggles
│   ├── pages/
│   │   ├── index.astro       # home con todas las secciones
│   │   └── caso/[slug].astro # una página por caso
│   └── styles/global.css     # tokens de color, tema claro/oscuro y hovers
└── astro.config.mjs
```

## Cómo funciona

**Tema e idioma** se conmutan con atributos en `<html>`: `data-theme` (`dark`/`light`) y
`data-lang` (`es`/`en`). Los dos idiomas viven en el DOM y el CSS muestra uno u otro
(`[data-l="es"]` / `[data-l="en"]`), así que cambiar de idioma no re-renderiza nada.
La preferencia se guarda en `localStorage` y se aplica antes del primer pintado para
evitar parpadeo.

**Añadir o editar un caso:** todo está en `src/data/cases.ts`. Cada entrada necesita
`slug` (define la URL), textos en `es` y `en`, e imágenes en `imgs` — si hay más de una,
la página del caso muestra carrusel con miniaturas automáticamente.

## Comandos

| Comando           | Acción                          |
| :---------------- | :------------------------------ |
| `npm install`     | Instala dependencias            |
| `npm run dev`     | Servidor local en `localhost:4321` |
| `npm run build`   | Compila a `./dist/`             |
| `npm run preview` | Previsualiza la compilación     |

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml`, que compila y publica en
GitHub Pages. No hay que hacer nada más.
