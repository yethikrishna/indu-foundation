<script lang="ts">
  const posts = [
    {
      slug: 'why-we-built-indu',
      title: 'Why We Built INDU',
      date: '2026-04-16',
      author: 'INDU Foundation',
      excerpt: 'Six years of developer frustration. Five failed abstractions. One unified solution. The full story of why INDU had to exist.',
      tags: ['Origin', 'Philosophy'],
      readTime: '8 min'
    },
    {
      slug: 'agent-keyword-erlang-actor-model',
      title: 'How the agent Keyword Works Under the Hood',
      date: '2026-04-14',
      author: 'INDU Foundation',
      excerpt: "Erlang's Actor Model has been the gold standard for fault-tolerant systems for 40 years. Here's how INDU brings it to every developer.",
      tags: ['Language', 'Agents', 'Deep Dive'],
      readTime: '12 min'
    },
    {
      slug: 'post-dom-webgpu-rendering',
      title: 'Post-DOM: Why We Bypassed the Browser\'s Biggest Bottleneck',
      date: '2026-04-10',
      author: 'INDU Foundation',
      excerpt: 'The Document Object Model was designed in 1998. WebGPU is a 2024 standard. INDU chooses the future.',
      tags: ['Framework', 'WebGPU', 'Performance'],
      readTime: '10 min'
    },
    {
      slug: 'sync-let-crdts-explained',
      title: 'sync let: How One Keyword Replaces Redux, fetch(), and SQLite',
      date: '2026-04-07',
      author: 'INDU Foundation',
      excerpt: 'CRDTs are mathematically beautiful but brutally complex to implement. INDU makes them a one-word declaration.',
      tags: ['Framework', 'CRDTs', 'Local-First'],
      readTime: '15 min'
    }
  ];
</script>

<svelte:head>
  <title>Blog — INDU Foundation</title>
  <meta name="description" content="Deep dives, language design decisions, and ecosystem updates from the INDU Foundation team." />
</svelte:head>

<div class="blog-page">
  <div class="container">
    <div class="blog-header section-header">
      <span class="badge badge-amber">INDU Blog</span>
      <h1>From the Foundation</h1>
      <p>Deep dives, design decisions, and ecosystem updates.</p>
    </div>

    <div class="posts-grid">
      {#each posts as post}
        <article class="post-card card">
          <div class="post-tags">
            {#each post.tags as tag}
              <span class="badge badge-teal">{tag}</span>
            {/each}
          </div>
          <h2 class="post-title">
            <a href="/blog/{post.slug}">{post.title}</a>
          </h2>
          <p class="post-excerpt">{post.excerpt}</p>
          <div class="post-meta">
            <span>{post.author}</span>
            <span>·</span>
            <time datetime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            <span>·</span>
            <span>{post.readTime} read</span>
          </div>
          <a href="/blog/{post.slug}" class="post-cta">Read article &rarr;</a>
        </article>
      {/each}
    </div>
  </div>
</div>

<style>
  .blog-page { padding-block: var(--space-16) var(--space-32); }
  .blog-header { margin-bottom: var(--space-16); }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-6);
  }

  .post-card {
    display: flex;
    flex-direction: column;
    gap: var(--space-4);
  }

  .post-tags { display: flex; gap: var(--space-2); flex-wrap: wrap; }

  .post-title { font-size: 1.25rem; }
  .post-title a { color: var(--color-text-primary); text-decoration: none; }
  .post-title a:hover { color: var(--color-amber-bright); }

  .post-excerpt { font-size: 0.9rem; color: var(--color-text-secondary); flex: 1; }

  .post-meta {
    display: flex;
    gap: var(--space-2);
    font-size: 0.8125rem;
    color: var(--color-text-muted);
    flex-wrap: wrap;
  }

  .post-cta {
    color: var(--color-amber-bright);
    font-size: 0.875rem;
    font-weight: 600;
    margin-top: auto;
  }

  @media (max-width: 700px) { .posts-grid { grid-template-columns: 1fr; } }
</style>
