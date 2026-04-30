---
created_at: "2026-04-29T05:34:10Z"
project: DwemerForge
slug: dwemerforge-eso-addon-manager-requirements-and-product-shape
status: active
title: DwemerForge ESO addon manager requirements and product shape
type: brainstorm
updated_at: "2026-04-29T05:35:35Z"
---

# Brainstorm: DwemerForge ESO addon manager requirements and product shape

Started: 2026-04-29T05:34:10Z

## Focus Question

What should DwemerForge be, and what requirements must be true for it to beat the current ESO addon-manager workflow?

## Desired Outcome

A clear product shape for an Electron + Svelte + Tailwind desktop app, centered on automatic required dependency resolution for ESO addons. Output should be strong enough to split into execution specs after source/API feasibility is researched.

## Vision

DwemerForge is a desktop ESO addon manager that makes addons feel package-managed instead of manually assembled. The user searches for an addon, clicks install, and DwemerForge downloads the addon plus any missing required libraries/dependencies. It should also provide the expected manager basics: discover the ESO addon folder, show installed addons, install/update/remove, update all, backup/restore, and make broken dependency states obvious before the user launches the game.

## Supporting Material

- Minion public feature surface: install, update, manage, backup. https://minion.mmoui.com/
- ESOUI addon dependency guidance: required dependencies belong in `DependsOn` / platform-specific dependency tags, optional dependencies are separate, and version checks use `>=` against `AddOnVersion`. https://www.esoui.com/forums/showpost.php?p=49229&postcount=1
- ESO support notes that addons are commonly disabled/out-of-date after patches, so the app should explain API mismatch and addon state clearly. https://help.elderscrollsonline.com/app/answers/detail/a_id/24873/
- ESOUI/MMOUI Terms of Service restrict automated access unless GGMODS provides or separately permits the interface. https://www.mmoui.com/?tos
- Minion 4 beta explicitly lists dependency handling and automatic library install as features, which confirms the workflow is technically feasible when using proper manifest/source data. https://sir.insidi.at/or/vault/minion-4-open-beta/

## Constraints

- Fresh project; no app scaffold exists yet.
- Requested stack: Electron, Svelte, Tailwind.
- Source/provider feasibility is unknown. Need verify ESOUI/MMOUI acceptable access path before building catalog/install logic around it.
- Required dependency install is the product differentiator and should shape the data model early.
- File operations touch user game documents, so install/update/remove must be conservative and recoverable.
- UI style deep dive comes after product requirements and architecture are clearer.

## Open Questions

- What addon source is acceptable for catalog metadata and downloads: ESOUI/MMOUI API/feed, authenticated flow, scraping, user-provided URLs, or a maintained metadata mirror?
- Can remote dependency metadata be trusted from addon descriptions, manifests inside archives, ESOUI metadata, or all of the above?
- Which platforms are MVP: Windows only first, or Windows/macOS/Linux with Steam/Proton/Wine path support?
- Should optional dependencies be opt-in recommendations, per-addon prompts, or a global preference?
- Should DwemerForge support profiles/loadouts, or keep v1 focused on install/update/backup?
- How should it handle manually installed addons that are not in the catalog?
- Should updates be automatic in the background, user-confirmed, or only "Update All" driven?
- What packaging/signing/update channel do we want for the Electron app?
- Can DwemerForge get explicit ESOUI/MMOUI API permission or a documented integration path from GGMODS?

## Ideas

- Core promise: DwemerForge should make ESO addon installs dependency-complete by default. When a user installs an addon, the app resolves required dependencies from manifest metadata and/or trusted source metadata, checks what is already installed, then automatically installs only missing required dependencies before marking the addon ready.

- MVP feature set should match the expected Minion-like baseline: discover ESO install/addon folders, browse/search addons, install addons, update installed addons, update all, remove addons, view addon details/changelog/source/version, create backups/snapshots of AddOns and SavedVariables, restore backups, and keep a local inventory of installed addons.

- Dependency engine should parse installed addon manifests (`.txt` / `.addon`) for `DependsOn`, `OptionalDependsOn`, platform-specific dependency tags, `AddOnVersion`, and `APIVersion`. Required dependencies block readiness; optional dependencies should be visible/recommended but not auto-installed by default unless user opts in.

- Addon source strategy needs early proof. Preferred source is ESOUI/MMOUI because Minion and the ESO addon community center there, but we need verify whether there is an acceptable API, feed, scrape boundary, or metadata mirror path. Do not build on brittle scraping until source terms and rate limits are understood.

