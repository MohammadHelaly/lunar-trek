# Lunar Trek

A web app for visualizing lunar seismic events, developed using React.js and Unreal Engine 5. It globally won the 2023 NASA Space Apps Challenge.

## Overview

Lunar Trek is the official award-winning repository for NASA Space Apps 2023, built for the "Make a Moonquake Map 2.0!" challenge. The project was a global winner of the 2023 NASA Space Apps Challenge and received the Best Use of Science award. View the official [Lunar Trek project page](https://www.spaceappschallenge.org/2023/find-a-team/lunartech-ensemble/?tab=project) on the NASA Space Apps website.

The experience combines an interactive React website with an immersive Unreal Engine 5 game. The website lets users explore Apollo moonquake catalogues on a 3D digital Moon, inspect seismic event positions, magnitudes, dates, times, topographic views, lunar features, and Apollo landing sites, and analyze event trends through time-series visualizations. The game extends that learning experience onto the lunar surface, allowing users to experience moonquakes in a more realistic and engaging environment.

## Tech Stack

- React 18 and TypeScript for the application UI.
- Vite for local development, production builds, and previewing static output.
- Tailwind CSS, PostCSS, and a bundled Futura PT font for styling.
- Three.js, React Three Fiber, and Drei for the interactive 3D Moon scene.
- Framer Motion for page, section, and interface animations.
- React Router for client-side navigation between the landing, globe exploration, and Unreal Engine exploration pages.
- Redux Toolkit and React Redux for exploration controls, selected moonquake data, and camera state.
- Recharts for the moonquake time-series visualization.
- Radix UI Dialog and Visually Hidden primitives for accessible navigation drawer behavior.
- SVGR through `vite-plugin-svgr` for importing SVG icons as React components.
- ESLint and Prettier, including Tailwind class sorting, for code quality and formatting.

## Project Structure

```text
├── public/
│   ├── assets/fonts/       # Futura PT font files
│   ├── assets/images/      # Moon textures, team images, videos, and visual assets
│   └── assets/scenes/      # 3D scene assets, including the Moon GLB model
├── src/
│   ├── assets/icons/       # SVG icons exported as React components
│   ├── components/         # Reusable sections, 3D scene elements, controls, and layout primitives
│   ├── data/               # Moonquake catalogues, landing sites, lunar features, and contact data
│   ├── lib/                # Router, Redux store, hooks, helpers, and utilities
│   ├── pages/              # Route-level page components
│   ├── styles/             # Global CSS, Tailwind entry points, and font declarations
│   ├── app.tsx             # Provider and router composition
│   └── main.tsx            # React entry point
├── index.html
├── tailwind.config.js
├── vite.config.ts
├── vercel.json
└── package.json
```

## Prerequisites

- Node.js 18 or newer.
- npm. This repository includes a `package-lock.json`, so npm is the expected package manager.

## Runbook

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

By default, Vite serves the app at `http://localhost:3000`.

Build a production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

Format files with Prettier:

```bash
npm run format
```

## Deployment

This project has two separate deployment targets: Vercel and GitHub Pages.

The Vercel deployment uses the main app configuration. The app builds with the standard Vite output, and `vercel.json` rewrites all routes to `index.html` so React Router can handle client-side navigation from root-level paths such as `/globe-exploration` and `/unreal-engine-exploration`.

The GitHub Pages deployment is maintained on the `spa-routing` branch and is published when that branch is pushed. That branch adapts the app for GitHub Pages project hosting under `/lunar-trek/` by setting `base: "/lunar-trek/"` in `vite.config.ts`, which also makes generated asset URLs and `import.meta.env.BASE_URL` references resolve under the repository path.

The `spa-routing` branch keeps `createBrowserRouter` unchanged and does not add a React Router `basename`. Instead, `src/lib/router/routes.ts` prefixes the route constants themselves: `/` becomes `/lunar-trek/`, `/globe-exploration` becomes `/lunar-trek/globe-exploration`, and `/unreal-engine-exploration` becomes `/lunar-trek/unreal-engine-exploration`. Internal navigation, active-route checks, and wildcard redirects all consume those shared `Routes` values, so the component-level routing code does not need separate branch-specific changes.

Because GitHub Pages does not provide the same SPA fallback rewrites as Vercel, the `spa-routing` branch removes `vercel.json` and adds a `404.html` file with `pathSegmentsToKeep = 1` to preserve the `/lunar-trek` project path. It also adds the matching redirect-restoration script in `index.html`, which converts the redirected query-string route back into browser history before React Router reads it. The Vite build includes both `index.html` and `404.html`, and `.github/workflows/deploy.yml` builds the project on pushes to `spa-routing`, uploads `dist`, and publishes it to the `gh-pages` branch using `peaceiris/actions-gh-pages`.

The `spa-routing` branch also updates `robots.txt` and `sitemap.xml` to point crawlers at the GitHub Pages URLs instead of the Vercel URLs.

## Development Notes

- The `@` import alias resolves to `src`, as configured in `vite.config.ts`.
- SVG files in `src/assets/icons` can be imported as React components via SVGR.
- Styling is primarily utility-first through Tailwind, with global styles and Futura PT font declarations in `src/styles`.
- Moonquake data is stored locally in `src/data` from the Nakamura 1979 and Lognonne 2003 catalogues.
- The Unreal Engine exploration page embeds demonstration videos and links to a downloadable UE5 build hosted externally.

## License

This project is licensed under the MIT License. See `LICENSE` for details.
