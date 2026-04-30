/// <reference types="svelte" />
/// <reference types="vite/client" />

import type { DwemerForgePreloadApi } from "../../preload";

declare global {
  interface Window {
    dwemerForge: DwemerForgePreloadApi;
  }
}
