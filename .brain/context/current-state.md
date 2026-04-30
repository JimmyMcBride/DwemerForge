# Current State

<!-- brain:begin context-current-state -->
This file is a deterministic snapshot of the repository state at the last refresh.

## Repository

- Project: `DwemerForge`
- Root: `.`
- Runtime: `unknown`
- Go test files: `0`
<!-- brain:end context-current-state -->

## Local Notes

Brain and Plan are initialized. Project is in requirements brainstorming. No application code, package manifest, or Git repository exists yet.

ESOUI backend research outcome: dependency-aware install is technically feasible by parsing addon manifests, and Minion 4 now advertises automatic library dependency handling. Production ESOUI integration still needs explicit MMOUI/GGMODS permission or a documented API/feed path because the public terms restrict automated access.

Permission request sent to MMOUI/ESOUI on 2026-04-29 asking for an approved ESOUI/MMOUI API, feed, or integration path for DwemerForge.

Backup backend direction if ESOUI permission is denied: avoid automated ESOUI access and build around local installed-addon scanning, ZIP import, a DwemerForge metadata registry, explicit provider APIs such as CurseForge/Nexus/GitHub where useful, and browser handoff links for ESOUI-only addons.

Product pivot on 2026-04-30: design DwemerForge as an independent addon registry from scratch. Authors can upload addon ZIPs or connect GitHub release automation. First test corpus should use GitHub-hosted open-source ESO addons with clear licenses and manifests, including PantherXP, EchoExperience, Gear Overview, PriceTracker, RepeatableQuestFilter, SellOrnateItems, GrindTimer, PersonalAssistant, and LibAddonMenu.

Roadmap solidified on 2026-04-30: use a monorepo with `apps/web`, `apps/desktop`, and shared packages for ESO core parsing/resolution, registry schemas, provider contracts, and optional shared UI. Next implementation step is monorepo scaffolding before app-specific features.

Repository publication update on 2026-04-30: project is published to GitHub as `JimmyMcBride/DwemerForge` with MIT license. Plan source mode and story backend are set to `github`. Roadmap includes recommended initiatives under each phase.
