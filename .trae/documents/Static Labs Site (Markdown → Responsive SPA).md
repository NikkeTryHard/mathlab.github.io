## Overview
Build a fully static, responsive site that converts all `lab/*.md` files (including `lab11.md`) to HTML and presents them inside a single-page interface with a left navigation panel. Tabs switch via client-side routing (no reload), math renders with MathJax, and code blocks are syntax-highlighted.

## Tech Stack
- Eleventy (11ty) as the lightweight static site generator
- Markdown-it (Eleventy default) + Eleventy syntax highlight plugin (Prism)
- MathJax v3 (client-side) for equations
- Vanilla JS for client-side routing and state
- Pure CSS (flex/grid + media queries) for responsive layout

## Output Structure
- `index.html` – one-page app shell with left nav + content area
- `assets/styles.css` – responsive layout and theming
- `assets/app.js` – client-side router, state, error handling
- `assets/prism.css` / `assets/prism.js` – syntax highlighting (via Eleventy plugin or direct Prism assets)
- `assets/mathjax.js` – CDN script include (no local copy required)
- `labs.json` – generated index of all labs (title, slug, path)
- `lab/<slug>.html` – per-lab HTML fragments produced from markdown

## Source Assumptions
- Keep current markdown files in `lab/` at repo root (no reorganization required)
- Titles come from the first H1 in each markdown (or frontmatter if present)

## Eleventy Setup
1. Add `package.json` with scripts: `build` (11ty), `serve` (optional local dev)
2. Install: `@11ty/eleventy`, `@11ty/eleventy-plugin-syntaxhighlight` (Prism)
3. Configure `.eleventy.js`:
   - Define a `labs` collection from `lab/**/*.md`
   - Set `dir.input` to `.` and `dir.output` to the site root (user/organization GitHub Pages serves from root)
   - Use a `lab.njk` layout to wrap each markdown file as an HTML fragment page
   - Generate `labs.json` via a template that serializes the collection
   - Enable syntax highlighting plugin
4. Templates:
   - `layouts/base.njk`: global HTML shell, includes MathJax and Prism assets
   - `layouts/lab.njk`: wraps each lab markdown content in a minimal container that works with MathJax/Prism
   - `labs.json.njk`: outputs lab list (title, slug, output path)

## Client-Side Routing
- Hash-based router in `assets/app.js` (`#lab=<slug>`)
- On load:
  - Fetch `labs.json`, build left nav dynamically
  - Determine current lab from `location.hash` or last selection (localStorage)
  - Fetch `lab/<slug>.html` and inject into content pane
  - Call `MathJax.typesetPromise()` then Prism highlight
- On nav click:
  - Update hash, persist state, highlight active tab
- Error handling:
  - If `labs.json` or a lab HTML fails to load, show a friendly error banner and fallback to the first available lab

## Responsive Design
- Left nav fixed on desktop; collapsible on mobile via a top toggle
- CSS grid/flex; content area scrolls independently
- Touch-friendly hit targets; viewport-safe font sizes

## Markdown Rendering Details
- All standard markdown supported (headers, lists, tables, code fences, images)
- Code fences (` ```lang `) get Prism highlighting classes
- Inline/block math: `$...$` and `$$...$$` rendered by MathJax 3

## Fully Static Guarantees
- Eleventy generates all HTML/CSS/JS upfront
- No server-side code required at runtime
- Output compatible with GitHub Pages user site (root of main branch)

## Error Handling & Robustness
- Missing/malformed markdown: build-time warnings; runtime fallback with clear message
- Broken links/images: highlight in content with CSS warnings
- Defensive JS: timeouts/retries for `fetch`, granular error messages

## Documentation to Deliver
- Add-a-lab: place a new `.md` in `lab/`, rebuild – appears automatically in nav (title from H1)
- Deployment: push generated site to `main`; enable GitHub Pages for user/organization site (root). For local preview, open `index.html` or use `npx eleventy --serve`.
- Dependencies & build: required Node version, install steps, and `npm run build` command

## Verification Plan
- Local build then open `index.html`
- Switch tabs; verify active highlight and persisted state
- Confirm math renders (use `lab11.md` with integrals) and code blocks highlight
- Mobile test with devtools responsive mode

## Optional No-Dependency Variant
If preferred, we can skip Eleventy and ship a tiny Node build script using `markdown-it` + `highlight.js` to generate `lab/*.html` and `labs.json`. The runtime and output are identical for GitHub Pages; Eleventy mainly simplifies templating and collections.

## Next Steps
- Initialize Eleventy config and assets
- Generate baseline site from existing `lab11.md`
- Provide README instructions and verify on a local build