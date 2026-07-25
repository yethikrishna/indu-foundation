<h1 align="center">
  <br>
  INDU Foundation
  <br>
</h1>

<h4 align="center">The Universal Programming Language & Framework — Python's Ease, Erlang's Fault Tolerance, C's Speed</h4>

<p align="center">
  <a href="https://github.com/yethikrishna/indu-foundation/actions">
    <img src="https://img.shields.io/badge/CI%2FCD-Passing-brightgreen" alt="CI/CD">
  </a>
  <a href="https://svelte.dev/">
    <img src="https://img.shields.io/badge/SvelteKit-2.0-FF3E00.svg?logo=svelte" alt="SvelteKit">
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-5.0-blue.svg?logo=typescript" alt="TypeScript">
  </a>
  <a href="https://threejs.org/">
    <img src="https://img.shields.io/badge/Three.js-3D-000000.svg?logo=three.js" alt="Three.js">
  </a>
  <a href="https://supabase.com/">
    <img src="https://img.shields.io/badge/Supabase-BaaS-3ECF8E.svg?logo=supabase" alt="Supabase">
  </a>
  <a href="https://developers.cloudflare.com/pages/">
    <img src="https://img.shields.io/badge/Cloudflare%20Pages-Deploy-F38020.svg?logo=cloudflare" alt="Cloudflare Pages">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
  </a>
</p>

<p align="center">
  <a href="#overview">Overview</a> •
  <a href="#features">Features</a> •
  <a href="#language-design">Language Design</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#quick-start">Quick Start</a> •
  <a href="#project-structure">Structure</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a>
</p>

<br>

## Overview

**INDU** is a universal programming language and framework project that aims to combine Python's programmer-friendly syntax, Erlang's battle-tested fault tolerance and concurrency model, and C's bare-metal performance into a single cohesive language runtime. The INDU Foundation repository hosts the language specification, runtime architecture documentation, interactive website, and developer community platform.

This repository contains the SvelteKit-based website and documentation platform for INDU, featuring interactive 3D visualizations (Three.js/GSAP), MDsvex-powered documentation, syntax highlighting via Shiki, Supabase backend for authentication and data, and Cloudflare Pages deployment for global edge delivery.

## Features

- **Universal Language Vision** - Pythonic syntax + BEAM-style fault tolerance + native performance
- **Interactive Documentation** - MDsvex markdown/Svelte hybrid docs with live code examples
- **3D Language Visualization** - Three.js-powered runtime and architecture visualizations with GSAP animations
- **Syntax Highlighting** - Shiki-powered code blocks with INDU grammar support
- **Edge-Native Deployment** - Cloudflare Pages adapter for global low-latency delivery
- **Supabase Integration** - Authentication, database, and real-time subscriptions via Supabase SSR
- **Rate Limiting** - Upstash Redis for serverless rate limiting on edge functions
- **Email via Resend** - Transactional email for waitlist, newsletter, and community notifications
- **Enhanced Images** - @sveltejs/enhanced-img for optimized image delivery
- **Type-Safe Environment** - Zod validation for all environment variables
- **Svelte Check** - Full TypeScript type checking across Svelte components

## Language Design Pillars

INDU is built around three core design pillars:

1. **Pythonic Simplicity** - Clean, readable syntax with significant indentation, dynamic typing with optional gradual typing, and a batteries-included standard library
2. **Erlang-Scale Reliability** - Actor model concurrency, lightweight processes, supervisor trees, and "let it crash" philosophy for building systems that self-heal
3. **C-Level Performance** - Native compilation via LLVM, zero-cost abstractions, manual memory management with RAII, and SIMD support for compute-intensive workloads

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | SvelteKit 2, Svelte 5 | Full-stack meta-framework with SSR/SSG |
| **Language** | TypeScript | Type-safe development |
| **3D Graphics** | Three.js, @types/three | Interactive visualizations |
| **Animation** | GSAP | Smooth scroll and timeline animations |
| **Documentation** | MDsvex, gray-matter | Markdown + Svelte interactive docs |
| **Syntax Highlighting** | Shiki | Beautiful code blocks |
| **Styling** | Svelte scoped styles | Component-scoped CSS |
| **Backend/BaaS** | Supabase (@supabase/ssr, @supabase/supabase-js) | Auth, database, real-time |
| **Edge Deploy** | @sveltejs/adapter-cloudflare, Wrangler | Cloudflare Pages deployment |
| **Rate Limiting** | Upstash Redis (@upstash/ratelimit, @upstash/redis) | Edge rate limiting |
| **Email** | Resend | Transactional email delivery |
| **Validation** | Zod | Type-safe environment and input validation |
| **Build** | Vite, @sveltejs/vite-plugin-svelte | Fast builds and HMR |
| **Images** | @sveltejs/enhanced-img | Optimized responsive images |

