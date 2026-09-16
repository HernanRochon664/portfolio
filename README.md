# portfolio-web

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router), [Tailwind CSS v4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com) (Vega preset), and [next-themes](https://github.com/pacocoursey/next-themes).

## Getting Started

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4, `tw-animate-css`
- **UI:** shadcn/ui with Radix primitives
- **Theme:** next-themes (dark/light)
- **Fonts:** Inter (sans), JetBrains Mono (mono)
- **Language:** TypeScript (strict)
- **i18n:** English (unprefixed URLs) + Spanish (`/es/...`), hand-rolled dictionaries

## Internationalization

The site is bilingual. English lives at the unprefixed URLs (`/`, `/projects`, ...) and
Spanish under `/es/...`; a proxy rewrite maps the unprefixed paths to the internal
`/en/...` routes. All copy lives in `src/lib/dictionaries/{en,es}.ts` - `es` is typed as
`Dictionary`, so a missing translation is a compile error.

## Replacing the CV photo

Overwrite `public/images/profile.jpg` with your own square photo (at least 600x600,
named exactly `profile.jpg`). No code change is needed.

The photo is displayed as a circle, so leave headroom: the head should fill roughly two
thirds of the frame and sit centred, otherwise the circular crop clips the hair. If your
source is framed tighter than that, pad it with the background colour rather than cropping
in - see the `sharp` recipe in `AGENTS.md`.
