# Abdur Rafay — Full Stack Developer Portfolio

A responsive one-page portfolio built with Next.js, TypeScript, Framer Motion and CSS.

## Run locally

1. Install Node.js 22 or newer.
2. Open this folder in VS Code.
3. Open the terminal in VS Code.
4. Run:

```bash
corepack enable
pnpm install
pnpm dev
```

5. Open `http://localhost:3000` in your browser.

## Edit profile and links

Open `app/page.tsx` and edit the `PROFILE` object near the top of the file.

- Add your exact Facebook profile URL to the Facebook social-rail link.
- Replace each project GitHub link with its exact repository URL when available.
- Replace each demo-request link with the exact deployed project URL when available.

## Replace project previews

The current project cards use lightweight interface mockups because project screenshots were not included in the CV. Add real screenshots to `public/`, then replace the `ProjectPreview` component in `app/page.tsx` with Next.js `Image` components.

## Production check

```bash
pnpm lint
pnpm build
```

Both commands should complete without errors before deployment.
