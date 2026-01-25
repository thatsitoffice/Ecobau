# Cloudflare Pages Deployment

## Automatisches Deployment

1. **GitHub Repository verbinden:**
   - Gehe zu Cloudflare Dashboard → Pages
   - Klicke auf "Create a project"
   - Verbinde dein GitHub Repository

2. **Build-Einstellungen:**
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Root directory:** `/` (oder falls Projekt in Unterordner: entsprechend anpassen)

3. **Umgebungsvariablen (falls benötigt):**
   - Keine erforderlich für diese statische Website

4. **Deployment:**
   - Cloudflare Pages erkennt automatisch Astro-Projekte
   - Nach jedem Push zu `main`/`master` wird automatisch gebaut und deployed

## Manuelles Deployment

Falls du manuell deployen möchtest:

```bash
npm install
npm run build
```

Dann lade den Inhalt des `dist`-Ordners zu Cloudflare Pages hoch.

## Custom Domain

1. Gehe zu deinem Projekt in Cloudflare Pages
2. Klicke auf "Custom domains"
3. Füge deine Domain hinzu
4. Cloudflare konfiguriert automatisch DNS-Einträge

## Performance

- Cloudflare Pages bietet automatisch CDN, SSL und optimierte Performance
- Die statische Ausgabe wird weltweit verteilt
- Automatische Kompression und Optimierung
