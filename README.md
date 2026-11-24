# Personal website for Angus Longmore

Static site built with [Astro](https://astro.build), served at https://anguslongmore.com.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # serve dist/ locally
npm run format   # prettier
```

Site text and links live in `src/config.js`.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The repository's Pages source must be set to
**GitHub Actions** (Settings → Pages). The custom domain is configured there too.
