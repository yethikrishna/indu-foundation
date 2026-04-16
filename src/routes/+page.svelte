<script lang="ts">
  import { onMount } from 'svelte';
  import Hero3D from '$lib/components/Hero3D.svelte';

  let mounted = $state(false);
  let preloaderDone = $state(false);
  let progress = $state(0);
  let heroVisible = $state(false);

  const problemItems = [
    {
      era: '2020–2022',
      title: 'The Boilerplate Era',
      pain: '5 files to update a boolean. Redux. useEffect hell. GIL. Single-threaded everything.',
      code: `// 80 lines to update a boolean\nconst SET_LOADING = 'SET_LOADING';\nconst loadingReducer = (state = false, action) => {\n  switch(action.type) {\n    case SET_LOADING: return action.payload;\n    default: return state;\n  }\n};\nexport const setLoading = (v) => ({ type: SET_LOADING, payload: v });`,
      color: 'amber'
    },
    {
      era: '2023–2024',
      title: 'The Fragmentation Era',
      pain: 'Next.js black-hole caching. LangChain bloat. 500 Tailwind classes. Hydration errors every sprint.',
      code: `// LangChain to call ONE API\nconst chain = new LLMChain({\n  llm: new ChatOpenAI({ modelName: 'gpt-4' }),\n  prompt: PromptTemplate.fromTemplate(\n    'Answer: {question}'\n  ),\n  memory: new BufferMemory(),\n  outputParser: new StringOutputParser(),\n});`,
      color: 'teal'
    },
    {
      era: '2025–2026',
      title: 'The Agent Sprawl Era',
      pain: '50 hallucinating agents. NPU fragmentation. CRDT math for offline sync. State sync hell.',
      code: `// Offline sync: 200 lines of CRDT math\nconst crdt = new Yjs.Doc();\nconst provider = new WebrtcProvider(\n  'room', crdt, { signaling: [...] }\n);\nconst map = crdt.getMap('state');\nmap.observe(e => { /* conflict resolution... */ });`,
      color: 'purple'
    }
  ];

  const features = [
    {
      icon: '🧠',
      title: 'Agent-Oriented Programming',
      desc: 'agent is a native keyword. Erlang\'s Actor Model built in. Agents crash-restart without touching your main thread.',
      code: 'agent DataFetcher { ... }'
    },
    {
      icon: '⚡',
      title: 'Post-DOM WebGPU Rendering',
      desc: 'Bypasses the DOM entirely. Compiles to Wasm + WebGPU. Runs at game-engine speed. SEO via Ghost DOM.',
      code: 'view Counter { ... }'
    },
    {
      icon: '🔄',
      title: 'Native CRDTs via sync let',
      desc: 'One keyword. SQLite + WebRTC P2P sync automatic. No Redux, no fetch(), no loading states ever again.',
      code: 'sync let cart = [];'
    },
    {
      icon: '🛡️',
      title: 'Safe-by-Default Memory (ARC)',
      desc: 'Deterministic ARC. Zero GC pauses. No borrow checker friction. unsafe {} escape hatch when you need raw speed.',
      code: 'let x: &str = "safe";'
    },
    {
      icon: '🤖',
      title: 'Native AI Primitives',
      desc: 'tensor, stream, agent are built-in types. NEXUS engine runs local models on NPU/WebGPU. No LangChain required.',
      code: 'let t: tensor<f32> = ...;'
    },
    {
      icon: '🔢',
      title: 'Fluid Typing',
      desc: 'Dynamic like Python for prototyping. Type-lock critical paths for LLVM native compilation. Same syntax, zero migration.',
      code: 'let x = 5  →  let x: i32 = 5;'
    }
  ];

  const comparisons = [
    { label: 'vs Python', win: 'Same ergonomics, 100x speed, AI-native types, no GIL' },
    { label: 'vs Rust', win: 'Same safety, no borrow checker, ARC by default' },
    { label: 'vs TypeScript', win: 'No DOM, no API boundary, sync let replaces fetch' },
    { label: 'vs Erlang', win: 'Same actor model, multi-paradigm syntax, web-native' },
    { label: 'vs LangChain', win: 'agent keyword built-in, zero SDK bloat' },
    { label: 'vs Next.js', win: 'No hydration, no caching bugs, Wasm + WebGPU rendering' },
  ];

  onMount(() => {
    // Preloader sequence
    const timer = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(timer);
        setTimeout(() => {
          preloaderDone = true;
          setTimeout(() => { heroVisible = true; }, 100);
        }, 300);
      }
    }, 80);

    mounted = true;

    // GSAP scroll animations (lazy-loaded)
    const initGSAP = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Animate feature cards on scroll
      gsap.utils.toArray('.feature-card').forEach((card: unknown, i: number) => {
        gsap.fromTo(card as Element,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Animate problem cards
      gsap.utils.toArray('.problem-card').forEach((card: unknown) => {
        gsap.fromTo(card as Element,
          { opacity: 0, x: -30 },
          {
            opacity: 1, x: 0,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card as Element,
              start: 'top 80%'
            }
          }
        );
      });

      // Stats counter animation
      gsap.utils.toArray('.stat-number').forEach((el: unknown) => {
        const elem = el as HTMLElement;
        const target = parseInt(elem.dataset.target || '0');
        gsap.fromTo({ val: 0 }, { val: target },
          {
            duration: 2,
            ease: 'power2.out',
            onUpdate: function() { elem.textContent = Math.round(this.targets()[0].val) + (elem.dataset.suffix || ''); },
            scrollTrigger: { trigger: elem, start: 'top 80%' }
          }
        );
      });
    };

    initGSAP();

    return () => clearInterval(timer);
  });
