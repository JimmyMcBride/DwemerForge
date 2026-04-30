import { registryPackageName } from "@dwemerforge/registry";
import { shellAccent, uiPackageName } from "@dwemerforge/ui";

export interface WebShellStatus {
  readonly app: "DwemerForge Web";
  readonly registryPackage: string;
  readonly uiPackage: string;
  readonly accent: string;
}

export function createWebShellStatus(): WebShellStatus {
  return {
    accent: shellAccent.brass,
    app: "DwemerForge Web",
    registryPackage: registryPackageName,
    uiPackage: uiPackageName
  };
}
