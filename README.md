# DwemerForge

DwemerForge is an independent Elder Scrolls Online addon manager and registry.

The project is planned as a monorepo with:

- `apps/desktop`: Electron + Svelte desktop addon manager.
- `apps/web`: SvelteKit registry portal and API.
- `packages/eso-core`: ESO manifest parsing, dependency resolution, and install plan logic.
- `packages/registry`: registry schemas, validators, and search contracts.
- `packages/providers`: GitHub release ingestion and future provider interfaces.
- `packages/ui`: optional shared Svelte UI primitives and design tokens.

## Product Direction

DwemerForge focuses on dependency-aware addon installs from sources the project is allowed to consume. Authors can submit addon packages directly or connect GitHub release automation. The desktop app will use the registry to search addons, resolve required dependencies, install/update packages, and keep local addon folders recoverable.

Planning currently lives in `.plan/` and project memory lives in `.brain/`.

## Development

Requirements:

- Node.js 22 or newer.
- pnpm 10 or newer.

Common commands:

```bash
pnpm install
pnpm dev:web
pnpm dev:desktop
pnpm typecheck
pnpm lint
pnpm test
pnpm build
pnpm run ci
```

See [docs/development.md](docs/development.md) for workspace details and
[docs/deployment.md](docs/deployment.md) for the web/desktop workflow skeleton.
