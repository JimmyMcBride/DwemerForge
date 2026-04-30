---
created_at: "2026-04-30T03:49:12Z"
project: DwemerForge
slug: workspace-foundation-initiative
status: active
title: Workspace foundation initiative
type: brainstorm
updated_at: "2026-04-30T03:49:12Z"
---

# Brainstorm: Workspace foundation initiative

Started: 2026-04-30T03:49:12Z

## Focus Question

What should the first implementation initiative deliver so DwemerForge has a stable monorepo base before desktop/web feature work starts?

## Desired Outcome

A GitHub-backed initiative plan for `workspace-foundation` with specs that can be implemented and verified independently. The initiative should set up project structure, shared tooling, and package boundaries without prematurely building app features.

## Vision

DwemerForge should start as a clean TypeScript monorepo where the web portal, desktop app, and shared domain packages can grow without duplicating parser/schema/provider logic. After this initiative, a developer should be able to install dependencies, run checks, and see clear empty package/app boundaries ready for the next initiatives.

## Supporting Material

- Roadmap Phase 1: Monorepo Foundation in `.plan/ROADMAP.md`.
- Architecture direction: `apps/web`, `apps/desktop`, `packages/eso-core`, `packages/registry`, `packages/providers`, `packages/ui`.
- Package manager recommendation: `pnpm` workspaces.

## Constraints

- Do not build the SvelteKit portal or Electron desktop app in this initiative; that belongs to `app-shells`.
- Do not implement real parser, resolver, registry API, or GitHub ingestion behavior yet; this initiative creates their homes and tooling.
- Keep root scripts simple and useful: install, typecheck, lint, test, format/check.
- Use TypeScript from the start.
- Keep public repo clean; do not commit local Brain runtime state.

## Open Questions

- Which test runner should be the default for shared packages: Vitest is the likely choice.
- Which linter/formatter stack should be used: ESLint + Prettier is conservative; Biome is simpler but less common with SvelteKit/Electron.
- Should GitHub Actions be included now or in a later `ci-foundation` slice?
## Ideas

- `workspace-foundation` should be one initiative with three specs: root pnpm workspace, shared tooling, and package boundary scaffolds.
- It should leave `apps/web` and `apps/desktop` as planned directories or minimal placeholders only; framework scaffolds come next.
- Shared packages should be private workspace packages with names like `@dwemerforge/eso-core`, `@dwemerforge/registry`, `@dwemerforge/providers`, and `@dwemerforge/ui`.
- Root scripts should delegate through workspaces and be usable before apps exist.
- Initial verification should be `pnpm install`, `pnpm typecheck`, `pnpm test`, and `pnpm lint` once implemented.

## Raw Notes

- We want package boundaries before feature code because desktop and web both need registry schemas and manifest/dependency logic.
- The first implementation can ship tiny package exports and placeholder tests to prove the workspace works.
- App shell scaffolding should come immediately after this initiative, but not be mixed into it.
- CI can be included if cheap, but should not block getting the monorepo shape in place.

## Refinement

### Problem

Without a shared workspace foundation, DwemerForge will duplicate types and utilities between desktop and web. Early package boundaries reduce future churn and make registry/desktop work easier to test.

### User / Value

Primary user: project developer. Value: predictable repo structure, repeatable commands, shared packages ready for domain logic, and a clean base for GitHub-backed specs.

### Appetite

Small, first implementation initiative. Target one short branch/PR. No app UI, no live registry, no installer behavior.

### Remaining Open Questions

- ESLint + Prettier vs Biome.
- Whether to include GitHub Actions now.
- Whether placeholders should be empty packages or packages with minimal exported stubs/tests.

### Candidate Approaches

- Minimal skeleton: root workspace files plus empty directories.
- Tooling-first: root workspace files plus TS/lint/test configs and minimal package stubs.
- App-inclusive: scaffold SvelteKit/Electron now.

### Decision Snapshot

Use tooling-first. It gives enough structure to validate the monorepo without mixing in app shell decisions. Defer real SvelteKit/Electron scaffolding to `app-shells`.

## Specs

- Initialize pnpm monorepo workspace.
- Establish shared TypeScript, lint, format, and test tooling.
- Scaffold shared package boundaries.

## Challenge

### Rabbit Holes

- Scaffolding both full apps before shared packages exist.
- Over-designing build orchestration with Turborepo/Nx before the repo has real packages.
- Adding database/auth/storage decisions in the first initiative.
- Spending time on final UI style before domain package contracts exist.

### No-Gos

- No Electron/SvelteKit feature work.
- No registry API implementation.
- No addon installer implementation.
- No ESOUI or external addon database integration.
- No committed local runtime state or credentials.

### Assumptions

- `pnpm` is acceptable as the package manager.
- TypeScript, Vitest, and a conservative lint/format setup are enough for the first pass.
- Workspace package names will use the `@dwemerforge/*` scope.

### Likely Overengineering

- Turborepo/Nx on day one.
- Full CI/CD matrix before the first package exists.
- Shared UI package with real design system before app shells exist.

### Simpler Alternative

Create only `package.json`, `pnpm-workspace.yaml`, `tsconfig.base.json`, package folders with minimal stubs/tests, and root scripts. Add app frameworks next.
