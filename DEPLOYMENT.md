# Exyra Technologies — Deployment Guide

## Quick Start (Development)

```bash
cp .env.example .env.local
npm install --legacy-peer-deps
npm run dev
# → http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

## Docker

### Development
```bash
docker-compose up webapp
```

### Production (with Nginx)
```bash
docker-compose --profile production up -d
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|---|---|
| `ANTHROPIC_API_KEY` | For AI chatbot backend extension |
| `DATABASE_URL` | PostgreSQL connection string |
| `REDIS_URL` | Redis for caching |
| `CONTACT_EMAIL` | Where contact form submissions go |

## Tech Stack

- **Next.js 15** — App Router, server components
- **React 19** — Latest concurrent features
- **Three.js + R3F** — 3D AI orb, neural network, particle field
- **Framer Motion** — Scroll animations, page transitions
- **Lenis** — Cinematic smooth scrolling
- **Tailwind CSS v3** — Utility-first styling
- **TypeScript** — Full type safety

## Architecture

```
src/
├── app/              # Next.js App Router
│   ├── layout.tsx    # Root layout + SEO metadata
│   └── page.tsx      # Entry point (server → client handoff)
├── components/
│   ├── layout/       # Navbar, Footer
│   ├── sections/     # Hero, About, Programs, DevOps, GenAI,
│   │                 # Projects, TechStack, Enterprise,
│   │                 # Testimonials, Placement, Contact
│   ├── 3d/           # AIOrb, NeuralNetwork, ParticleField
│   └── ui/           # GlowButton, GlassCard, ChatWidget,
│                     # TerminalSimulator, MetricsCounter, CursorGlow
├── hooks/            # useLenis, useMousePosition
├── lib/              # utils (cn, lerp, clamp)
└── types/            # Three.js JSX type declarations
```

## Performance Notes

- 3D components are lazy-loaded with `React.lazy` + `Suspense`
- Full app is client-side only (`ssr: false`) to avoid 3D/DOM conflicts
- SEO metadata is injected at the server component level before handoff
- Particle counts are tuned for 60fps on mid-range hardware

## Extending the Backend

The project is frontend-only by default. To add a real backend:

1. Add FastAPI service to `docker-compose.yml`
2. Add PostgreSQL + Prisma ORM
3. Add Redis for rate limiting / caching
4. Add API routes under `src/app/api/`
