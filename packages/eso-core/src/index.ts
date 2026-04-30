export interface EsoAddonIdentity {
  readonly id: string;
  readonly title: string;
}

export interface EsoAddonDependency {
  readonly id: string;
  readonly optional: boolean;
}

export interface EsoAddonManifestSummary {
  readonly identity: EsoAddonIdentity;
  readonly dependencies: readonly EsoAddonDependency[];
}

export const esoCorePackageName = "@dwemerforge/eso-core";

export function createManifestSummary(
  identity: EsoAddonIdentity,
  dependencies: readonly EsoAddonDependency[] = []
): EsoAddonManifestSummary {
  return {
    identity,
    dependencies
  };
}
