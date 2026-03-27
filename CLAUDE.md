# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Mr. Yee's Classroom — a TanStack Start (React) web app serving as a study hub for AP Computer Science A students. Includes unit notes with Java examples and interactive tools like Tower of Hanoi.

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build to `dist/`

## Architecture

TanStack Start with file-based routing. Key structure:

- `src/routes/__root.tsx` — root layout (navbar, footer, head/meta, fonts)
- `src/routes/index.tsx` — home page hub with unit grid and features
- `src/routes/units/$unitId.tsx` — dynamic unit page route
- `src/components/units/Unit1.tsx` — Unit 1 content (hardware, software, Java basics)
- `src/routes/game.tsx` — Tower of Hanoi game (`/game`)
- `src/routes/pricing.tsx` — pricing page
- `src/routes/contact.tsx` — contact form
- `src/routes/terms.tsx` — terms of service (not affiliated with PISD/PSHS/Mr. Yee)
- `src/components/Navbar.tsx` — shared navigation
- `src/components/Footer.tsx` — shared footer with nav columns, disclaimer, and credit
- `src/styles/global.css` — all CSS (design tokens, component styles, responsive)
- `src/router.tsx` — TanStack Router setup
- `vite.config.ts` — Vite + TanStack Start plugin config

## Design

Light theme following Google's Material-inspired design language. CSS custom properties (`:root` vars) for surface hierarchy, accent colors, and radii. Fonts: Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (code).

## Adding New Units

1. Create `src/components/units/UnitN.tsx` with content
2. Add entry to `unitComponents` map in `src/routes/units/$unitId.tsx`
3. Set `available: true` for the unit in the home page units array (`src/routes/index.tsx`)
