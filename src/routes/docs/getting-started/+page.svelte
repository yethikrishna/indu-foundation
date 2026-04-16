<svelte:head>
  <title>Getting Started — INDU Docs</title>
  <meta name="description" content="Install INDU, write your first program, and deploy in minutes." />
</svelte:head>

<h1>Getting Started with INDU</h1>

<p class="lead">INDU is a compiled, multi-paradigm language and full-stack framework operating on the exact same AST. This guide gets you from zero to running code in under 10 minutes.</p>

<h2>Prerequisites</h2>
<ul>
  <li>A Unix-like system (Linux, macOS) or Windows with WSL2</li>
  <li>4GB RAM minimum (8GB recommended for the NEXUS AI engine)</li>
  <li>No other runtimes required — INDU is a single binary</li>
</ul>

<h2>Installation</h2>
<p>Install the INDU toolchain with a single command:</p>

<pre><code class="lang-bash"># macOS / Linux
curl -fsSL https://indu-foundation.pages.dev/install.sh | sh

# Verify installation
indu --version
# indu 0.1.0-alpha (LLVM 17, WebGPU enabled)</code></pre>

<blockquote>
  <strong>Note:</strong> The INDU compiler is currently in alpha. APIs may change between minor versions. Pin your version in <code>indu.toml</code> for production use.
</blockquote>

<h2>Your First Program</h2>
<p>Create a new file <code>hello.indu</code>:</p>

<pre><code class="lang-indu">// hello.indu — Your first INDU program

fn main() {{
  let name = "World";
  print("Hello, {name}!");
}}</code></pre>

<p>Run it:</p>
<pre><code class="lang-bash">indu run hello.indu
# Hello, World!</code></pre>

<h2>Create a Project</h2>
<pre><code class="lang-bash">indu new my-project
cd my-project
indu run</code></pre>

<p>This creates:</p>
<pre><code>my-project/
├── indu.toml        # Project manifest
├── src/
│   ├── main.indu    # Entry point
│   └── lib/         # Library modules
└── tests/
    └── main_test.indu</code></pre>

<h2>What's Next?</h2>
<ul>
  <li><a href="/docs/language/basics">Learn the Language Basics</a></li>
  <li><a href="/docs/language/agents">Agent-Oriented Programming</a></li>
  <li><a href="/docs/framework/overview">Build a Web App</a></li>
  <li><a href="/playground">Try the Playground</a></li>
</ul>

<style>
  .lead { font-size: 1.125rem; color: var(--color-text-secondary); margin-bottom: var(--space-8); }
</style>
