# Eric Youmans — Portfolio

My personal portfolio website. Built with React, TypeScript, Vite, and Tailwind CSS v4. Deployed to GitHub Pages at:

- Production: https://www.ericyoumans.com

## Tech Stack

- React + TypeScript (Vite)
- Tailwind CSS v4 (PostCSS)
- ESLint (flat config)

## Local Development

Prerequisites: Node 20+ and npm.

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is output to `docs/` (configured for GitHub Pages “Deploy from branch”).

## Project Structure

```
.
├─ public/           # static assets copied to build root
│  ├─ CNAME          # custom domain for GitHub Pages
│  └─ resume.pdf     # your resume
├─ src/
│  ├─ App.tsx
│  ├─ Portfolio.tsx  # main UI + data
│  ├─ index.css      # Tailwind v4 entry
│  └─ main.tsx       # app bootstrap
├─ index.html        # Vite HTML entry
├─ vite.config.ts    # base "/" and outDir "docs"
└─ docs/             # built output for Pages
```

## Notes

- The background uses an explicit sRGB gradient to ensure consistent color across browsers.

---

© Eric Youmans. All rights reserved.
