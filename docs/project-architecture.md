# Project Architecture

<!-- brain:begin project-doc-architecture -->
Use this file for the structural shape of the repository.

## Architecture Notes

- Keep repo boundaries explicit and document key entrypoints in this file.
- Update this file when runtime architecture or integration boundaries change.
<!-- brain:end project-doc-architecture -->

## Local Notes

Planned architecture:

- Monorepo layout:
  - `apps/desktop`: Electron + Svelte addon manager.
  - `apps/web`: SvelteKit registry portal and API.
  - `packages/eso-core`: ESO manifest parser, dependency resolver, install plan model.
  - `packages/registry`: registry schemas, validators, package/version types, search contracts.
  - `packages/providers`: GitHub release provider and future provider interfaces.
  - `packages/ui`: optional shared Svelte UI primitives and design tokens.
- Electron main process owns filesystem, network/download, archive extraction, install/update/remove, backup/restore, local cache, and dependency resolution.
- Svelte renderer owns UI state, interaction flow, addon lists, dependency health, progress, settings, and style.
- Typed IPC should be the contract between renderer and privileged operations.
- Provider layer should abstract DwemerForge Registry, GitHub Releases, and future sources so core dependency logic is not coupled to one catalog implementation.

Core modules to design first:

- Manifest parser.
- Installed addon scanner.
- Dependency resolver.
- Source provider interface.
- Installer/update transaction pipeline.
- Backup/snapshot service.
