## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Astro estático, sin framework de UI y **sin Tailwind** (se quitó al portar el diseño;
no quedaba ninguna clase suya). El estilo son `style` inline + tokens CSS.

## Dónde va cada cambio

| Cambio | Archivo |
|---|---|
| Texto de un caso, caso nuevo, métricas | `src/data/cases.ts` |
| Colores, tipografía, espaciado, temas | `src/styles/global.css` |
| Copy de la home (servicios, experiencia, stack, IA) | los arrays del frontmatter de `src/pages/index.astro` |
| Cabecera, nav, toggles, `<head>` | `src/layouts/Layout.astro` |

Un caso nuevo sólo necesita una entrada en `cases.ts` con su `slug`: la página, el
carrusel y los enlaces anterior/siguiente se generan solos. No hace falta tocar
`[slug].astro`.

## Cómo funcionan tema e idioma

Atributos en `<html>`: `data-theme` (`dark`/`light`) y `data-lang` (`es`/`en`).
Los dos idiomas están en el DOM y el CSS muestra uno (`[data-l="es"]` /
`[data-l="en"]`), así que cambiar de idioma no re-renderiza nada. Un script inline
en `<head>` lo aplica antes del primer pintado para que no parpadee.

**Trampa:** nunca pongas `style="display:…"` ni `style="color:…"` en un elemento con
`data-l` o con una clase `.hv-*`. Un estilo inline gana a la regla del CSS y rompe
el cambio de idioma o el hover. Ya pasó dos veces.

## Portar cambios desde Claude Design

El diseño original vive en un proyecto de Claude Design y se exporta como
`.dc.html`, que **no es HTML normal**. Al traer un cambio, tradúcelo así:

| En el `.dc.html` | En Astro |
|---|---|
| `{{ binding }}` | prop o expresión `{}` |
| `<sc-if value="{{ x }}">` | `{x && (…)}` |
| `<sc-for list="{{ xs }}" as="x">` | `{xs.map((x) => (…))}` |
| `onClick="{{ openN }}"` | un enlace real `<a href="/caso/slug">` |
| `style-hover="…"` | clase `.hv-*` en `global.css`, **con `!important`** |
| `src="assets/…"` | `src="/assets/…"` |

El `!important` no es opcional: el runtime del diseño aplicaba los hovers como
estilos inline, así que ganaban. Como clases CSS quedan por debajo del atributo
`style` de cada elemento y el hover no se ve.

Los casos de estudio **no** se re-importan del diseño: `cases.ts` es la fuente de
verdad del contenido. Del diseño sólo se porta estructura y estilo.

La carpeta `Diseño de portafolio premium/` (material fuente, ~47 MB) está en
`.gitignore` a propósito.

## Antes de dar algo por bueno

`npm run build` compila 10 páginas (home + 9 casos). Comprueba también que no haya
scroll horizontal: el nav flotante ya lo provocó una vez en móviles. Un iframe del
ancho a probar y comparar `scrollWidth` con `clientWidth` basta — medir con
`--window-size` de Chrome headless da falsos positivos.

## Despliegue

Cada push a `main` dispara `.github/workflows/deploy.yml` y publica en
https://markohj84.github.io. No hay paso manual.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
