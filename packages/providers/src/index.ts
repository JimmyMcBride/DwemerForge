import type { RegistryAddonRecord } from "@dwemerforge/registry";

export interface AddonProvider {
  readonly id: string;
  readonly displayName: string;
  search(query: string): Promise<readonly RegistryAddonRecord[]>;
}

export const providersPackageName = "@dwemerforge/providers";

export function createProviderDescriptor(
  provider: Pick<AddonProvider, "id" | "displayName">
): Pick<AddonProvider, "id" | "displayName"> {
  return provider;
}
