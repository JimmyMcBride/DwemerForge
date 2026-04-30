# Project: DwemerForge

Created: 2026-04-29T05:33:51Z

## Vision

DwemerForge is an independent ESO addon manager and registry for PC players who want reliable installs without manually chasing libraries and dependencies. The core product promise is dependency-aware install/update from sources that DwemerForge is allowed to consume, starting with author-submitted packages and GitHub release automation.

## Principles

- Dependency correctness first.
- Conservative file operations with backup/rollback where practical.
- Source/provider behavior must respect site terms, authentication, licenses, and rate limits.
- Independent registry first: authors can upload packages or connect GitHub releases.
- UI should be dense, readable, and built for repeated addon management workflows.
- Specs are written before major implementation slices.

## Constraints

- Stack target: Electron, Svelte, Tailwind.
- Fresh repo; app scaffold is not created yet.
- First live provider should be DwemerForge Registry + GitHub Releases.
- Avoid optional dependency surprise-installs by default.
- Do not auto-edit user addon manifests or SavedVariables in normal flows.

## Planning Rules

- Specs are the canonical execution contract.
- Stories are created only after spec approval.
- Stories should be execution-ready and verification-aware.

## Notes

- Active brainstorm: `.plan/brainstorms/dwemerforge-eso-addon-manager-requirements-and-product-shape.md`.
- UI style exploration comes after requirements and core workflow architecture are shaped.
