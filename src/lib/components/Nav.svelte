<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let scrolled = $state(false);
  let mobileOpen = $state(false);

  const navLinks = [
    { href: '/docs',       label: 'Docs' },
    { href: '/language',   label: 'Language' },
    { href: '/framework',  label: 'Framework' },
    { href: '/playground', label: 'Playground' },
    { href: '/blog',       label: 'Blog' },
    { href: '/community',  label: 'Community' },
  ];

  onMount(() => {
    const onScroll = () => { scrolled = window.scrollY > 40; };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<nav class="nav" class:scrolled class:mobile-open={mobileOpen} aria-label="Main navigation">
  <div class="nav-inner container">
    <!-- Logo -->
    <a href="/" class="nav-logo" aria-label="INDU Foundation home">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <!-- The Weave mark: interlocking I-N-D-U paths -->
        <circle cx="18" cy="18" r="17" stroke="#f59e0b" stroke-width="1.5"/>
        <path d="M10 10 L10 26 M10 18 L18 10 L18 26 M18 10 L26 26 M26 10 L26 26" 
              stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="nav-logo-text">INDU</span>
      <span class="nav-logo-tag">Foundation</span>
    </a>

    <!-- Desktop Links -->
    <ul class="nav-links" role="list">
      {#each navLinks as link}
        <li>
          <a
            href={link.href}
            class="nav-link"
            class:active={$page.url.pathname.startsWith(link.href)}
          >{link.label}</a>
        </li>
      {/each}
    </ul>

    <!-- CTA -->
    <div class="nav-actions">
      <a href="https://github.com/yethikrishna/indu-foundation" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a href="/docs/getting-started" class="btn btn-primary btn-sm">Get Started</a>
      <button
        class="hamburger"
        onclick={() => mobileOpen = !mobileOpen}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  {#if mobileOpen}
    <div class="mobile-menu" role="dialog" aria-label="Mobile navigation">
      <ul role="list">
        {#each navLinks as link}
          <li>
            <a href={link.href} class="mobile-link" onclick={() => mobileOpen = false}>
              {link.label}
            </a>
          </li>
        {/each}
        <li><a href="/docs/getting-started" class="btn btn-primary" onclick={() => mobileOpen = false}>Get Started</a></li>
      </ul>
    </div>
  {/if}
</nav>

<style>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-nav);
    padding: var(--space-4) 0;
    transition: all var(--transition-normal);
  }

  .nav.scrolled {
    background: rgba(10, 15, 30, 0.85);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--color-border);
    padding: var(--space-3) 0;
  }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(--space-8);
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    color: var(--color-text-primary);
    text-decoration: none;
    flex-shrink: 0;
  }

  .nav-logo-text {
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: -0.02em;
    color: var(--color-amber-bright);
  }

  .nav-logo-tag {
    font-size: 0.6875rem;
    font-weight: 500;
    color: var(--color-text-muted);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-left: 2px;
    align-self: flex-end;
    padding-bottom: 2px;
  }

  .nav-links {
    display: flex;
    align-items: center;
    gap: var(--space-1);
    list-style: none;
    flex: 1;
    justify-content: center;
  }

  .nav-link {
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-md);
    color: var(--color-text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    transition: all var(--transition-fast);
    text-decoration: none;
  }

  .nav-link:hover,
  .nav-link.active {
    color: var(--color-text-primary);
    background: var(--color-surface);
  }

  .nav-link.active {
    color: var(--color-amber-bright);
  }

  .nav-actions {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    flex-shrink: 0;
  }

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .hamburger span {
    display: block;
    height: 2px;
    background: var(--color-text-primary);
    border-radius: 2px;
    transition: all var(--transition-fast);
  }

  .mobile-menu {
    background: var(--color-deep-space);
    border-top: 1px solid var(--color-border);
    padding: var(--space-6);
  }

  .mobile-menu ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .mobile-link {
    display: block;
    padding: var(--space-3) var(--space-4);
    color: var(--color-text-secondary);
    font-size: 1rem;
    border-radius: var(--radius-md);
    transition: all var(--transition-fast);
    text-decoration: none;
  }

  .mobile-link:hover { background: var(--color-surface); color: var(--color-text-primary); }

  @media (max-width: 900px) {
    .nav-links { display: none; }
    .hamburger { display: flex; }
  }

  @media (max-width: 600px) {
    .nav-actions :not(.hamburger) { display: none; }
    .hamburger { display: flex; }
  }
</style>
