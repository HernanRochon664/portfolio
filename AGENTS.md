# Agent Guidelines

## Stack
- Next.js 16 (App Router) + React 19, TypeScript strict, Tailwind v4 (`@tailwindcss/postcss`)
- shadcn/ui with the **radix-vega** preset; icons from `lucide-react`; `next-themes` for dark/light
- Fonts loaded via `next/font/google` in `src/app/[locale]/layout.tsx` (Inter + JetBrains Mono)
- Inter + JetBrains Mono CSS variables: `--font-sans`, `--font-jetbrains-mono`

## Toolchain
- Package manager: **pnpm** only (pinned via `packageManager: pnpm@10.34.1` in `package.json`). Never `npm` or `yarn`.
- Node: **20** (see `.nvmrc`). The default shell here has a broken nvm lazy-loader (bare
  `node`/`pnpm` hang in a `_load_nvm` loop) - use the absolute path
  `/home/hernanrochon/.nvm/versions/node/v20.20.2/bin/pnpm`, and put that `bin` on `PATH`
  for `pnpm build` so `next` sees Node 20.
- `pnpm` config in `package.json`: `onlyBuiltDependencies: ["sharp"]`, `overrides: { "fetch-blob": "3.1.3" }`.

## Scripts (`pnpm …`)
- `dev` - `next dev` (default port 3000)
- `build` - `next build`
- `start` - `next start`
- `lint` - `eslint` (flat config, `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)
- **No `typecheck` script.** Run `pnpm exec tsc --noEmit` to typecheck.
- **No test framework is configured.** Don't add tests without confirming the runner first.

## Source Layout
All source lives under `src/` (per `tsconfig.json` `paths: "@/*": ["./src/*"]`):
- `src/app/[locale]/` - **every page route lives under the `[locale]` segment.** There is
  **no `src/app/layout.tsx`**: `src/app/[locale]/layout.tsx` is the root layout - it owns
  `<html lang={locale}>`, the fonts, the globals import, `generateStaticParams` (both
  locales), `generateMetadata`, and mounts `Navbar` + `Footer` inside `ThemeProvider`.
  - Routes: `/`, `/about`, `/contact`, `/lab`, `/projects` (list), `/projects/[slug]` (detail), `/resume` (with co-located `PrintButton.tsx`), plus `not-found.tsx` and a `[...rest]/page.tsx` catch-all that calls `notFound()`.
  - Every page is `async` and takes `params: Promise<{ locale: Locale }>`.
  - `app/[locale]/projects/[slug]/page.tsx` uses `generateStaticParams` (returning only `{ slug }` - Next cross-products it with the parent layout's `{ locale }`) and `generateMetadata` reading from `src/data/projects.ts` - adding a project there auto-creates static pages in both locales.
  - Locale-neutral and therefore **outside** `[locale]`: `app/opengraph-image.tsx`, `app/robots.ts`, `app/sitemap.ts`, `app/icon.svg`.
- `src/proxy.ts` - the i18n routing layer (see Internationalization).
- `src/components/` organized as: `ui/` (shadcn-generated primitives, do not hand-edit patterns), `layout/` (Navbar, Footer, ThemeProvider, LanguageSwitcher), `home/` (Hero, FeaturedProjects, Skills, LabPreview).
- `src/data/projects.ts` (`ProjectCaseStudy[]`) and `src/data/lab.ts` (`LabItem[]`).
- `src/lib/utils.ts` - exposes the `cn()` helper (clsx + tailwind-merge). The shadcn alias `utils: "@/lib/utils"` resolves here.
- `src/lib/i18n.ts` - `locales`, `Locale`, `defaultLocale`, `Localized<T>`, `isLocale`, `stripLocale`, `localizedPath`, `t`. Edge-safe (no Node APIs) because `proxy.ts` imports it.
- `src/lib/dictionaries/` - `en.ts` (source of truth, also exports `type Dictionary = typeof en`), `es.ts`, `index.ts` (`getDictionary`).
- `src/lib/seo.ts` - `SITE_URL`, `alternatesFor(route, locale)`, `openGraphLocale`.
- `src/lib/project-status.ts` - `projectStatusClass` (badge classes only; labels come from `dict.projects.status`).
- `src/styles/globals.css` - Tailwind v4 entry, imported by `layout.tsx`. **Not** `app/globals.css`.
- `src/types/index.ts` - single source of truth for all domain types (`ProjectBase`, `ProjectCaseStudy`, `LabItem`, `ProjectStatus`, `Metric`, `ProjectInsight`).

## Conventions
- Import types from `@/types`; never invent new shapes. If a field is missing, extend `src/types/index.ts` first and update the data arrays in lockstep.
- `ProjectBase.tags` is **thematic** (filters/SEO); `ProjectCaseStudy.technologies` is the **stack**. Don't conflate them.
- Status values are enum strings: project status `"completed" | "in-progress" | "planned"`; lab status `"completed" | "ongoing"`.
- New components go in the matching subfolder under `src/components/`. UI primitives from shadcn CLI land in `src/components/ui/`.
- All classnames go through `cn()` from `@/lib/utils` (do not import `clsx`/`tailwind-merge` directly in app code).
- No comments in code unless explicitly requested.

## Internationalization
- Two locales: `en` (default) and `es`. **English is unprefixed** - `/projects` stays
  `/projects`; Spanish lives at `/es/projects`. Existing URLs must never gain a prefix.
- `src/proxy.ts` (**not** `middleware.ts` - that convention is deprecated in Next 16 and
  the build warns about it) rewrites unprefixed paths to `/en/...` internally, 308-redirects
  `/en/*` back to the unprefixed form, and 307s `/` to `/es` when the `NEXT_LOCALE` cookie
  says so. Its matcher excludes `_next/`, `opengraph-image`, and any path containing a dot.
  It also sets an `x-locale` request header.
- **All user-facing copy lives in `src/lib/dictionaries/{en,es}.ts`.** Never hardcode a
  string in a component. `en.ts` is the source of truth and exports `Dictionary = typeof en`;
  `es.ts` is declared `const es: Dictionary`, so a missing or misspelled key is a compile
  error. Do **not** add `as const` to `en` - it would turn every value into a literal type
  and break `es`.
- For lists with a fixed number of entries (practices, skill groups, statuses, languages)
  use **keyed objects**, not arrays, and render with `Object.entries`/`Object.values`.
  `typeof en` widens arrays, so an array would let `es` ship fewer items unnoticed.
- Localized **data** (`src/data/*.ts`) uses `Localized<string>` (= `{ en, es }`) fields on
  the domain types, read through `t(value, locale)`. Product names, slugs, tags,
  `technologies`, metric `value`s, dates and URLs stay plain strings.
- **Every internal href goes through `localizedPath(path, locale)`** with an unprefixed
  path; every pathname comparison goes through `stripLocale()`. This is not optional:
  `usePathname()` returns the *rewritten* path on the server (`/en/projects`) and the
  *address-bar* path on the client (`/projects`), so comparing or building from the raw
  value produces a hydration mismatch on every English page.
- Every page's `generateMetadata` must call `alternatesFor(route, locale)` with its own
  route - Next does **not** merge `alternates` across segments, a child replaces the
  layout's entirely.
- `src/app/sitemap.ts` emits both locales for every route.

## Theme / Hydration
- `ThemeProvider` (in `src/components/layout/ThemeProvider.tsx`) uses `attribute="class"`, `defaultTheme="dark"`, `enableSystem`, `disableTransitionOnChange`.
- The `<html>` element in `src/app/[locale]/layout.tsx` carries `suppressHydrationWarning` - keep it; next-themes flips the class on the client.
- Client components that read theme state must guard against SSR. Follow the `useSyncExternalStore` pattern used in `src/components/layout/Navbar.tsx`.

## Before Writing Code
1. Read `src/types/index.ts` and `src/lib/i18n.ts`.
2. Skim `src/data/projects.ts` and `src/data/lab.ts` for shape conformance.
3. Check `src/components/` for an existing component to extend before creating a new one.
4. Match existing style: shadcn/ui Radix Vega defaults, Tailwind v4 utility classes, no inline styles.
5. Any new user-facing string goes in `src/lib/dictionaries/en.ts` **and** `es.ts`; any new
   internal link goes through `localizedPath()`.

## CV / Resume (`src/app/[locale]/resume/page.tsx`)
- The PDF produced by "Download PDF" (`window.print()`) **must fit on a single A4 page**,
  **in both locales**. **English is the worst case**, not Spanish: the Spanish copy in
  `dictionaries/es.ts` was written to a character budget and the English was not. Verify
  `/resume` first, then `/es/resume`.
- **Set print sizes in `pt`, never rely on the inherited `rem`.** `html, body` is `11pt` in
  print, so a plain `text-sm` renders at `0.875rem` = **9.6pt** and `text-xs` at 8.25pt.
  That is what made the CV look shrunken. Body copy carries `print:text-[10.5pt]`, section
  headings `print:text-[8.5pt]`, the name `print:text-[19pt]`, the role `print:text-[11pt]`,
  and the contact lines `print:text-[8.5pt]`.
- Constraints to preserve single-page output:
  - `@page { size: A4; margin: 12mm; }` in `src/styles/globals.css`.
  - The container keeps `max-w-2xl` in print (= 42 x 11pt = 163mm inside a 186mm content
    box). **Do not add `print:max-w-none`** - full-bleed lines are what made it read as a
    dense flyer rather than a CV.
  - Section rhythm: `print:mb-2.5` on sections, `print:mb-2` on headings,
    `print:gap-2.5` between project cards, `print:space-y-0.5` on bullets.
  - Skills print in **one** column (a two-column print grid comes out ragged, because the
    left rows wrap and the right ones do not). Education and Languages do share a
    two-column print row.
  - Do **not** add new sections, longer bios, or extra projects without compensating by
    compressing existing content first.
- **How to check the page budget properly.** `/Count` in the PDF only tells you 1 vs 2 pages,
  which says nothing about how close to the edge you are, and parsing text coordinates out of
  the content streams is unreliable. Instead **stress-test the margin**: temporarily raise
  `@page { margin }` in `globals.css`, rebuild, and see at what value it spills to 2 pages.
  Each extra mm of margin removes 2mm of vertical room. The layout currently survives
  `margin: 15mm` in both locales, i.e. ~6mm of real headroom at the production 12mm -
  keep it there. Always restore `12mm` afterwards.
- **Restart the server after every rebuild before generating a PDF.** `next build` replaces
  the hashed assets under `.next`, so a server process started against an earlier build
  starts returning 500 for its own CSS; the page then renders completely unstyled and prints
  as ~5 pages, which looks exactly like a layout regression and is not one. Assert that the
  CSS the page references returns 200 before trusting any measurement.
- **Photo.** The CV header is a flex row: photo left, name/role/contact right, `items-center`.
  The photo is `size-24` on screen and `print:size-[27mm]`. Only the first ~23mm are free:
  that is the height of the name/role/contact block it sits beside, and `items-center` means
  the row is as tall as the taller of the two. Every mm beyond that adds a mm to the page, so
  **27mm is the ceiling** - 30mm was measured and it eats the whole margin buffer (spills at a
  14mm `@page` margin). Putting the photo above the name instead of beside it would cost its
  full height outright. It uses `next/image` with `priority`: a lazily-loaded image can be
  omitted from the PDF entirely.
  - The `width`/`height` props (300) do not set the rendered size - the classes do. They pick
    which optimised variant is fetched, and at 27mm the 600px variant is needed to stay sharp
    (~564dpi); dropping them back to 240 would print the photo at ~226dpi.
  - The print block in `globals.css` has a `body img` rule that must stay **after**
    `body, body *`. `img { ... !important }` has specificity (0,0,1) and loses to
    `body, body *` at (0,0,2); `body img` ties and wins only on source order. Getting this
    wrong silently paints a white box over the photo in the PDF.
  - The image path is `public/images/profile.jpg` - 600x600 JPEG, the real photo. The
    contract with the user is that they overwrite that exact filename and nothing in the
    code changes - **do not rename it or switch formats.**
  - **Framing matters because the crop is circular.** `object-position` is useless here: the
    image and the box are both square, so `object-cover` never crops and the property has
    no effect. To recompose, pad the source with `sharp` instead - the current photo was
    built by extending a tight headshot to a 731px canvas (white on top/sides,
    `extendWith: "copy"` on the bottom so the shirt continues instead of ending in a hard
    line) and resizing back to 600. Aim for the head at ~68% of the frame, centred.
  - `next/image` caches optimised output in `.next/cache/images` keyed by URL, so after
    replacing the file locally you must `rm -rf .next/cache/images` or you will keep
    seeing the old photo.
- Site chrome is hidden in print by the explicit `.no-print` class on `Navbar`'s `<header>`
  and `Footer`'s `<footer>`. Do **not** hide by tag name (`header, footer`) in the print
  rules: the resume's own name/role/contact block is a `<header>`, and a tag-name rule
  silently drops it from the PDF.
- After any change to the resume, verify in the browser print preview (Cmd/Ctrl+P) that
  the preview shows **1 page**, not 2, and that the name and contact line are present,
  before considering the change done.

## Known Gotchas
- `public/images/` now exists (CV photo only). Project data still references `/images/projects/*.jpg` in `coverImage` and `architectureImage` - those assets are **not** in the repo and nothing currently renders them. Add the `public/images/projects/` files (or update the data) before the gallery/cover renders correctly.
- `src/data/projects.ts` entries use empty strings (`""`) for `architectureImage`, `demoUrl`, `articleUrl` when absent. Keep this pattern; downstream code checks for truthy URLs.
- Tailwind v4 is configured via PostCSS (`postcss.config.mjs`); there is **no** `tailwind.config.*` file. Don't add one.
- ESLint flat config uses `globalIgnores` to re-include `.next/**`, `out/**`, `build/**`, and `next-env.d.ts` from the default `eslint-config-next` ignores - preserve that override.
- Do not commit `tsconfig.tsbuildinfo`, `.next/`, or `next-env.d.ts` (gitignored).
