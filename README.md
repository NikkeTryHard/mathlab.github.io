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
- Run `npm run build` to generate the site into the repository root:
  - `index.html`, `labs.json`, `assets/`, and `lab/<slug>.html` files
- Commit and push to the `main` branch.
- In GitHub, enable Pages for a user/organization site:
  - Repository is named `<username>.github.io`
  - Serve from the `main` branch, root
- Wait for Pages to publish; your site is live at `https://<username>.github.io/`.

## Dependencies
- Node.js (LTS)
- Eleventy (`@11ty/eleventy`)
- Eleventy Prism plugin (`@11ty/eleventy-plugin-syntaxhighlight`)
- MathJax v3 via CDN (no install required)

## Error Handling
- If a markdown file is missing or malformed, the UI shows a friendly error and falls back to the first available lab.
- Build warnings appear in the terminal; fix markdown and rebuild.