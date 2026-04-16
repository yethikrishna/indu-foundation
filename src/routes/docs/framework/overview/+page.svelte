<svelte:head>
  <title>Framework Overview — INDU Docs</title>
</svelte:head>

<h1>INDU Framework Overview</h1>

<p class="lead">indu-web is not a wrapper around React or Svelte. It compiles INDU's same AST to WebAssembly and paints directly via WebGPU — bypassing the DOM entirely.</p>

<h2>The Core Philosophy</h2>
<ul>
  <li><strong>Parity:</strong> Framework and language share the same AST. No API boundaries.</li>
  <li><strong>Zero hydration:</strong> The UI resumes server state without re-executing JS.</li>
  <li><strong>Local-first:</strong> <code>sync let</code> replaces <code>fetch()</code> and Redux in one keyword.</li>
  <li><strong>Accessible:</strong> Ghost DOM generates semantic HTML for screen readers and SEO bots.</li>
</ul>

<h2>Views (Components)</h2>
<pre><code class="lang-indu">view Counter {{
  state count: i32 = 0;

  fn render() {{
    div class="counter" {{
      h1 {{ "{count}" }}
      button onclick=self.increment {{ "+ Add" }}
    }}
  }}

  fn increment() {{
    count += 1;
  }}
}}</code></pre>

<h2>sync let — Native CRDTs</h2>
<p>Declare a variable as <code>sync</code> and INDU handles local SQLite persistence and WebRTC P2P sync automatically.</p>

<pre><code class="lang-indu">// This variable is:
// 1. Persisted in embedded SQLite
// 2. Synced via WebRTC CRDTs across devices
// 3. Available offline instantly
sync let cart: List<CartItem> = [];

view Cart {{
  fn render() {{
    ul {{
      for item in cart {{
        li {{ "{item.name} — ${item.price}" }}
      }}
    }}
  }}
}}</code></pre>

<h2>Routing</h2>
<pre><code class="lang-indu">router App {{
  route "/"           => views.Home;
  route "/products"   => views.Products;
  route "/product/:id" => views.ProductDetail;
  route "*"           => views.NotFound;
}}</code></pre>

<h2>Server Functions</h2>
<p>Mark a function <code>@server</code> and the compiler splits it to the backend automatically. No API routes to write.</p>

<pre><code class="lang-indu">@server
async fn get_products() -> Result<List<Product>, Error> {{
  db.query("SELECT * FROM products ORDER BY created_at DESC")
}}

view ProductList {{
  products = get_products.use(); // Compiler handles client/server boundary

  fn render() {{
    for product in products {{
      ProductCard {{ product }}
    }}
  }}
}}</code></pre>

<style>
  .lead {{ font-size: 1.125rem; color: var(--color-text-secondary); margin-bottom: var(--space-8); }}
</style>
