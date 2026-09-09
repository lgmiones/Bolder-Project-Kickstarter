# Bolder Project — crowdfunding campaign page

A Kickstarter-style campaign page for **Bolder Adventure Park at Epic Central**,
built with Next.js. Two tabs — Story and Rewards — with no backend: every route
is statically prerendered.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript**
- **Tailwind CSS v4** (configured via `@theme` in `app/globals.css`, no config file)
- **Inter** via `next/font/google`
- Inline SVG icons — no icon library

## Local development

```bash
npm install
```

```bash
npm run dev
```

Then open http://localhost:3000.

> On Windows, stop the dev server before running `npm run build`. Both processes
> write to `.next` and can deadlock on `app/favicon.ico` (`os error 32`).

## Routes

| Route      | Tab     | Contents                                              |
| ---------- | ------- | ----------------------------------------------------- |
| `/`        | Story   | Campaign story, with the rewards rail alongside it     |
| `/rewards` | Rewards | Every tier: jump-list, pledge card, and full inclusions |

## Project layout

```
app/
  layout.tsx        Root layout, fonts, site metadata (title + description)
  page.tsx          Story tab
  rewards/page.tsx  Rewards tab
  globals.css       Design tokens + button/placeholder styles
components/
  ProjectNav.tsx    Sticky tab bar with the logo
  Footer.tsx        Logo + social links
  BolderLogo.tsx    Logo, dark/light variants
  RewardsSidebar.tsx  Rewards rail on the Story tab
  RewardsIndex.tsx  Desktop jump-list on the Rewards tab
  RewardRow.tsx     Pledge card + inclusions on the Rewards tab
  HashScroll.tsx    Scrolls to #reward-<id> after cross-page navigation
  Icons.tsx         Inline SVG icons
lib/
  rewards.ts        All reward tier data
```

## Editing content

**Reward tiers** live in `lib/rewards.ts`. Titles, amounts, backer counts,
delivery dates and inclusions are filled in; each tier's `description` is still
the shared `PLACEHOLDER` string — replace it per tier. Both tabs read from this
one array.

**Story copy** is in `app/page.tsx`: the `STORY_PARAGRAPHS`, `TEAM_PARAGRAPHS`
and `WHY_PARAGRAPHS` arrays, plus the risks paragraph.

**Site title and description** are in `app/layout.tsx`. Note that
`app/rewards/page.tsx` exports its own `metadata.title`, which overrides the
layout on that route.

**Images.** Photography lives in `public/`:

- `public/images/` — logos (`bolder-logo.png`, `bolder-logo-white-text.png`) and
  general park photography
- `public/All-Attraction/` — one photo per attraction
- `public/After-hero-section/` — venue and interior shots

Story image slots are still `<div class="ksr-placeholder">` blocks labelled with
what belongs there. Swap each for `next/image`:

```tsx
import Image from "next/image";

<Image src="/All-Attraction/Zip-lines.jpg" alt="" width={1200} height={525} />
```

## Design tokens

Defined as CSS variables in `app/globals.css`:

| Token                 | Value     | Used for                 |
| --------------------- | --------- | ------------------------ |
| `--color-ksr-green`   | `#028858` | primary CTA, card border |
| `--color-ksr-text`    | `#282828` | body text                |
| `--color-ksr-border`  | `#d1d1d1` | inputs, secondary button |
| `--color-ksr-footer`  | `#171717` | footer background        |

## Deploying to Vercel

The project needs no environment variables and no extra configuration — Vercel
detects Next.js and infers the build settings.

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset resolves to **Next.js**; leave build command
   (`next build`) and output directory at their defaults.
4. **Deploy.**

Every push to the default branch then ships to production, and pull requests get
their own preview URLs.

To check the production build locally first:

```bash
npm run build
```
