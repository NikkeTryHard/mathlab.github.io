# Math Lab Static Site

A fully static, responsive site generated from markdown files in `src/lab/`, with client-side tab navigation, MathJax for equations, and Prism-based syntax highlighting.

## Add a New Lab
- Create a markdown file in `src/lab/` (e.g., `src/lab/lab12.md`).
- The first `#` heading becomes the display title; otherwise the filename is used.
- Optional frontmatter:
  ```
  ---
  title: Lab 12 – Advanced Integrals
  ---
  ```
- Run `npm run build`. The lab appears automatically in the left navigation.

## Local Development
- Install dependencies: `npm install`
- Start dev server: `npm run serve`
- Open `http://localhost:8080/` and edit files under `src/`.

## Build for GitHub Pages
- Run `npm run build`; output is generated under `_site/`.
- The GitHub Pages workflow uploads `_site/` automatically on push to `main`.
- For a user site repo named `<username>.github.io`, your site publishes to `https://<username>.github.io/` after the workflow completes.

## Dependencies
- Node.js (LTS)
- Eleventy (`@11ty/eleventy`)
- Eleventy Prism plugin (`@11ty/eleventy-plugin-syntaxhighlight`)
- Markdown-It (used as Eleventy markdown engine)
- MathJax v3 via CDN (no install required)

## Error Handling
- If a markdown file is missing or malformed, the UI shows a friendly error and falls back to the first available lab.
- Build warnings appear in the terminal; fix markdown and rebuild.