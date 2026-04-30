import type { EsoAddonDependency, EsoAddonIdentity } from "@dwemerforge/eso-core";

export interface RegistryAddonVersion {
  readonly version: string;
  readonly dependencies: readonly EsoAddonDependency[];
  readonly source: "manual-upload" | "github-release";
}

export interface RegistryAddonRecord {
  readonly identity: EsoAddonIdentity;
  readonly summary: string;
  readonly latestVersion: RegistryAddonVersion;
}

export const registryPackageName = "@dwemerforge/registry";

export function createRegistryRecord(record: RegistryAddonRecord): RegistryAddonRecord {
  return record;
}