</script>

<svelte:head>
  <title>INDU — The Universal Language & Framework</title>
  <meta name="description" content="INDU: Write with Python's ease, scale with Erlang's fault-tolerance, execute with C's speed. The 2026 developer dream realized." />
</svelte:head>

<!-- PRELOADER -->
{#if !preloaderDone}
  <div class="preloader" role="status" aria-label="Loading INDU Foundation">
    <svg class="preloader-logo" viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="17" stroke="#f59e0b" stroke-width="1.5"/>
      <path d="M10 10 L10 26 M10 18 L18 10 L18 26 M18 10 L26 26 M26 10 L26 26"
            stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <div class="preloader-bar">
      <div class="preloader-bar-fill" style="width: {progress}%"></div>
    </div>
    <p class="preloader-text">Loading INDU Foundation&hellip;</p>
  </div>
{/if}

<!-- HERO -->
<section class="hero" class:visible={heroVisible}>
  <div class="hero-canvas-wrap">
    {#if mounted}
      <Hero3D />
    {/if}
    <div class="hero-gradient"></div>
  </div>

  <div class="container hero-content">
    <div class="badge badge-amber hero-badge">The 2026 Developer Dream Realized</div>
    <h1 class="hero-title">
      The Language That<br />
      <span class="gradient-text">Ends the Fragmentation</span>
    </h1>
    <p class="hero-sub">
      Write with Python's ease. Scale with Erlang's fault-tolerance.<br />
      Execute with C's speed. One language. One AST. Zero compromises.
    </p>
    <div class="hero-cta">
      <a href="/docs/getting-started" class="btn btn-primary btn-lg">Get Started &rarr;</a>
      <a href="/playground" class="btn btn-secondary btn-lg">Try in Playground</a>
    </div>
    <div class="hero-stats">
      <div class="stat">
        <span class="stat-number" data-target="100" data-suffix="x">0x</span>
        <span class="stat-label">Faster than DOM rendering</span>
      </div>
      <div class="stat">
        <span class="stat-number" data-target="0" data-suffix=" null errors">0 null errors</span>
        <span class="stat-label">Algebraic Result types</span>
      </div>
      <div class="stat">
        <span class="stat-number" data-target="1" data-suffix=" binary">0 binary</span>
        <span class="stat-label">Replaces 6 tools</span>
      </div>
    </div>
  </div>

  <div class="hero-scroll-hint" aria-hidden="true">
    <span></span>
  </div>
</section>

<!-- PROBLEM SECTION -->
<section class="section problems" id="problems">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-amber">The Root Cause</span>
      <h2>Fragmentation. We've been building<br /><em>2026 software with 1995 thinking.</em></h2>
      <p class="section-desc">Six years of developer pain. Every era introduced a new layer of abstraction that solved one problem and created three more.</p>
    </div>

    <div class="problems-grid">
      {#each problemItems as item}
        <div class="problem-card card card-{item.color}">
          <div class="problem-era">{item.era}</div>
          <h3 class="problem-title">{item.title}</h3>
          <p class="problem-pain">{item.pain}</p>
          <pre class="problem-code"><code>{item.code}</code></pre>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- SOLUTION SECTION -->
<section class="section solution" id="features">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-teal">The INDU Solution</span>
      <h2>One language. One AST.<br /><span class="gradient-text">Zero compromises.</span></h2>
      <p class="section-desc">INDU was designed from first principles to solve every layer of the stack simultaneously.</p>
    </div>

    <div class="features-grid">
      {#each features as feat}
        <div class="feature-card card">
          <div class="feature-icon">{feat.icon}</div>
          <h3 class="feature-title">{feat.title}</h3>
          <p class="feature-desc">{feat.desc}</p>
          <code class="feature-code">{feat.code}</code>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- CODE COMPARISON -->
<section class="section code-compare" id="compare">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-amber">Side by Side</span>
      <h2>The same intent.<br /><span class="gradient-text">10x less code.</span></h2>
    </div>

    <div class="compare-grid">
      <div class="compare-col">
        <div class="compare-label compare-label-bad">Redux (Today)</div>
        <pre class="compare-code"><code class="lang-js">const SET_LOADING = 'SET_LOADING';
const loadingReducer = (state = false, action) => {{
  switch (action.type) {{
    case SET_LOADING:
      return action.payload;
    default:
      return state;
  }}
}};
const mapState = state => ({{ loading: state.loading }});
const mapDispatch = dispatch => ({{
  setLoading: v => dispatch(setLoading(v))
}});
export default connect(mapState, mapDispatch)(Component);</code></pre>
      </div>
      <div class="compare-col">
        <div class="compare-label compare-label-good">INDU (Now)</div>
        <pre class="compare-code"><code class="lang-indu">let loading = false;

fn toggle() {{
  loading = !loading;
}}</code></pre>
      </div>
    </div>
  </div>
</section>

<!-- COMPARISON TABLE -->
<section class="section versus" id="versus">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-teal">Why INDU Wins</span>
      <h2>Every alternative.<br /><span class="gradient-text">One replacement.</span></h2>
    </div>
    <div class="versus-grid">
      {#each comparisons as c}
        <div class="versus-card">
          <span class="versus-label">{c.label}</span>
          <p class="versus-win">{c.win}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- NEWSLETTER / WAITLIST -->
<section class="section waitlist" id="waitlist">
  <div class="container-narrow">
    <div class="waitlist-card card glow-amber">
      <span class="badge badge-amber">Early Access</span>
      <h2>Join the Alpha</h2>
      <p>Be among the first developers to run INDU code. Get early access to the compiler, playground, and RFC process.</p>
      <form class="waitlist-form" method="POST" action="/api/newsletter">
        <input
          type="email"
          name="email"
          placeholder="your@email.com"
          required
          class="waitlist-input"
          aria-label="Email address"
        />
        <button type="submit" class="btn btn-primary">Join the Alpha &rarr;</button>
      </form>
      <p class="waitlist-note">No spam. Unsubscribe anytime. ~200 devs already on the list.</p>
    </div>
  </div>
</section>

<style>
  /* --- HERO --- */
  .hero {
    position: relative;
    min-height: calc(100vh - 72px);
    display: flex;
    align-items: center;
    overflow: hidden;
    opacity: 0;
    transition: opacity 0.8s ease;
  }
  .hero.visible { opacity: 1; }

  .hero-canvas-wrap {
    position: absolute;
    inset: 0;
    z-index: 0;
  }

  .hero-gradient {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 50% 50%, rgba(245,158,11,0.06) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 20% 80%, rgba(20,184,166,0.05) 0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 80% 20%, rgba(139,92,246,0.04) 0%, transparent 60%);
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: var(--space-8);
    padding-block: var(--space-32);
  }

  .hero-badge { margin-bottom: -var(--space-4); }

  .hero-title {
    font-size: clamp(2.75rem, 7vw, 5.5rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    max-width: 900px;
  }

  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.25rem);
    color: var(--color-text-secondary);
    max-width: 600px;
    line-height: 1.7;
  }

  .hero-cta {
    display: flex;
    gap: var(--space-4);
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero-stats {
    display: flex;
    gap: var(--space-12);
    margin-top: var(--space-8);
    flex-wrap: wrap;
    justify-content: center;
  }

  .stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-1);
  }

  .stat-number {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 2rem;
    color: var(--color-amber-bright);
    letter-spacing: -0.02em;
  }

  .stat-label {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
  }

  .hero-scroll-hint {
    position: absolute;
    bottom: var(--space-8);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-scroll-hint span {
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--color-amber), transparent);
    animation: pulse-glow 2s ease-in-out infinite;
  }

  /* --- SECTIONS --- */
  .section-header {
    text-align: center;
    margin-bottom: var(--space-16);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-4);
  }

  .section-header h2 { max-width: 700px; }

  .section-desc {
    font-size: 1.0625rem;
    color: var(--color-text-secondary);
    max-width: 560px;
    text-align: center;
  }

  /* --- PROBLEMS --- */
  .problems { background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(245,158,11,0.03) 0%, transparent 60%); }

  .problems-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
  }

  .problem-card { display: flex; flex-direction: column; gap: var(--space-4); }

  .problem-era {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-amber);
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  .problem-title { font-size: 1.25rem; color: var(--color-text-primary); }
  .problem-pain  { font-size: 0.9rem; color: var(--color-text-secondary); flex: 1; }

  .problem-code {
    background: var(--color-cosmic-navy);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: var(--space-4);
    font-size: 0.75rem;
    font-family: var(--font-mono);
    overflow-x: auto;
    line-height: 1.5;
    color: var(--color-text-secondary);
    margin-top: auto;
  }

  /* --- FEATURES --- */
  .features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
  }

  .feature-card { display: flex; flex-direction: column; gap: var(--space-3); }
  .feature-icon { font-size: 2rem; }
  .feature-title { font-size: 1.125rem; color: var(--color-text-primary); }
  .feature-desc  { font-size: 0.9rem; color: var(--color-text-secondary); flex: 1; }
  .feature-code  {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-teal-bright);
    background: var(--color-cosmic-navy);
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    border: none;
    margin-top: auto;
  }

  /* --- CODE COMPARE --- */
  .compare-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-6);
  }

  .compare-col { display: flex; flex-direction: column; gap: var(--space-3); }

  .compare-label {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    font-weight: 600;
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  }

  .compare-label-bad  { background: rgba(239,68,68,0.1);  color: #f87171; border: 1px solid rgba(239,68,68,0.2); }
  .compare-label-good { background: var(--color-teal-glow); color: var(--color-teal-bright); border: 1px solid var(--color-teal); }

  .compare-code {
    flex: 1;
    border-radius: 0 0 var(--radius-lg) var(--radius-lg);
    border-top: none;
    margin: 0;
  }

  /* --- VERSUS --- */
  .versus-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-4);
  }

  .versus-card {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    padding: var(--space-6);
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
    transition: all var(--transition-normal);
  }
  .versus-card:hover { border-color: var(--color-teal); transform: translateY(-4px); }

  .versus-label {
    font-family: var(--font-mono);
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-amber-bright);
  }

  .versus-win { font-size: 0.875rem; color: var(--color-text-secondary); line-height: 1.6; }

  /* --- WAITLIST --- */
  .waitlist-card {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
    padding: var(--space-16);
  }

  .waitlist-form {
    display: flex;
    gap: var(--space-3);
    width: 100%;
    max-width: 480px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .waitlist-input {
    flex: 1;
    min-width: 220px;
    padding: var(--space-3) var(--space-4);
    background: var(--color-cosmic-navy);
    border: 1px solid var(--color-border-bright);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    font-family: var(--font-body);
    font-size: 0.9375rem;
    transition: border-color var(--transition-fast);
  }
  .waitlist-input:focus { outline: none; border-color: var(--color-amber); }
  .waitlist-input::placeholder { color: var(--color-text-muted); }

  .waitlist-note {
    font-size: 0.8125rem;
    color: var(--color-text-muted);
  }

  /* --- PRELOADER --- */
  .preloader {
    position: fixed;
    inset: 0;
    background: var(--color-cosmic-navy);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    flex-direction: column;
    gap: var(--space-6);
  }

  .preloader-text {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-text-muted);
    letter-spacing: 0.08em;
  }

  /* --- RESPONSIVE --- */
  @media (max-width: 900px) {
    .problems-grid,
    .features-grid,
    .versus-grid { grid-template-columns: repeat(2, 1fr); }
    .compare-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .problems-grid,
    .features-grid,
    .versus-grid { grid-template-columns: 1fr; }
    .hero-stats   { gap: var(--space-8); }
    .waitlist-card { padding: var(--space-8); }
  }
</style>
