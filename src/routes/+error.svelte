<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head><title>Error {$page.status} — INDU Foundation</title></svelte:head>

<section class="error-page">
  <div class="container-narrow" style="text-align: center; padding-block: var(--space-32);">
    <div class="error-code gradient-text">{$page.status}</div>
    <h1>{$page.error?.message ?? 'Something went wrong'}</h1>
    <p>The page you’re looking for doesn’t exist or encountered an error.</p>
    <div style="margin-top: var(--space-8); display: flex; gap: var(--space-4); justify-content: center;">
      <a href="/" class="btn btn-primary">Back to Home</a>
      <a href="/docs" class="btn btn-secondary">Go to Docs</a>
    </div>
  </div>
</section>

<style>
  .error-code {
    font-size: 8rem;
    font-weight: 800;
    line-height: 1;
    font-family: var(--font-display);
    letter-spacing: -0.04em;
    margin-bottom: var(--space-4);
  }
</style>
