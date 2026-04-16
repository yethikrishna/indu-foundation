<svelte:head>
  <title>Agents (AOP) — INDU Language</title>
</svelte:head>

<h1>Agent-Oriented Programming</h1>

<p class="lead">INDU's most powerful feature: <code>agent</code> is a native keyword. Agents are isolated, fault-tolerant processes inspired by Erlang's Actor Model — but with familiar, multi-paradigm syntax.</p>

<h2>The Problem Agents Solve</h2>
<p>In 2025-2026, running 50 LangChain agents became a debugging nightmare. One hallucinating agent could crash an entire pipeline. INDU's answer: isolation by default.</p>

<h2>Declaring an Agent</h2>
<pre><code class="lang-indu">agent DataFetcher {{
  state {{
    cache: Map<String, Json> = Map.new();
  }}

  fn fetch(url: String) -> Result<Json, Error> {{
    match self.cache.get(url) {{
      Some(v) => Ok(v),
      None    => {{
        let data = http.get(url).await?;
        self.cache.insert(url, data);
        Ok(data)
      }}
    }}
  }}
}}</code></pre>

<h2>Spawning and Messaging</h2>
<pre><code class="lang-indu">fn main() {{
  let fetcher = spawn DataFetcher;

  // Send message, get response
  let result = fetcher.fetch("https://api.example.com/data").await;

  match result {{
    Ok(data)  => print("Got: {data}"),
    Err(e)    => print("Error: {e}")
  }}
}}</code></pre>

<h2>Supervision Trees</h2>
<p>If an agent crashes, its supervisor restarts it automatically. Zero manual error handling for process crashes.</p>

<pre><code class="lang-indu">supervisor AppSupervisor {{
  strategy: one_for_one,
  children: [
    DataFetcher,
    CacheAgent,
    MetricsAgent
  ]
}}</code></pre>

<h2>AI Agents (NEXUS Integration)</h2>
<pre><code class="lang-indu">agent LLMAgent {{
  model: tensor = nexus.load("llama3-8b", target: .npu);

  fn ask(prompt: String) -> stream<String> {{
    self.model.generate(prompt, max_tokens: 512)
  }}
}}

fn main() {{
  let llm = spawn LLMAgent;

  // Streaming response
  for token in llm.ask("Explain INDU").await {{
    print(token);
  }}
}}</code></pre>

<style>
  .lead {{ font-size: 1.125rem; color: var(--color-text-secondary); margin-bottom: var(--space-8); }}
</style>
