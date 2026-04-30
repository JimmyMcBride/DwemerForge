# Architecture

<!-- brain:begin context-architecture -->
Use this file for the structural shape of the repository.

## Architecture Notes

- Keep repo boundaries explicit and document key entrypoints in this file.
- Update this file when runtime architecture or integration boundaries change.
<!-- brain:end context-architecture -->

## Local Notes

Planned stack: Electron app shell, Svelte renderer, Tailwind styling.

Repository direction: monorepo with app and shared package boundaries:

- `apps/desktop`: Electron + Svelte addon manager.
- `apps/web`: SvelteKit registry portal and API.
- `packages/eso-core`: ESO manifest parser, dependency resolver, install plan model.
- `packages/registry`: registry schemas, validators, package/version types, search contracts.
- `packages/providers`: GitHub release provider and future provider interfaces.
- `packages/ui`: optional shared Svelte UI primitives and design tokens.

Early boundary decision: renderer should not directly mutate filesystem state. Electron main process, or a local service owned by it, should handle:

- ESO addon folder discovery and scanning.
- Manifest parsing and dependency graph resolution.
- Source/provider catalog and download access.
- Archive validation, staged extraction, install/update/remove operations.
- Backups, restore, local cache, and persistent app state.

Renderer responsibilities: catalog/installed views, dependency status, operation queue, backup/settings UI, and later Dwemer-inspired visual style.
