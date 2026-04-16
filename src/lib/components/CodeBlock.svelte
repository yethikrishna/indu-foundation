<script lang="ts">
  interface Props {
    code: string;
    lang?: string;
    filename?: string;
    highlights?: number[];
  }
  let { code, lang = 'indu', filename, highlights = [] }: Props = $props();

  const lines = code.trim().split('\n');
</script>

<div class="code-block">
  {#if filename}
    <div class="code-header">
      <span class="code-filename">{filename}</span>
      <span class="code-lang">{lang}</span>
    </div>
  {/if}
  <pre class="code-pre"><code class="code-content lang-{lang}">{
    lines.map((line, i) => {
      const num = i + 1;
      const highlighted = highlights.includes(num) ? ' highlight' : '';
      return `<span class="line${highlighted}"><span class="line-num">${String(num).padStart(3, ' ')}</span>  ${line}</span>`;
    }).join('\n')
  }</code></pre>
</div>

<style>
  .code-block {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    font-size: 0.875rem;
  }

  .code-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3) var(--space-4);
    background: var(--color-surface-raised);
    border-bottom: 1px solid var(--color-border);
  }

  .code-filename {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--color-text-secondary);
  }

  .code-lang {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--color-text-muted);
    background: var(--color-surface);
    padding: 2px var(--space-2);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
  }

  .code-pre {
    margin: 0;
    padding: var(--space-6) 0;
    overflow-x: auto;
    border: none;
    border-radius: 0;
    background: transparent;
  }

  .code-content { display: block; }

  :global(.line) {
    display: block;
    padding: 0 var(--space-4);
    transition: background var(--transition-fast);
  }

  :global(.line.highlight) {
    background: rgba(245, 158, 11, 0.08);
    border-left: 2px solid var(--color-amber);
    padding-left: calc(var(--space-4) - 2px);
  }

  :global(.line-num) {
    color: var(--color-text-muted);
    user-select: none;
    margin-right: var(--space-4);
  }
</style>
