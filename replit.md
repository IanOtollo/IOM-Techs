# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM

## IOM Techs Website (`artifacts/iomtechs-website`)

Professional multi-page B&W website for IOM Techs — a Nairobi-based software studio.

**Tech:** React + Vite + TypeScript + Tailwind CSS + wouter + GSAP + Lenis + Framer Motion + react-icons

**Pages:** `/` Home · `/services` · `/work` · `/about` · `/pricing` · `/contact` · `/project-request`

**Key features:**
- SVG circuit grid fixed background
- Custom CSS cursor (dot + lerp ring)
- Lenis smooth scroll (lerp 0.1)
- GSAP ScrollTrigger (service cards, stats count-up, horizontal process scroll)
- Framer Motion page transitions + card hover states
- Auto-scroll marquee strip
- Live GitHub API fetch (`IanOtollo`) for work page
- Liquid glass utility classes (`.glass`, `.glass-pill`)
- 3-step animated project request form
- FAQ accordion on pricing page
- Contact form with success state
- Pure #000 background — strict B&W, no colors ever

**Design tokens:** Inter + JetBrains Mono fonts, `--surface-1: #0a0a0a`, `--surface-2: #111`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
