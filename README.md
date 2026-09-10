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

## Analytics

**Google Tag Manager only.** GA4 is configured inside Shoab's GTM container, so
loading GTM is all that is needed. There is deliberately **no separate GA4 tag**
— adding one would double count every pageview.

The tag lives in `app/layout.tsx` via `@next/third-parties`, plus a hand-written
`<noscript>` fallback (the component does not emit one).

| Variable             | Default        | Notes                              |
| -------------------- | -------------- | ---------------------------------- |
| `NEXT_PUBLIC_GTM_ID` | `GTM-P3H64KXM` | Set to `off` or empty to disable    |

The default is baked in, so GTM is live without any Vercel configuration.

### Turning GTM off

**When this page moves under `bolderadventurepark.com`, GTM must be switched
off** — the main site loads its own container, and two copies would double
count. Set `NEXT_PUBLIC_GTM_ID` to `off` in Vercel and redeploy. It is a
`NEXT_PUBLIC_` variable, inlined at build time, so a redeploy is required.

### Tier click tracking

Every Purchase button pushes a `tier_click` event to the dataLayer via
`sendGTMEvent`, carrying `tier` (`tier-1`…`tier-7`), `tier_name`, and
`tier_price` as a number. Shoab picks this up in GTM and forwards it to GA4, so
there is no GA4 work in this codebase.

### UTM tags

Separate from the above, and for a different purpose: `lib/utm.ts` appends
campaign UTM parameters to outbound purchase links. Those are read by analytics
at the **destination** (Roller) to attribute the visit, whereas GTM measures
behaviour **on** this page.

## Deploying to Vercel

Vercel detects Next.js and infers the build settings. No environment variables
are required — GTM is live on its baked-in default.

1. Push this repository to GitHub.
2. In Vercel, **Add New → Project** and import the repository.
3. Framework preset resolves to **Next.js**; leave build command
   (`next build`) and output directory at their defaults.
4. **Deploy.**

Set `NEXT_PUBLIC_GTM_ID` only when you need to override or disable the
container — see [Analytics](#analytics).

Every push to the default branch then ships to production, and pull requests get
their own preview URLs.

To check the production build locally first:

```bash
npm run build
```
