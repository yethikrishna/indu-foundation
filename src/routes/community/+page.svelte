<svelte:head>
  <title>Community — INDU Foundation</title>
</svelte:head>

<section class="section">
  <div class="container">
    <div class="section-header">
      <span class="badge badge-teal">Community</span>
      <h1>Join the INDU Community</h1>
      <p class="section-desc">INDU is being built in public. Every RFC, decision, and milestone is open for community input.</p>
    </div>

    <div class="community-grid">
      <a href="https://github.com/yethikrishna/indu-foundation" target="_blank" rel="noopener" class="community-card card card-amber">
        <div class="community-icon">&#x1F4BE;</div>
        <h3>GitHub</h3>
        <p>Source code, issues, pull requests, and the RFC process. This is where INDU is built.</p>
        <span class="community-link">github.com/yethikrishna/indu-foundation &rarr;</span>
      </a>

      <div class="community-card card card-teal">
        <div class="community-icon">💬</div>
        <h3>Discord</h3>
        <p>Real-time chat with other INDU developers. Get help, share projects, debate language design.</p>
        <span class="community-link">Coming with alpha launch &rarr;</span>
      </div>

      <a href="/rfc" class="community-card card">
        <div class="community-icon">📝</div>
        <h3>RFC Process</h3>
        <p>Every major language change goes through a public RFC. Your voice shapes INDU's future.</p>
        <span class="community-link">Read RFC-0001 &rarr;</span>
      </a>

      <a href="/blog" class="community-card card">
        <div class="community-icon">📰</div>
        <h3>Blog</h3>
        <p>Deep technical dives, design decisions, and ecosystem updates from the Foundation team.</p>
        <span class="community-link">Read the blog &rarr;</span>
      </a>

      <div class="community-card card">
        <div class="community-icon">📧</div>
        <h3>Newsletter</h3>
        <p>Monthly updates: language progress, compiler benchmarks, and community highlights.</p>
        <form method="POST" action="/api/newsletter" style="margin-top: var(--space-4); display: flex; gap: var(--space-2);">
          <input type="email" name="email" placeholder="your@email.com" style="flex:1; padding: var(--space-2) var(--space-3); background: var(--color-cosmic-navy); border: 1px solid var(--color-border); border-radius: var(--radius-md); color: var(--color-text-primary); font-size: 0.875rem;" />
          <button type="submit" class="btn btn-primary btn-sm">Subscribe</button>
        </form>
      </div>

      <a href="/governance" class="community-card card">
        <div class="community-icon">⚖️</div>
        <h3>Governance</h3>
        <p>How the INDU Foundation makes decisions. Roadmap to Delaware PBC → 501(c)(3) nonprofit.</p>
        <span class="community-link">Read governance docs &rarr;</span>
      </a>
    </div>
  </div>
</section>

<style>
  .community-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-6);
    margin-top: var(--space-8);
  }

  .community-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
    text-decoration: none;
    color: inherit;
  }

  .community-icon { font-size: 2.5rem; }
  .community-card h3 { font-size: 1.25rem; }
  .community-card p { font-size: 0.9rem; color: var(--color-text-secondary); flex: 1; }

  .community-link {
    font-size: 0.875rem;
    color: var(--color-amber-bright);
    font-weight: 600;
    margin-top: auto;
  }

  @media (max-width: 900px) { .community-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 600px) { .community-grid { grid-template-columns: 1fr; } }
</style>
