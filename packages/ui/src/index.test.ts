import { describe, expect, it } from "vitest";

import { shellAccent, uiPackageName } from "./index";

describe("ui package boundary", () => {
  it("exports shared shell tokens", () => {
    expect(uiPackageName).toBe("@dwemerforge/ui");
    expect(shellAccent.verdigris).toBe("#2f8f8b");
  });
});
