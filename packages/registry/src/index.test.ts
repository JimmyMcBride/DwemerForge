import { describe, expect, it } from "vitest";

import { createRegistryRecord, registryPackageName } from "./index";

describe("registry package boundary", () => {
  it("exports registry records without owning parser behavior", () => {
    const record = createRegistryRecord({
      identity: { id: "sample-addon", title: "Sample Addon" },
      summary: "A fixture registry record.",
      latestVersion: {
        dependencies: [],
        source: "github-release",
        version: "0.1.0"
      }
    });

    expect(registryPackageName).toBe("@dwemerforge/registry");
    expect(record.latestVersion.source).toBe("github-release");
  });
});
