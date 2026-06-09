# Agent Guidelines

## Stack
- Next.js 16 (App Router) + React 19, TypeScript strict, Tailwind v4 (`@tailwindcss/postcss`)
- shadcn/ui with the **radix-vega** preset; icons from `lucide-react`; `next-themes` for dark/light
- Fonts loaded via `next/font/google` in `src/app/layout.tsx` (Inter + JetBrains Mono)
- Inter + JetBrains Mono CSS variables: `--font-sans`, `--font-jetbrains-mono`

## Toolchain
- Package manager: **pnpm** only (pinned via `packageManager: pnpm@10.34.1` in `package.json`). Never `npm` or `yarn`.
- Node: **20** (see `.nvmrc`).
- `pnpm` config in `package.json`: `onlyBuiltDependencies: ["sharp"]`, `overrides: { "fetch-blob": "3.1.3" }`.

## Scripts (`pnpm …`)
- `dev` — `next dev` (default port 3000)
- `build` — `next build`
- `start` — `next start`
- `lint` — `eslint` (flat config, `eslint.config.mjs`, extends `eslint-config-next` core-web-vitals + typescript)
- **No `typecheck` script.** Run `pnpm exec tsc --noEmit` to typecheck.
- **No test framework is configured.** Don't add tests without confirming the runner first.

## Source Layout
All source lives under `src/` (per `tsconfig.json` `paths: "@/*": ["./src/*"]`):
- `src/app/` — App Router routes. `layout.tsx` mounts `Navbar` + `Footer` and wraps everything in `ThemeProvider`.
  - Routes: `/`, `/about`, `/contact`, `/lab`, `/projects` (list), `/projects/[slug]` (detail), `/resume` (with co-located `PrintButton.tsx`).
  - `app/projects/[slug]/page.tsx` uses `generateStaticParams` and `generateMetadata` reading from `src/data/projects.ts` — adding a project there auto-creates a static page.
  - `app/opengraph-image.tsx`, `app/robots.ts`, `app/sitemap.ts` are present.
- `src/components/` organized as: `ui/` (shadcn-generated primitives, do not hand-edit patterns), `layout/` (Navbar, Footer, ThemeProvider), `home/` (Hero, FeaturedProjects, Skills, LabPreview).
- `src/data/projects.ts` (`ProjectCaseStudy[]`) and `src/data/lab.ts` (`LabItem[]`).
- `src/lib/utils.ts` — exposes the `cn()` helper (clsx + tailwind-merge). The shadcn alias `utils: "@/lib/utils"` resolves here.
- `src/styles/globals.css` — Tailwind v4 entry, imported by `layout.tsx`. **Not** `app/globals.css`.
- `src/types/index.ts` — single source of truth for all domain types (`ProjectBase`, `ProjectCaseStudy`, `LabItem`, `ProjectStatus`, `Metric`, `ProjectInsight`).

## Conventions
- Import types from `@/types`; never invent new shapes. If a field is missing, extend `src/types/index.ts` first and update the data arrays in lockstep.
- `ProjectBase.tags` is **thematic** (filters/SEO); `ProjectCaseStudy.technologies` is the **stack**. Don't conflate them.
- Status values are enum strings: project status `"completed" | "in-progress" | "planned"`; lab status `"completed" | "ongoing"`.
- New components go in the matching subfolder under `src/components/`. UI primitives from shadcn CLI land in `src/components/ui/`.
- All classnames go through `cn()` from `@/lib/utils` (do not import `clsx`/`tailwind-merge` directly in app code).
- No comments in code unless explicitly requested.

## Theme / Hydration
- `ThemeProvider` (in `src/components/layout/ThemeProvider.tsx`) uses `attribute="class"`, `defaultTheme="dark"`, `enableSystem`, `disableTransitionOnChange`.
- The `<html>` element in `src/app/layout.tsx` carries `suppressHydrationWarning` — keep it; next-themes flips the class on the client.
- Client components that read theme state must guard against SSR. Follow the `useSyncExternalStore` pattern used in `src/components/layout/Navbar.tsx`.

## Before Writing Code
1. Read `src/types/index.ts`.
2. Skim `src/data/projects.ts` and `src/data/lab.ts` for shape conformance.
3. Check `src/components/` for an existing component to extend before creating a new one.
4. Match existing style: shadcn/ui Radix Vega defaults, Tailwind v4 utility classes, no inline styles.

## Known Gotchas
- **No `public/` directory currently exists.** Project data references `/images/projects/*.jpg` in `coverImage` and `architectureImage` — those assets are not in the repo. Add the `public/images/projects/` files (or update the data) before the gallery/cover renders correctly.
- `src/data/projects.ts` entries use empty strings (`""`) for `architectureImage`, `demoUrl`, `articleUrl` when absent. Keep this pattern; downstream code checks for truthy URLs.
- Tailwind v4 is configured via PostCSS (`postcss.config.mjs`); there is **no** `tailwind.config.*` file. Don't add one.
- ESLint flat config uses `globalIgnores` to re-include `.next/**`, `out/**`, `build/**`, and `next-env.d.ts` from the default `eslint-config-next` ignores — preserve that override.
- Do not commit `tsconfig.tsbuildinfo`, `.next/`, or `next-env.d.ts` (gitignored).
