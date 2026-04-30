import { describe, expect, it } from "vitest";

import { createWebShellStatus } from "./shell";

describe("web shell", () => {
  it("reports the shared packages it is wired to", () => {
    expect(createWebShellStatus()).toMatchObject({
      app: "DwemerForge Web",
      registryPackage: "@dwemerforge/registry",
      uiPackage: "@dwemerforge/ui"
    });
  });
});
