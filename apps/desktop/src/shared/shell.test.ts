import { describe, expect, it } from "vitest";

import { createDesktopShellStatus } from "./shell";

describe("desktop shell", () => {
  it("reports all shared package boundaries", () => {
    expect(createDesktopShellStatus().packages).toEqual([
      "@dwemerforge/eso-core",
      "@dwemerforge/registry",
      "@dwemerforge/providers",
      "@dwemerforge/ui"
    ]);
  });
});
