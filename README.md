# Tectum Ecobau - Astro Website

Landingpage für Tiny Häuser, entwickelt mit Astro und optimiert für Cloudflare Pages.

## 🚀 Schnellstart

### Installation

```bash
npm install
```

### Entwicklung

```bash
npm run dev
```

Die Website läuft dann auf `http://localhost:4321`

### Build für Production

```bash
npm run build
```

Die gebaute Website befindet sich im `dist/` Ordner.

### Preview des Builds

```bash
npm run preview
```

## 📦 Deployment auf Cloudflare Pages

### Automatisches Deployment (empfohlen)

1. **Repository zu GitHub pushen:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <dein-repo-url>
   git push -u origin main
   ```

2. **Cloudflare Pages verbinden:**
   - Gehe zu [Cloudflare Dashboard](https://dash.cloudflare.com) → Pages
   - Klicke auf "Create a project"
   - Verbinde dein GitHub Repository
   - Cloudflare erkennt automatisch Astro und konfiguriert:
     - **Build command:** `npm run build`
     - **Build output directory:** `dist`
     - **Framework preset:** Astro

3. **Deployment:**
   - Nach jedem Push zu `main` wird automatisch gebaut und deployed
   - Du erhältst eine `.pages.dev` URL für deine Website

### Manuelles Deployment

Falls du manuell deployen möchtest:

```bash
npm install
npm run build
```

Dann lade den Inhalt des `dist/`-Ordners zu Cloudflare Pages hoch.

### Custom Domain

1. Gehe zu deinem Projekt in Cloudflare Pages
2. Klicke auf "Custom domains"
3. Füge deine Domain hinzu
4. Cloudflare konfiguriert automatisch DNS-Einträge und SSL

## 📁 Projektstruktur

```
/
├── public/              # Statische Assets (Bilder, etc.)
│   ├── *.jpg           # Website-Bilder
│   └── favicon.svg      # Favicon (optional)
├── src/
│   ├── components/      # Astro-Komponenten
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── Footer.astro
│   │   └── ScrollAnimations.astro
│   ├── layouts/         # Layout-Komponenten
│   │   └── Layout.astro
│   ├── pages/           # Seiten (routing)
│   │   └── index.astro  # Hauptseite
│   ├── styles/          # CSS-Dateien
│   │   └── global.css   # Globale Styles
│   └── env.d.ts         # TypeScript Definitionen
├── astro.config.mjs     # Astro-Konfiguration
├── package.json         # Dependencies
├── tsconfig.json        # TypeScript Konfiguration
└── README.md           # Diese Datei
```

## 🛠️ Technologie-Stack

- **Astro** - Modernes Web-Framework
- **TypeScript** - Type-safe Development
- **Cloudflare Pages** - Hosting & CDN
- **CSS** - Custom Styles (kein Framework)

## 📝 Wichtige Hinweise

- Die Website ist als **statische Site** konfiguriert für beste Performance
- Falls später Server-Side Rendering (SSR) benötigt wird, kann in `astro.config.mjs` auf `output: 'server'` umgestellt werden
- Alle Bilder befinden sich im `public/` Ordner und werden automatisch optimiert
- Die Website ist vollständig responsive und mobile-optimiert

## 🔧 Entwicklung

### Neue Komponenten hinzufügen

Erstelle neue `.astro` Dateien im `src/components/` Ordner:

```astro
---
// Component logic
---

<div class="my-component">
  <!-- HTML -->
</div>

<style>
  /* Scoped CSS */
</style>
```

### Neue Seiten hinzufügen

Erstelle neue `.astro` Dateien im `src/pages/` Ordner. Astro erstellt automatisch die Routen basierend auf dem Dateinamen.

## 📚 Weitere Ressourcen

- [Astro Dokumentation](https://docs.astro.build)
- [Cloudflare Pages Dokumentation](https://developers.cloudflare.com/pages)
- Siehe auch `cloudflare-pages.md` für detaillierte Deployment-Anweisungen
