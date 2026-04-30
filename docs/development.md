# Development

DwemerForge uses a pnpm monorepo with app workspaces under `apps/` and shared packages under `packages/`.

## Requirements

- Node.js 22 or newer.
- pnpm 10 or newer.

## Common Commands

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

Use `pnpm run ci` for the root CI script. `pnpm ci` is a pnpm command name and
does not run package scripts.

## Workspace Layout

- `apps/web`: SvelteKit registry portal shell.
- `apps/desktop`: Electron + Svelte desktop manager shell.
- `packages/eso-core`: ESO addon domain types and future parser/resolver home.
- `packages/registry`: registry record contracts and future validators.
- `packages/providers`: provider interface home for GitHub Releases and future sources.
- `packages/ui`: shared shell tokens and future UI primitives.

## Spec Workflow

The current planning source is GitHub-backed Plan issues. Pick one issue, branch from `main`, implement the narrow behavior, run verification, and open a PR linked to the issue.