- Architecture direction: Electron shell, Svelte UI, Tailwind styling. Keep filesystem/network/install logic in the main process or a local service with typed IPC. Renderer should present catalog, installed state, dependency graph, backup/restore, settings, and task progress without direct filesystem mutation.

- Safety model: every install/update/remove should be transactional where practical. Download to cache, validate archive shape, extract to staging, detect top-level addon folders/manifests, backup replaced folders, then swap into AddOns. On failure, leave the existing install intact and show a useful error.

- UI should eventually deep dive into a distinct Dwemer-inspired style: mechanical, precise, warm metal accents, readable dense addon tables, clear dependency status, and confident install/update flows. Avoid a generic game launcher look; primary screen should be the usable addon manager, not marketing.

## Raw Notes

- ESO addon manifest parsing matters. Scan `.txt` and `.addon` files and extract `Title`, `APIVersion`, `AddOnVersion`, `DependsOn`, `OptionalDependsOn`, `PCDependsOn`, `ConsoleDependsOn`, saved variables, and loaded file list where useful.
- Required dependency rules: install missing required dependencies automatically, check installed dependency versions against `>=` constraints when present, handle transitive dependencies, detect cycles, and surface unresolved dependencies.
- Optional dependency rules: show as recommendations, not default auto-installs. Add a setting later if users want optional dependency auto-install.
- Installed inventory: scan top-level folders in `Documents/Elder Scrolls Online/<realm>/AddOns`, detect manifest/folder mismatches, catalog-linked addons, manual addons, outdated `APIVersion`, missing deps, and update availability.
- Install/update safety: download to cache, validate archive paths, extract to staging, identify addon folders/manifests, back up folders being replaced, swap into AddOns, rollback or leave existing install intact on failure.
- Backups: snapshots should include AddOns and SavedVariables, with restore preview and clear overwrite warnings.
- UI direction: dense manager surface, addon table, status filters, dependency health, operation queue, detail drawer, backup/settings views, and a later Dwemer-inspired visual system with readable metal/stone/mechanical cues.
- Architecture direction: Electron main process owns filesystem, network, archive extraction, source providers, dependency resolver, installer, backup service, and local database/cache. Svelte renderer talks over typed IPC and never mutates addon folders directly.
- Test shape: unit tests for manifest parser and dependency resolver; integration tests for installer behavior using temp directories and fake zips; provider tests with recorded fixtures.
- Research finding: ESO dependency metadata exists primarily in addon manifests inside packages and installed addon folders, via tags such as `DependsOn`, `OptionalDependsOn`, platform-specific dependency tags, and `AddOnVersion` constraints. ESOUI pages may include dependency sections in the human-written description, but that should be treated as display/help text rather than canonical structured metadata.
- Research finding: Minion 4 proves dependency-aware install is possible against ESOUI data, but public API use is not clearly available for third-party tools. The Minion API has been described in ESOUI forums as undocumented/unsupported outside Minion, and MMOUI Terms restrict automated access without provided interface or separate agreement.
- Permission request sent to MMOUI/ESOUI on 2026-04-29 asking for an approved API/feed/integration path before building ESOUI backend behavior.
- Backup database plan if ESOUI permission is denied: build a DwemerForge Registry that stores metadata only, not mirrored addon files. Entries should include normalized addon IDs, display names, manifest dependency tags, optional dependencies, source links, allowed provider IDs, and install/download capability flags. Seed it from author submissions, GitHub releases where authors publish there, CurseForge/Nexus API-backed entries where terms allow, and user-imported ZIP manifests. For ESOUI-only addons, provide browser handoff links and local ZIP ingestion instead of automated ESOUI page/API/download access.
- Provider priority if ESOUI permission is denied: local installed scan and ZIP import first; DwemerForge Registry metadata second; CurseForge API third for the limited ESO catalog; Nexus API fourth for sparse/manual cases; GitHub Releases for author-owned repos; ESOUI browser handoff only.
- Product pivot: DwemerForge should be designed as an independent addon registry from scratch. Authors can upload addon ZIPs manually or connect GitHub release automation. The first test corpus should use GitHub-hosted open-source ESO addons with clear licenses and manifest files so registry search, dependency parsing, release ingestion, and install planning can be built without relying on any third-party addon database.
- GitHub test candidates found: `kenzieryann7/PantherXP` (MIT, release ZIP assets, hard dependency on `LibAddonMenu-2.0`), `echomap/EchoExperience` (MIT, `.addon` manifest, hard and optional dependencies), `ronnievdc/gear-overview` (MIT, source manifest, hard/optional dependencies), `uladz/PriceTracker` (MIT, release ZIP asset, optional `LibAddonMenu-2.0`), `alexgurrola/RepeatableQuestFilter` (MIT, release ZIP assets, optional deps), `DreanorESOUI/SellOrnateItems` (MIT, release ZIP assets, no deps), `Tirilance/GrindTimer` (MIT, tag releases, no release assets), `klingo/ESO-PersonalAssistant` (zlib, multi-manifest addon suite, versioned dependency constraints), and `sirinsidiator/ESO-LibAddonMenu` (Artistic-2.0, library dependency target).

