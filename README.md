# Mamarracho! — Landing (Fase 1)

Landing monopágina de Mamarracho (@mamarracho.ar), cookies estilo New York en Buenos Aires.
Stack: HTML5 + Tailwind CSS + Vanilla JS, con Vite.

## Desarrollo

```
npm install
npm run dev      # servidor local
npm run build    # genera /dist para hosting estático
npm run preview  # previsualiza el build
```

## Publicar en GitHub Pages

1. Subí el proyecto a GitHub y asegurate de que la rama principal se llame `main`.
2. En el repositorio, abrí **Settings → Pages** y elegí **GitHub Actions** como fuente de publicación.
3. Cada push a `main` ejecuta `.github/workflows/build.yml`; también podés iniciarlo manualmente desde **Actions → Build y deploy → Run workflow**.
4. Cuando termine correctamente, GitHub muestra la URL publicada en **Settings → Pages** y en el deployment del workflow.

## Estructura

- `src/index.html`: HTML semántico de la landing.
- `src/css/style.css`: directivas de Tailwind y estilos custom.
- `src/js/counter.js`: contador del tanque de 10.000 galletas. Se actualiza con `setCookiesVendidas(n)`.
- `src/js/main.js`: interacciones generales (compartir link).
- `public/assets/images/`: logo, mono y Food Truck. Las imágenes actuales son provisorias: reemplazalas manteniendo el nombre.
- `tailwind.config.js`: colores de marca (#FF5200, #7C00FF y celeste).
- `.github/workflows/build.yml`: build y deploy automático a GitHub Pages.
