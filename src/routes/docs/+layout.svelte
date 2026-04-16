<script lang="ts">
  import { page } from '$app/stores';

  const docSections = [
    {
      title: 'Getting Started',
      links: [
        { href: '/docs/getting-started', label: 'Introduction' },
        { href: '/docs/installation',    label: 'Installation' },
        { href: '/docs/quickstart',      label: 'Quick Start' },
      ]
    },
    {
      title: 'The Language',
      links: [
        { href: '/docs/language/basics',    label: 'Basics & Syntax' },
        { href: '/docs/language/types',     label: 'Fluid Typing' },
        { href: '/docs/language/memory',    label: 'Memory (ARC)' },
        { href: '/docs/language/agents',    label: 'Agents (AOP)' },
        { href: '/docs/language/ai',        label: 'AI Primitives' },
        { href: '/docs/language/comptime',  label: 'Comptime' },
        { href: '/docs/language/null-safety', label: 'Null Safety' },
      ]
    },
    {
      title: 'The Framework',
      links: [
        { href: '/docs/framework/overview',  label: 'Overview' },
        { href: '/docs/framework/rendering', label: 'WebGPU Rendering' },
        { href: '/docs/framework/sync',      label: 'sync let (CRDTs)' },
        { href: '/docs/framework/routing',   label: 'Routing' },
        { href: '/docs/framework/seo',       label: 'Ghost DOM & SEO' },
      ]
    },
    {
      title: 'Toolchain',
      links: [
        { href: '/docs/cli',      label: 'CLI Reference' },
        { href: '/docs/packages', label: 'Package Manager' },
        { href: '/docs/testing',  label: 'Testing' },
        { href: '/docs/deploy',   label: 'Deployment' },
      ]
    }
  ];

  let { children } = $props();
</script>

<div class="docs-layout container">
  <aside class="docs-sidebar" aria-label="Documentation navigation">
    <div class="docs-search">
      <input type="search" placeholder="Search docs... (Cmd+K)" class="docs-search-input" aria-label="Search documentation" />
    </div>
    {#each docSections as section}
      <div class="docs-nav-section">
        <h4 class="docs-nav-title">{section.title}</h4>
        <ul>
          {#each section.links as link}
            <li>
              <a
                href={link.href}
                class="docs-nav-link"
                class:active={$page.url.pathname === link.href}
              >{link.label}</a>
            </li>
          {/each}
        </ul>
      </div>
    {/each}
  </aside>
  <article class="docs-content prose">
    {@render children()}
  </article>
</div>

<style>
  .docs-layout {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: var(--space-16);
    padding-block: var(--space-16);
    min-height: 100vh;
    align-items: start;
  }

  .docs-sidebar {
    position: sticky;
    top: calc(72px + var(--space-8));
    max-height: calc(100vh - 100px);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    padding-right: var(--space-4);
  }

  .docs-search-input {
    width: 100%;
    padding: var(--space-2) var(--space-4);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    color: var(--color-text-primary);
    font-size: 0.875rem;
    font-family: var(--font-body);
  }
  .docs-search-input:focus { outline: none; border-color: var(--color-amber); }
  .docs-search-input::placeholder { color: var(--color-text-muted); }

  .docs-nav-title {
    font-size: 0.6875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: var(--space-2);
  }

  .docs-nav-section ul { list-style: none; display: flex; flex-direction: column; }

  .docs-nav-link {
    display: block;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    font-size: 0.875rem;
    transition: all var(--transition-fast);
    text-decoration: none;
  }
  .docs-nav-link:hover { color: var(--color-text-primary); background: var(--color-surface); }
  .docs-nav-link.active { color: var(--color-amber-bright); background: var(--color-amber-glow); font-weight: 500; }

  .docs-content { max-width: 760px; }

  @media (max-width: 900px) {
    .docs-layout { grid-template-columns: 1fr; }
    .docs-sidebar { position: static; max-height: none; }
  }
</style>