## Refinement

### Problem

ESO addons often depend on standalone libraries or other addons. Today users frequently have to read descriptions, chase dependency names, download each dependency manually, and troubleshoot red "Dependency" states in-game. Existing manager workflows cover install/update basics but do not make dependency-complete installs the default.


### User / Value

Primary user: ESO PC player who wants addons without dependency hunting. Secondary user: addon-heavy player who wants update, backup, and health checks before game launch. Value: fewer broken installs, faster setup, safer updates, and clearer addon state.


### Appetite

MVP should be a real local manager with dependency-aware install/update, not a full ecosystem rewrite. Start with one source provider if feasible, one local ESO folder, installed scan, install/update/remove, dependency resolver, and backup basics. Defer social features, addon author tooling, profile sync, cloud backup, and multi-source marketplace behavior.


### Remaining Open Questions

- Source/API feasibility for ESOUI/MMOUI, especially permission to use an API/feed for a third-party manager.
- Whether a DwemerForge Registry can safely host metadata extracted from author-submitted manifests and user-imported packages without redistributing addon content.
- How reliable remote dependency discovery can be before download.
- How to resolve manifest dependency names to ESOUI addon IDs when names are ambiguous, duplicated, discontinued, bundled, or misspelled.
- Windows-first versus cross-platform first.
- Whether backup/restore belongs in v1 or first follow-up.
- Whether profile/loadout management belongs in v1.


### Candidate Approaches

- Provider-first: research ESOUI/MMOUI access, build a source provider interface, then implement catalog-backed install.
- Local-first: build manifest scanner, dependency parser, resolver, fake provider, and installer before live source integration.
- Permission-denied MVP: build local scanner/resolver/installer, ZIP import, metadata registry, and browser handoff links; avoid automated ESOUI access.


### Decision Snapshot

Best current path: hybrid MVP. Scaffold Electron + Svelte + Tailwind after requirements are split into specs. First technical spike should prove source/provider access and dependency metadata extraction. In parallel, design the local manifest parser and dependency resolver because they are required regardless of provider. ESOUI backend is technically plausible, but DwemerForge should not depend on scraping or undocumented automated access without explicit permission from GGMODS/MMOUI. If permission is denied, pivot the first product to dependency health + manual-safe install workflows backed by a DwemerForge metadata registry and non-ESOUI providers with explicit APIs.

## Challenge

### Rabbit Holes

- Building a broad multi-source package ecosystem before one provider is reliable.
- Auto-editing user addon manifests to "fix" dependencies instead of managing installs.
- Treating optional dependencies as required and causing surprise dependency chains.
- Styling the app deeply before the core manager workflow is understood.
- Full cloud sync/account system in v1.

### No-Gos

- Do not bypass source-site terms, authentication, or rate limits.
- Do not build a production ESOUI backend by scraping or reverse-engineering undocumented Minion API behavior without permission.
- Do not run addon code.
- Do not delete or replace user addon folders without backup/preview for risky operations.
- Do not silently install optional dependencies by default.
- Do not mutate ESO SavedVariables during normal install/update flows.

### Assumptions

- ESO addon dependencies can be modeled from manifests and/or source metadata.
- Required dependencies should auto-install; optional dependencies should be user-visible recommendations.
- Users will accept a warning/confirmation flow when the game is running or files are locked.
- Local cache/database is acceptable for catalog metadata, installed inventory, operations, and backups.

### Likely Overengineering

- Graph visualization as a primary surface. A compact dependency list and health status is enough for v1.
- Plugin architecture before source/provider shape is proven.
- Custom updater/patch protocol for addons instead of archive replace with backup.
- Complex profile/loadout sync before basic manager reliability.

### Simpler Alternative

Ship v1 as a dependency-aware ESOUI-backed local manager: scan installed addons, browse/search one catalog, install addon plus missing required dependencies, update installed addons, remove with backup option, and create/restore local snapshots.
