import { esoCorePackageName } from "@dwemerforge/eso-core";
import { providersPackageName } from "@dwemerforge/providers";
import { registryPackageName } from "@dwemerforge/registry";
import { uiPackageName } from "@dwemerforge/ui";

export interface DesktopShellStatus {
  readonly app: "DwemerForge Desktop";
  readonly packages: readonly string[];
}

export function createDesktopShellStatus(): DesktopShellStatus {
  return {
    app: "DwemerForge Desktop",
    packages: [esoCorePackageName, registryPackageName, providersPackageName, uiPackageName]
  };
}
