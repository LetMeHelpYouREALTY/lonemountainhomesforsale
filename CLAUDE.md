@AGENTS.md

## Stack
- Next.js 16 (App Router, `src/app`), React 19, TypeScript
- Hosted on Vercel; every PR gets a preview deployment
- npm with a committed `package-lock.json`; Node 24 in CI

## Commands
- `npm ci` install · `npm run dev` local server · `npm run lint` · `npm run typecheck` · `npm run build`
- CI runs these on every PR. Run them before you push.

## Rules
- **Fair Housing first.** No protected-class wording or proxies ("safe neighborhood," "good schools," "family-friendly"). Describe square footage, amenities, school names, and commute times instead.
- **This site's phone number is (702) 500-1942.** Never put 702-222-1964 on the site; that number is for client email and text only.
- **No secrets in git.** `.env*` stays gitignored. A new env var goes in Vercel (Production + Preview), and the PR names it.
- Work on a branch and open a PR. `main` deploys to production.
