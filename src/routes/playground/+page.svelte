<script lang="ts">
  let code = $state(`// Welcome to the INDU Playground
// Try editing this code!

fn fibonacci(n: i32) -> i32 {
  match n {
    0 => 0,
    1 => 1,
    _ => fibonacci(n - 1) + fibonacci(n - 2)
  }
}

fn main() {
  for i in 0..10 {
    print("fib({i}) = {fibonacci(i)}");
  }
}`);

  let output = $state('// Output will appear here when the compiler ships\n// — Join the alpha list to be first: indu-foundation.pages.dev/#waitlist');
  let running = $state(false);

  function runCode() {
    running = true;
    setTimeout(() => {
      output = '// INDU Compiler Alpha coming soon!\n// Join the waitlist at: indu-foundation.pages.dev/#waitlist\n\n// Simulated output:\nfib(0) = 0\nfib(1) = 1\nfib(2) = 1\nfib(3) = 2\nfib(4) = 3\nfib(5) = 5\nfib(6) = 8\nfib(7) = 13\nfib(8) = 21\nfib(9) = 34';
      running = false;
    }, 800);
  }
</script>

<svelte:head>
  <title>Playground — INDU Foundation</title>
</svelte:head>

<div class="playground">
  <div class="playground-header">
    <span class="badge badge-amber">Interactive Playground</span>
    <h1>Try INDU in Your Browser</h1>
  </div>

  <div class="playground-grid">
    <div class="editor-panel">
      <div class="panel-header">
        <span class="panel-title">editor.indu</span>
        <button class="btn btn-primary btn-sm" onclick={runCode} disabled={running}>
          {running ? 'Running...' : '▶ Run'}
        </button>
      </div>
      <textarea
        class="code-editor"
        bind:value={code}
        spellcheck="false"
        autocorrect="off"
        autocapitalize="off"
        aria-label="INDU code editor"
      ></textarea>
    </div>

    <div class="output-panel">
      <div class="panel-header">
        <span class="panel-title">output</span>
        <span class="badge badge-teal">Alpha Preview</span>
      </div>
      <pre class="output-content"><code>{output}</code></pre>
    </div>
  </div>

  <div class="playground-cta container-narrow" style="text-align:center; margin-top: var(--space-12);">
    <p style="color: var(--color-text-muted);">The full compiler playground ships with INDU alpha. <a href="/#waitlist">Join the waitlist</a> to be first.</p>
  </div>
</div>

<style>
  .playground {
    padding: var(--space-8) var(--space-6);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .playground-header { text-align: center; }
  .playground-header h1 { font-size: 2rem; margin-top: var(--space-3); }

  .playground-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-4);
    flex: 1;
    min-height: 500px;
  }

  .editor-panel, .output-panel {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-lg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-3) var(--space-4);
    background: var(--color-surface-raised);
    border-bottom: 1px solid var(--color-border);
  }

  .panel-title {
    font-family: var(--font-mono);
    font-size: 0.8125rem;
    color: var(--color-text-muted);
  }

  .code-editor {
    flex: 1;
    background: var(--color-cosmic-navy);
    color: var(--color-text-primary);
    font-family: var(--font-mono);
    font-size: 0.875rem;
    line-height: 1.6;
    padding: var(--space-6);
    border: none;
    resize: none;
    outline: none;
    tab-size: 2;
  }

  .output-content {
    flex: 1;
    padding: var(--space-6);
    overflow-y: auto;
    font-size: 0.875rem;
    line-height: 1.6;
    background: transparent;
    border: none;
    border-radius: 0;
    color: var(--color-teal-bright);
  }

  @media (max-width: 768px) { .playground-grid { grid-template-columns: 1fr; } }
</style>
