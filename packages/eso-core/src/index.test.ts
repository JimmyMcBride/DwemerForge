import { describe, expect, it } from "vitest";

import { createManifestSummary, esoCorePackageName } from "./index";

describe("eso-core package boundary", () => {
  it("exports the package name and a manifest summary shape", () => {
    const summary = createManifestSummary({ id: "sample-addon", title: "Sample Addon" }, [
      { id: "lib-addon-menu", optional: false }
    ]);

    expect(esoCorePackageName).toBe("@dwemerforge/eso-core");
    expect(summary.dependencies).toEqual([{ id: "lib-addon-menu", optional: false }]);
  });
});
