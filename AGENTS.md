# Codex Guide — UMD Design System Page Builder

This repository builds standalone HTML pages with the University of Maryland Design System web components. Use these files as the project source of truth before writing page HTML.

## Start Here

For any page-building task, first check the recipe files in `.codex/recipes/`. They are kept as portable task recipes even when using Codex.

| Task | Recipe |
|---|---|
| Recreate an existing page from a URL | `.codex/recipes/recreate-page.md` |
| Build a fresh landing page from a brief | `.codex/recipes/build-landing-page.md` |
| Build a fresh interior page from a brief | `.codex/recipes/build-interior-page.md` |
| Evaluate a design | `.codex/recipes/evaluate-design.md` |
| Recommend a component | `.codex/recipes/recommend-component.md` |
| QA a component after a DS update | `.codex/recipes/qa-component.md` |
| Build fixed sample pages | `.codex/recipes/sample-landing-page.md`, `.codex/recipes/sample-interior-page.md` |

Treat the recipe as required workflow, not loose inspiration.

## Source Of Truth

Use this hierarchy when files disagree:

1. `.codex/recipes/*.md` for task workflow.
2. `RULES.md` for required markup, spacing, slots, attributes, themes, and component gotchas.
3. `registry/` for verified component APIs.
4. `styles/critical.css` for canonical CSS copied into standalone pages.
5. `TEMPLATE.html` for the page skeleton and inline head block.
6. `LAYOUT-PATTERNS.md` for reusable section recipes.
7. `OVERRIDES.md` for documented page-specific deviations.
8. `REQUIRED-CSS.md` for explanatory CSS notes.

Do not invent component slots or attributes. Check the registry category file before using a component.

## Paths

Keep all paths repo-relative. Do not hardcode a user home directory.

- Real demo pages: `examples/{slug}.html`
- Fixed fixture pages: `test/{slug}.html`
- Component QA pages: `qa/{slug}.html`
- Temporary source downloads: `tmp/`
- Project images: `images/projects/{slug}/`

If a recipe mentions an absolute path from an older machine, translate it to the equivalent repo-relative path.

## Page Building Rules

- Start every complete page from `TEMPLATE.html`.
- Preserve the full inline CSS and CDN script order from the template.
- Every top-level landing section normally uses `class="umd-layout-vertical-landing"`.
- Full-bleed components such as hero and pathway should not be wrapped in horizontal spacing utilities.
- Set `data-theme` on each component that needs it. Theme does not cascade through shadow DOM.
- Use local logo fallbacks from `images/logos/`.
- For recreated pages, use visible text from the source page verbatim.
- For generated pages, use local images from `images/images-index.json` unless the user provides assets.

## Verification

For static preview:

```bash
python3 -m http.server 8010
```

Then check the page:

```bash
curl -s -I http://127.0.0.1:8010/examples/{slug}.html
```

For visual QA, open the same URL in a browser and inspect desktop and mobile widths.

## Git Hygiene

This fork may keep `.codex/recipes/` because they are useful portable recipes. Codex-specific behavior should live in `AGENTS.md` and repo docs.

Do not commit `node_modules/`, `.DS_Store`, or temporary `tmp/` downloads.
