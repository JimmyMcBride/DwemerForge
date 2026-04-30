<script lang="ts">
  import { createDesktopShellStatus } from "../../shared/shell";

  const status = createDesktopShellStatus();
</script>

<main class="shell">
  <section class="workspace" aria-labelledby="desktop-heading">
    <div>
      <p class="eyebrow">Desktop manager shell</p>
      <h1 id="desktop-heading">DwemerForge</h1>
      <p class="lede">
        Electron shell wired to the shared addon, registry, provider, and UI package boundaries.
      </p>
    </div>

    <div class="status-grid" aria-label="Workspace package status">
      {#each status.packages as packageName (packageName)}
        <article>
          <span>Workspace package</span>
          <strong>{packageName}</strong>
        </article>
      {/each}
    </div>
  </section>
</main>
