# Wellspect tablet companion

Progressive web app that replaces the offline Swedish PowerPoint kiosk used in clinics. Patients and staff can open the three journeys (female CIC, male CIC, Navina bowel care), browse product hubs, and follow large-type snabbguider on a phone or tablet — including offline/kiosk use.

The app is an **educational companion for HCP-prescribed products**. It is not a substitute for professional advice or the instructions for use in the package.

## Run locally

Requires Node 20+.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Live preview (GitHub Pages):** [https://nieminenlinda-del.github.io/Wellspect-tablet/](https://nieminenlinda-del.github.io/Wellspect-tablet/)

Pages deploys from `main` via `.github/workflows/deploy-pages.yml`. If that URL 404s, set **Settings → Pages → Source** to **GitHub Actions** once, then re-run the workflow.

```bash
npm run build    # static export to /out
npm start        # serves the exported site
npm test         # validates content routes
npm run lint
```

## What is implemented

- Home: **BLÅS- OCH TARMSKÖTSEL** with three circular entries
- Category grids for men, women, and Navina
- **Male LoFric Origo** hub in depth (video placeholders, snabbguider for Origo / Sleeve / Pro, mer information)
- Female CIC and Navina paths with product hubs and conservative placeholder copy
- Info page (icon legend + kiosk toggle)
- Contact, Svanenmärket, guides, anatomy stubs
- Persistent chrome: Home, Info, category menu, back to product hub, guide prev/next + page indicator
- PWA manifest + service worker (registered in production builds)
- Optional kiosk mode (`?kiosk=1` or toggle on the info page): fullscreen request, idle return to home, reduced accidental-exit cues

## How content is authored

All user-facing Swedish strings and clinical/educational copy live under `src/content/`:

| File | Role |
| --- | --- |
| `strings.ts` | Chrome / UI copy (ready to split into locales later) |
| `male.ts` | Male RIK journey, Origo depth, Primo/Classic stubs |
| `female.ts` | Female RIK hubs (Sense, Elle, Hydro-Kit) |
| `navina.ts` | Navina Smart / Classic stubs |
| `shared.ts` | Contact, ecolabel, shared disclaimers |
| `catalog.ts` | Resolves URLs → page models and builds the static route list |

To add a product:

1. Add a tile on the journey in `male.ts` / `female.ts` / `navina.ts`.
2. Add a hub, and optional `Guide`, `VideoItem`, or `Article`.
3. Set `video.src` when you have a licensed file or URL (place files in `public/videos/` if hosting locally).
4. Run `npm test` — broken links fail the catalog build.

Do **not** invent dosing, irrigation volumes, or clinical claims. Keep instructional text aligned with the package IFU and clinic training. Official public Origo steps used here come from Wellspect’s published education pages; Sleeve steps follow the kiosk slide.

See [CONTENT-MAP.md](./CONTENT-MAP.md) for every route.

## Kiosk mode

- Open `/info/` and tap **Aktivera kioskläge**, or start at `/?kiosk=1`.
- The app asks for fullscreen, stores the flag in `localStorage`, and returns to home after 3 minutes of idle time.
- Browsers cannot fully lock the tablet; pair with the device’s own guided-access / kiosk setting for clinic use.

## Next steps

- Wire real clinic videos and PDF guides (replace placeholders, update `PRECACHE` in `public/sw.js` if you want them offline on first launch).
- Add Finnish / English by cloning `strings.ts` and content modules behind a locale switch.
- Import remaining kiosk slides (~74) as guides using the same `Guide` shape.
- Host `out/` on any static host (GitHub Pages, Netlify, clinic NAS) or serve from the tablet. GitHub Pages uses `GITHUB_PAGES=true` so the app is served under `/Wellspect-tablet/`.

## Medical framing

LoFric® and Navina™ are Wellspect trademarks. This repository is a clinic companion, not an official IFU. Always follow the instructions in the package and the technique taught by the prescriber.
