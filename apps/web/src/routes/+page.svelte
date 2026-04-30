<script lang="ts">
  import { createWebShellStatus } from "$lib/shell";

  const status = createWebShellStatus();
</script>

<svelte:head>
  <title>DwemerForge Registry</title>
  <meta name="description" content="Shell registry portal for the DwemerForge ESO addon manager." />
</svelte:head>

<main class="shell">
  <section class="workspace" aria-labelledby="registry-heading">
    <div class="masthead">
      <p class="eyebrow">Registry portal shell</p>
      <h1 id="registry-heading">DwemerForge</h1>
      <p class="lede">
        Independent addon registry groundwork for dependency-aware ESO addon management.
      </p>
    </div>

    <div class="status-grid" aria-label="Workspace package status">
      <article>
        <span>Web app</span>
        <strong>{status.app}</strong>
      </article>
      <article>
        <span>Registry contract</span>
        <strong>{status.registryPackage}</strong>
      </article>
      <article>
        <span>UI tokens</span>
        <strong>{status.uiPackage}</strong>
      </article>
    </div>
  </section>
</main>
