
# Michael Radzeiovsky — Portfolio

A clean, fast React 19 + Vite + Tailwind portfolio (dark/light) with projects grid,
experience, and education sections. Deploys **free** to **GitHub Pages** using a
preconfigured GitHub Actions workflow.

## Quick Start

```bash
npm i
npm run dev
```

## Customize content

Edit the data files in `src/data/`:

- `profile.ts` — name, title, summary, email, GitHub
- `experience.ts` — roles
- `education.ts` — degrees
- `projects.ts` — grid cards (link each card to a repo/demo)

## Deploy to GitHub Pages (free)

1. Create a **new GitHub repo** (public or private). If private, enable Pages for private repos.
2. Push this code to the repo (main branch).
3. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. On the next push to `main`, the included workflow (`.github/workflows/deploy.yml`) will build and publish to Pages.
5. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

The Vite config uses `base: './'` to make paths work on subpaths automatically.

## Notes

- No React fragments shorthand (`<> </>`) are used.
- Works without React Router; all sections on one page.
- Lucide icons for lightweight, modern icons.