## Architecture

The INDU Foundation website is a SvelteKit application deployed on Cloudflare's edge network:

```
┌─────────────────────────────────────────────────────────┐
│           Cloudflare Pages (Edge Deployment)             │
│  ┌────────────────────────────────────────────────────┐  │
│  │         SvelteKit App (SSR + Client Hydration)     │  │
│  │  Docs (MDsvex) │ 3D Viz (Three.js) │ Animations   │  │
│  │  Auth (Supabase SSR) │ API Routes │ Pages          │  │
│  └──────────────────────┬─────────────────────────────┘  │
└─────────────────────────┼────────────────────────────────┘
                          │ Server-side
          ┌───────────────┼───────────────┐
┌─────────▼──────┐  ┌─────▼──────┐  ┌─────▼──────┐
│   Supabase     │  │  Upstash   │  │   Resend   │
│   Auth + DB    │  │  Redis     │  │   Email    │
└────────────────┘  └────────────┘  └────────────┘
```

## Quick Start

### Prerequisites

- Node.js 20+
- A Supabase project (free tier works)
- A Resend account for email (optional)
- Cloudflare account for deployment (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/yethikrishna/indu-foundation.git
cd indu-foundation

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Add your Supabase URL, anon key, and service role key
# Add Resend API key (optional)

# Start development server
npm run dev

# The site will be available at http://localhost:5173

# Type check
npm run check

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### Deploying to Cloudflare Pages

```bash
# Build and deploy
npm run deploy
```

Configure Cloudflare Pages with:
- Build command: `npm run build`
- Build output directory: `.svelte-kit/cloudflare`
- Environment variables from `.env.example`

## Project Structure

```
indu-foundation/
├── src/
│   ├── lib/               # Shared components and utilities
│   │   ├── components/    # Navigation, hero, 3D scenes, docs components
│   │   ├── three/         # Three.js scenes and visualizations
│   │   └── supabase/      # Supabase client and server helpers
│   ├── routes/            # SvelteKit file-based routing
│   │   ├── +page.svelte   # Homepage
│   │   ├── docs/          # Documentation pages (MDsvex)
│   │   ├── play/          # Interactive playground
│   │   └── +layout.svelte # Root layout
│   ├── app.html           # HTML shell
│   └── app.d.ts           # Type declarations
├── static/                # Static assets (favicon, images, fonts)
├── svelte.config.js       # SvelteKit config with Cloudflare adapter
├── vite.config.ts         # Vite configuration
├── wrangler.toml          # Cloudflare Wrangler configuration
├── tsconfig.json
└── package.json
```

## Environment Variables

```bash
# Supabase Configuration
PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=eyJxxx...
SUPABASE_SERVICE_KEY=eyJxxx...

# Resend Email (optional)
RESEND_API_KEY=re_xxx...
RESEND_AUDIENCE_ID=aud_xxx...

# GitHub OAuth (optional, for GitHub auth)
GITHUB_CLIENT_ID=xxx
GITHUB_CLIENT_SECRET=xxx
```

## Deployment

INDU Foundation is designed for deployment on Cloudflare Pages for global edge delivery:

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `.svelte-kit/cloudflare`
4. Configure environment variables
5. Deploy

Alternative deployment via Wrangler CLI:
```bash
npm run deploy
```

## Contributing

INDU is an open community project. We welcome:
- Language design proposals (via GitHub Issues/Discussions)
- Runtime implementation contributions
- Documentation improvements
- Website enhancements
- Bug reports and feature requests

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure `npm run check` passes
5. Submit a Pull Request

## License

MIT License — see LICENSE for details.

---

<p align="center">
  <sub>One language. Every paradigm. Infinite possibilities.</sub>
</p>

<!--
SEO Keywords: INDU programming language, universal programming language, new programming language, Python Erlang C hybrid, fault tolerant programming, actor model concurrency, SvelteKit language website, systems programming language, language design project, open source compiler
-->
