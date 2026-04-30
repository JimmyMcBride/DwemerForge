# Deployment And Release Skeleton

This repository separates web deployment checks from desktop release checks with path-aware GitHub Actions workflows.

## Web Portal

The SvelteKit shell lives in `apps/web`.

Recommended Vercel project settings:

- Root Directory: `apps/web`
- Framework Preset: SvelteKit
- Install Command: `pnpm install --frozen-lockfile`
- Build Command: `pnpm build`

No production secrets are required for the shell app. Future registry API, database, storage, and auth secrets should be added in Vercel rather than committed to the repository.

## Desktop App

The Electron shell lives in `apps/desktop`.

The desktop workflow runs on:

- pull requests that touch `apps/desktop`, shared packages, or shared workspace config
- pushes to `main` that touch those same paths
- manual dispatch
- tags matching `desktop-v*`

Manual dispatch and `desktop-v*` tags run the packaging command. Release signing, notarization, and auto-update publishing are intentionally deferred.
