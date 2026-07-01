# Lone Mountain Homes for Sale

Marketing site for [lonemountainhomesforsale.com](https://www.lonemountainhomesforsale.com/) — Next.js App Router, Lone Mountain / 89129 focus, photo gallery from repo assets, RealScout search, and GBP-aligned NAP + JSON-LD.

## Tech stack

Synced with the live [Vercel project](https://vercel.com/janet-duffys-projects/lonemountainhomesforsale) (`prj_H7p5VraYSnXVZEPXwT3Gzsbz7p79`).

| Layer | Version / setting |
| --- | --- |
| **Hosting** | Vercel (Fluid Compute, `iad1`) |
| **Node.js** | 24.x |
| **Framework** | Next.js 16.2.2 (App Router, Turbopack) |
| **UI** | React 19.2.4 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Bundler (prod)** | Turbopack (`next build`) |
| **Git** | [LetMeHelpYouREALTY/lonemountainhomesforsale](https://github.com/LetMeHelpYouREALTY/lonemountainhomesforsale) → `main` |
| **Domains** | `lonemountainhomesforsale.com`, `www.lonemountainhomesforsale.com` |

**Integrations:** RealScout (MLS search), Google Maps / My Maps (open houses), JSON-LD (`RealEstateAgent`, `WebSite`, `FAQPage`).

## Scripts

```bash
npm run dev          # local development
npm run build        # production build (Next.js)
npm run vercel:build # Vercel parity build (preferred before deploy)
npm run lint         # ESLint
```

## Environment

Copy `.env.example` to `.env.local` and set optional values:

- `NEXT_PUBLIC_REALSCOUT_AGENT_ID` — RealScout encoded agent/office id (default is set in code).

## Assets

Listing photography lives in `public/assets/` (`photo_001.jpg` … `photo_033.jpg`). Add or replace files there to update the gallery and hero source image.

## License / compliance

Dr. Jan Duffy · Nevada license S.0197614.LLC · Berkshire Hathaway HomeServices Nevada Properties. Confirm NAP and hours against your live Google Business Profile before launch.
