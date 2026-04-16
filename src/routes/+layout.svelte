<script lang="ts">
  import '../app.css';
  import Nav from '$lib/components/Nav.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { page } from '$app/stores';

  let { children, data } = $props();

  // Pages that get full-bleed treatment (no standard footer padding)
  const fullBleedRoutes = ['/playground'];
  $: isFullBleed = fullBleedRoutes.some(r => $page.url.pathname.startsWith(r));
</script>

<svelte:head>
  <meta name="robots" content="index, follow" />
</svelte:head>

<Nav />

<main id="main-content" class:full-bleed={isFullBleed}>
  {@render children()}
</main>

{#if !isFullBleed}
  <Footer />
{/if}

<style>
  #main-content {
    min-height: 100vh;
    padding-top: 72px; /* nav height */
  }
  #main-content.full-bleed {
    padding-top: 0;
  }
</style>
