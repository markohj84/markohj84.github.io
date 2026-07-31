# Portafolio

Sitio de portafolio personal construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com).

## Estructura

```text
/
├── public/
├── src/
│   ├── components/   # Header, Footer, ProjectCard
│   ├── data/         # projects.ts — datos de proyectos
│   ├── layouts/       # Layout.astro — layout base
│   └── pages/         # index, proyectos, sobre-mi, contacto
└── package.json
```

## Comandos

| Comando           | Acción                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Instala dependencias                          |
| `npm run dev`       | Servidor local en `localhost:4321`            |
| `npm run build`     | Genera el sitio de producción en `./dist/`    |
| `npm run preview`   | Previsualiza el build de producción           |

## Personalización

- Edita `src/data/projects.ts` para actualizar tus proyectos.
- Edita `src/pages/sobre-mi.astro` para tu biografía, habilidades y experiencia.
- Edita `src/components/Footer.astro` y `src/pages/contacto.astro` para tus redes y correo.
- El nombre "Tu Nombre" aparece en `src/layouts/Layout.astro` y `src/components/Header.astro`.

## Deploy

Este proyecto está conectado a [Vercel](https://vercel.com) para deploy automático en cada push a `main`.
