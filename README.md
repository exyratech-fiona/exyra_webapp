# Exyra Technologies — AI, Cloud & DevOps Engineering Platform

Next-generation futuristic 3D web platform for Exyra Technologies. Built with Next.js 15, React 19, Three.js, Framer Motion, and Lenis smooth scroll.

---

## Prerequisites

| Tool | Version |
|------|---------|
| Node.js | v18+ (v22 recommended) |
| npm | v9+ |
| Docker | v24+ (optional, for containerized run) |

Install Node.js via Homebrew (macOS):
```bash
brew install node
```

---

## Quick Start (Local Dev)

```bash
# 1. Clone / enter the project
cd exyra_webapp

# 2. Copy environment variables
cp .env.example .env.local

# 3. Install dependencies
npm install --legacy-peer-deps

# 4. Start development server
npm run dev
```

Open **http://localhost:3000** in your browser.

> The `--legacy-peer-deps` flag is required because `three` has a minor peer-dep conflict with an optional Expo package. It is safe to use.

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with Turbopack at http://localhost:3000 |
| `npm run build` | Create optimised production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Docker

### Development (no Nginx)
```bash
docker-compose up webapp
```

### Production (with Nginx reverse proxy)
```bash
# Place your SSL certs in ./certs/fullchain.pem and ./certs/privkey.pem first
docker-compose --profile production up -d
```

### Build image manually
```bash
docker build -t exyra-webapp .
docker run -p 3000:3000 exyra-webapp
```

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in the values you need:

```env
# Required for dev
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Optional — extend with a real backend
ANTHROPIC_API_KEY=sk-ant-...
OPENAI_API_KEY=sk-...
DATABASE_URL=postgresql://postgres:password@localhost:5432/exyra_db
REDIS_URL=redis://localhost:6379
CONTACT_EMAIL=contact@exyra.tech
```

---

## Project Structure

```
exyra_webapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + full SEO metadata
│   │   ├── page.tsx            # Server entry → hands off to ClientRoot
│   │   └── globals.css         # Tailwind base + custom utilities
│   ├── components/
│   │   ├── HomeClient.tsx      # Main client root (assembles all sections)
│   │   ├── ClientRoot.tsx      # SSR-safe dynamic import wrapper
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Sticky glass navbar with dropdown
│   │   │   └── Footer.tsx      # Premium dark footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # 3D orb, particle field, CTA
│   │   │   ├── About.tsx       # Company overview, animated metrics
│   │   │   ├── Programs.tsx    # AI / AWS / DevOps / GenAI programs
│   │   │   ├── DevOps.tsx      # DevOps section + live terminal sim
│   │   │   ├── GenAI.tsx       # Generative AI & LLMOps section
│   │   │   ├── Projects.tsx    # Real enterprise project showcase
│   │   │   ├── TechStack.tsx   # Interactive tech stack grid + marquee
│   │   │   ├── Enterprise.tsx  # Enterprise services + CTA banner
│   │   │   ├── Testimonials.tsx# Auto-play testimonial carousel
│   │   │   ├── Placement.tsx   # Career outcomes + placement stats
│   │   │   └── Contact.tsx     # Contact form with interest tags
│   │   ├── 3d/
│   │   │   ├── AIOrb.tsx       # Animated Three.js sphere (hero)
│   │   │   ├── NeuralNetwork.tsx # Live node-edge network
│   │   │   └── ParticleField.tsx # Mouse-reactive galaxy particles
│   │   └── ui/
│   │       ├── GlowButton.tsx      # Gradient glow CTA button
│   │       ├── GlassCard.tsx       # 3D-tilt glassmorphism card
│   │       ├── CursorGlow.tsx      # Ambient cursor light effect
│   │       ├── MetricsCounter.tsx  # Animated number counters
│   │       ├── TerminalSimulator.tsx # Live CLI animation
│   │       └── ChatWidget.tsx      # AI chatbot widget UI
│   ├── hooks/
│   │   ├── useLenis.ts         # Cinematic smooth scroll
│   │   └── useMousePosition.ts # Normalised mouse coordinates
│   └── lib/
│       └── utils.ts            # cn(), lerp(), clamp(), mapRange()
├── Dockerfile                  # Multi-stage production Docker build
├── docker-compose.yml          # App + optional Nginx services
├── nginx.conf                  # Production reverse proxy config
├── tailwind.config.ts          # Custom colours, animations, keyframes
├── next.config.ts              # Next.js config (standalone output)
├── .env.example                # Environment variable template
└── DEPLOYMENT.md               # Extended deployment notes
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| 3D Graphics | Three.js (plain — no R3F, React 19 compatible) |
| Animations | Framer Motion 11 |
| Smooth Scroll | Lenis |
| Icons | Lucide React |
| Font | Inter + Syne (Google Fonts) |
| Containerisation | Docker + Nginx |

---

## Design System

| Token | Value |
|-------|-------|
| Background | `#060e1e` Dark Navy |
| Primary | `#1457d6` Electric Blue |
| Accent | `#00bcd4` Neon Cyan |
| Highlight | `#00e676` Neon Green |
| Purple | `#8b5cf6` Soft Holographic |

---

## Notes

- **3D components** use plain Three.js `useEffect` + canvas refs — not React Three Fiber — for full React 19 compatibility.
- **SEO** metadata is injected at the server component level (`layout.tsx`) before client-side handoff, so all pages are indexable.
- **`npm install --legacy-peer-deps`** is required due to an optional Expo peer dep in the `three` package tree.
