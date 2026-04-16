<script lang="ts">
  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Learn',
      links: [
        { href: '/docs/getting-started', label: 'Getting Started' },
        { href: '/docs/language/basics', label: 'Language Guide' },
        { href: '/docs/framework/overview', label: 'Framework Guide' },
        { href: '/playground',            label: 'Playground' },
        { href: '/examples',              label: 'Examples' },
      ]
    },
    {
      title: 'Ecosystem',
      links: [
        { href: '/packages',  label: 'Package Registry' },
        { href: '/toolchain', label: 'Toolchain' },
        { href: '/nexus',     label: 'NEXUS Engine (AI)' },
        { href: '/roadmap',   label: 'Roadmap' },
        { href: '/changelog', label: 'Changelog' },
      ]
    },
    {
      title: 'Community',
      links: [
        { href: 'https://github.com/yethikrishna/indu-foundation', label: 'GitHub', external: true },
        { href: '/discord',   label: 'Discord' },
        { href: '/blog',      label: 'Blog' },
        { href: '/rfc',       label: 'RFC Process' },
        { href: '/governance', label: 'Governance' },
      ]
    },
    {
      title: 'Foundation',
      links: [
        { href: '/about',   label: 'About' },
        { href: '/mission', label: 'Mission' },
        { href: '/sponsors', label: 'Sponsors' },
        { href: '/legal',   label: 'Legal' },
        { href: '/privacy', label: 'Privacy' },
      ]
    }
  ];
</script>

<footer class="footer">
  <div class="container">
    <div class="footer-top">
      <!-- Brand -->
      <div class="footer-brand">
        <a href="/" class="footer-logo">
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17" stroke="#f59e0b" stroke-width="1.5"/>
            <path d="M10 10 L10 26 M10 18 L18 10 L18 26 M18 10 L26 26 M26 10 L26 26"
                  stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span>INDU Foundation</span>
        </a>
        <p class="footer-tagline">
          Write with Python's ease.<br />
          Scale with Erlang's fault-tolerance.<br />
          Execute with C's speed.
        </p>
        <div class="footer-social">
          <a href="https://github.com/yethikrishna/indu-foundation" target="_blank" rel="noopener" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="/discord" aria-label="Discord">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.03.056a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
          </a>
          <a href="https://twitter.com/indu_lang" target="_blank" rel="noopener" aria-label="Twitter/X">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Links -->
      <div class="footer-links">
        {#each footerSections as section}
          <div class="footer-section">
            <h4 class="footer-section-title">{section.title}</h4>
            <ul>
              {#each section.links as link}
                <li>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >{link.label}</a>
                </li>
              {/each}
            </ul>
          </div>
        {/each}
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; {year} INDU Foundation. Open source under the Apache 2.0 License.</p>
      <p class="footer-bottom-right">
        Built with INDU &middot; Deployed on Cloudflare Pages
      </p>
    </div>
  </div>
</footer>

<style>
  .footer {
    background: var(--color-deep-space);
    border-top: 1px solid var(--color-border);
    padding-top: var(--space-24);
    padding-bottom: var(--space-8);
    margin-top: var(--space-32);
  }

  .footer-top {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: var(--space-16);
    margin-bottom: var(--space-16);
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    color: var(--color-text-primary);
    text-decoration: none;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: 1.125rem;
    margin-bottom: var(--space-4);
  }

  .footer-tagline {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--color-text-muted);
    margin-bottom: var(--space-6);
  }

  .footer-social {
    display: flex;
    gap: var(--space-4);
  }

  .footer-social a {
    color: var(--color-text-muted);
    transition: color var(--transition-fast);
  }

  .footer-social a:hover { color: var(--color-amber-bright); }

  .footer-links {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: var(--space-8);
  }

  .footer-section-title {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--color-text-muted);
    margin-bottom: var(--space-4);
  }

  .footer-section ul { list-style: none; display: flex; flex-direction: column; gap: var(--space-2); }

  .footer-section a {
    font-size: 0.875rem;
    color: var(--color-text-secondary);
    transition: color var(--transition-fast);
  }

  .footer-section a:hover { color: var(--color-amber-bright); }

  .footer-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: var(--space-8);
    border-top: 1px solid var(--color-border);
    font-size: 0.8125rem;
    color: var(--color-text-muted);
  }

  @media (max-width: 900px) {
    .footer-top  { grid-template-columns: 1fr; }
    .footer-links { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 500px) {
    .footer-links { grid-template-columns: 1fr; }
    .footer-bottom { flex-direction: column; gap: var(--space-2); text-align: center; }
  }
</style>
