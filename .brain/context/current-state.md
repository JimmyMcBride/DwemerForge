# Current State

<!-- brain:begin context-current-state -->
This file is a deterministic snapshot of the repository state at the last refresh.

## Repository

- Project: `DwemerForge`
- Root: `.`
- Runtime: `Node.js / pnpm monorepo`
- Go test files: `0`
<!-- brain:end context-current-state -->

## Local Notes

Brain and Plan are initialized. Project planning is GitHub-backed. Workspace foundation implementation is in progress on branch `spec/workspace-foundation` for one PR covering specs #2 through #5.

ESOUI backend research outcome: dependency-aware install is technically feasible by parsing addon manifests, and Minion 4 now advertises automatic library dependency handling. Production ESOUI integration still needs explicit MMOUI/GGMODS permission or a documented API/feed path because the public terms restrict automated access.

Permission request sent to MMOUI/ESOUI on 2026-04-29 asking for an approved ESOUI/MMOUI API, feed, or integration path for DwemerForge.

Backup backend direction if ESOUI permission is denied: avoid automated ESOUI access and build around local installed-addon scanning, ZIP import, a DwemerForge metadata registry, explicit provider APIs such as CurseForge/Nexus/GitHub where useful, and browser handoff links for ESOUI-only addons.

Product pivot on 2026-04-30: design DwemerForge as an independent addon registry from scratch. Authors can upload addon ZIPs or connect GitHub release automation. First test corpus should use GitHub-hosted open-source ESO addons with clear licenses and manifests, including PantherXP, EchoExperience, Gear Overview, PriceTracker, RepeatableQuestFilter, SellOrnateItems, GrindTimer, PersonalAssistant, and LibAddonMenu.

Roadmap solidified on 2026-04-30: use a monorepo with `apps/web`, `apps/desktop`, and shared packages for ESO core parsing/resolution, registry schemas, provider contracts, and optional shared UI.

Repository publication update on 2026-04-30: project is published to GitHub as `JimmyMcBride/DwemerForge` with MIT license. Plan source mode and story backend are set to `github`. Roadmap includes recommended initiatives under each phase.

First GitHub-backed initiative created on 2026-04-30: `workspace-foundation` as issue #1 with spec issues #2 (`Initialize pnpm monorepo workspace`), #3 (`Establish shared TypeScript, lint, format, and test tooling`), and #4 (`Scaffold shared package boundaries`). Source brainstorm: `.plan/brainstorms/workspace-foundation-initiative.md`.

Workspace foundation was expanded on 2026-04-30 with spec issue #5: `Add path-aware web deploy and desktop release workflow skeletons`. Issue #5 is labeled `enhancement`, `plan:spec`, and `plan:ready`, assigned to the `Workspace foundation initiative` milestone, listed in issue #1, and attached as a sub-issue under issue #1. The source brainstorm remains `.plan/brainstorms/workspace-foundation-initiative.md`.

Workspace foundation implementation added pnpm workspace files, root TypeScript/ESLint/Prettier/Vitest scripts, shell SvelteKit web app, shell Electron/Svelte desktop app, package stubs for `@dwemerforge/eso-core`, `@dwemerforge/registry`, `@dwemerforge/providers`, and `@dwemerforge/ui`, plus GitHub Actions workflows for CI, web shell builds, desktop shell builds, and desktop publishing. Desktop branch builds are path-aware with read-only permissions; manual/tag publish runs in a separate workflow with release-only write permissions. The desktop release skeleton intentionally packages unsigned unpacked app directories; signing, notarization, installers, and auto-update channels remain deferred.
