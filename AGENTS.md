# Agent Guidelines

## Package Manager
Use `pnpm` exclusively. Never use `npm` or `yarn`.

## Stack
- Next.js 14 App Router (not Pages Router)
- TypeScript (strict)
- Tailwind CSS
- shadcn/ui (Radix + Vega preset)
- next-themes for dark/light mode

## Key Conventions
- All source files live under `src/`
- Types are defined in `src/types/index.ts` — never invent new type shapes
- Data lives in `src/data/` as typed TypeScript arrays
- Components are in `src/components/` organized by: `ui/`, `layout/`, `home/`, `project/`
- Always import types from `@/types`
- Always conform strictly to existing interfaces — do not add or rename fields

## Before Writing Any Code
1. Read `src/types/index.ts` to understand data shapes
2. Read existing files in `src/data/` before modifying them
3. Check `src/components/` structure before creating new files
