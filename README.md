# Mootaz Alhalak — Portfolio

Personal portfolio for **Mootaz Alhalak**, Full-Stack Developer at 90Soft.

Built with React 18 + Vite, animated with Framer Motion, styled with a custom
CSS design system (no UI framework) built around the existing brand: the logo
blue `#3a6cf4` and the deep navy `#000016`.

## Sections

| Section          | What it covers                                                                      |
| ---------------- | ----------------------------------------------------------------------------------- |
| Hero             | Name, typewriter role cycle, key stats, resume download                             |
| About            | Bio, quick facts, education, languages, both CVs                                    |
| Experience       | Timeline: 90Soft, Focal X cyber security internship, Focal X MERN training          |
| Work             | Filterable grid of professional projects                                            |
| Skills           | Five grouped toolkits: Frontend, Backend, Data & DevOps, Integrations, Security      |
| Security         | Compact reference block — training and pentest reports, deliberately not the headline |
| Certificates     | Featured certificates plus the full list                                            |
| Contact          | Contact cards, socials, and a mailto-backed message form                            |

## Editing content

All copy lives in **`src/data/content.js`** — profile, stats, experience,
projects, skills, security, certificates and nav links. Nothing
is hardcoded in the components, so adding a project means adding one object.

Each project carries two deliberate flags so a reader can tell the work apart:

- `ownership` — `Built from zero`, `Sole frontend author`, `Core contributor`, …
- `status` — `In production`, `Live`, `Delivered`

## Assets

- `public/assets/images/` — logo, monogram, training project screenshots
- `public/assets/cv/` — full-stack CV and security CV (linked from the nav, About and Security sections)

## Scripts

```bash
npm install
npm run dev      # dev server
npm run build    # production build to dist/
npm run preview  # preview the build
npm run lint
```

## Theming

Light and dark are driven by CSS custom properties under `:root` and
`[data-theme="dark"]` in `src/index.css`. The choice persists to
`localStorage` and is applied by an inline script in `index.html` before first
paint, so there is no flash on load.
