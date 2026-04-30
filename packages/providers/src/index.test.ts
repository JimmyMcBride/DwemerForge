import { describe, expect, it } from "vitest";

import { createProviderDescriptor, providersPackageName } from "./index";

describe("providers package boundary", () => {
  it("exports provider contracts without implementing network behavior", () => {
    const descriptor = createProviderDescriptor({
      displayName: "GitHub Releases",
      id: "github-releases"
    });

    expect(providersPackageName).toBe("@dwemerforge/providers");
    expect(descriptor.id).toBe("github-releases");
  });
});
