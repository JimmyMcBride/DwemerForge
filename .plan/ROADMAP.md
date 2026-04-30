# Roadmap: DwemerForge

Created: 2026-04-29T05:33:51Z

## Overview

Build DwemerForge in phases: first create an independent registry model and GitHub release ingestion path, then ship a local dependency-aware manager, then deepen author portal/package upload, backup/profile workflows, and Dwemer-style UI.

## Phase 1: Monorepo Foundation

Goal: Create the shared project base.

Summary: Set up pnpm workspace with `apps/web`, `apps/desktop`, and shared packages for manifest parsing, registry schema, provider contracts, and UI foundations.

Recommended initiatives:

- `workspace-foundation`: pnpm workspace, TypeScript config, lint/test conventions, path aliases, package scripts.
- `app-shells`: initial SvelteKit web app and Electron + Svelte desktop app scaffolds.
- `shared-ui-foundation`: Tailwind setup, design tokens, and optional shared Svelte primitives.

## Phase 2: Registry Core

Goal: Prove independent registry and GitHub ingestion.

Summary: Define registry records, author/package/version model, manifest parser, dependency resolver, GitHub release provider, release ZIP/source archive ingestion, checksum validation, and seed test data from open-source GitHub addons.

Recommended initiatives:

- `eso-core`: manifest parser, addon folder scanner, dependency parser, version constraint handling, install plan model.
- `registry-model`: addon/package/version schema, zod validators, search document shape, seed data format.
- `github-ingestion`: GitHub release asset ingestion, source archive ingestion, checksum capture, license metadata, fixture test corpus.

## Phase 3: Desktop Manager MVP

Goal: Build first usable addon manager workflow.

Summary: Add installed-addon scan, registry browse/search, install addon plus missing required dependencies from allowed sources, update/remove, operation queue, local cache, and backup-before-replace safety.

Recommended initiatives:

- `desktop-shell`: Electron main/preload/renderer wiring, typed IPC, app settings, local database/cache.
- `local-addon-scan`: ESO folder discovery, installed inventory, manifest matching, dependency health.
- `install-pipeline`: download/cache, archive validation, staging, backup-before-replace, rollback behavior.
- `dependency-workflow`: install plan preview, missing dependency queue, optional dependency recommendations.

## Phase 4: Web Portal MVP

Goal: Let developers participate directly.

Summary: Add SvelteKit public addon pages, author accounts, package upload, GitHub release connection, moderation/review state, package validation output, and registry API consumed by the desktop app.

Recommended initiatives:

- `portal-shell`: SvelteKit layout, public addon pages, search/browse UI, API route base.
- `author-onboarding`: login, author profile, addon ownership/claim model, registry terms acceptance.
- `package-submission`: manual ZIP upload, manifest validation report, moderation/review flow.
- `registry-api`: search endpoint, package/version endpoint, dependency graph endpoint, desktop client contract.

## Phase 5: Product Polish and Release

Goal: Make DwemerForge feel shippable.

Summary: Add snapshots/restore UX, profile/loadout decisions if still desired, UI style deep dive, app packaging, signing, app update channel, portal deployment, and registry contribution workflow.

Recommended initiatives:

- `dwemer-ui`: visual style, dense manager layouts, component polish, accessibility pass.
- `desktop-release`: packaging, signing/notarization decisions, auto-update channel, release notes.
- `portal-deploy`: hosting, database/storage, upload scanning, observability, backups.
- `backup-profiles`: snapshots, restore UX, profile/loadout decision, SavedVariables safety model.

## Ordering Notes

- Dependency-aware install is the first product differentiator.
- Independent registry + GitHub Releases is the first live provider path.
- Shared packages come before app-specific code so desktop and portal use the same schema and parser.
- UI style work should follow core flow clarity, but early layout should already support dense manager workflows.

## Parking Lot

- Cloud sync.
- Multi-source marketplace beyond GitHub/manual uploads.
- Auto-editing manifests.
- External addon database integrations.
