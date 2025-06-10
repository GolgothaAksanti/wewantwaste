# WE WANT WASTE

This project is a modern, responsive skip booking interface built with React, TypeScript, and TailwindCSS, bootstrapped with Vite and managed with pnpm. It includes routing, state management via Context API, and clean reusable UI components.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tech Stack

- Framework: [React](https://reactjs.org)
- Language: [Typescript](https://typescriptlang.org)
- Bundler: [Vite](https://vitejs.dev)
- Package Manager: [pnpm](https://pnpm.io)
- Styling: [TailwindCSS](https://tailwindcss.com)
- Icons: [lucid-react](https://lucide.dev)
- HTTP Client: [axios](https://axios-http.com)
- Utility Classname Combiner: [clsx](https://github.com/lukeed/clsx)
- Routing: [React Router](https://reactrouter.com)

## Prerequisities

- Node.js (>= 18)
- pnpm (install with `npm install -g pnpm`)

### Create Project

```bash
pnpm create vite
# Framework: React
# Variant: Typescript
```

### Install Dependencies

```bash
pnpm install
```

## Why use `pnpm`?

### Benefits:

- ** Faster Installs ** with a content-addressabe file system.
- ** Efficient disk usage ** via hard links and caching.
- ** Strict dependency resolution ** reducing bugs from flat `node_modules`.

### Alternatives

- `npm` - Default package manager, slower and less strict.
- `yarn` - More stable than `npm`, but `pnpm` ins more space and speed-efficient.

## Installed packages & their benefits

| Package            | Purpose                                              |
| ------------------ | ---------------------------------------------------- |
| `axios`            | Promise-based HTTP client for API requests.          |
| `lucid-react`      | beatiful, customizable React SVG icons.              |
| `tailwindcss`      | Utility-first-CSS framework for fast styling.        |
| `tailwindcss/vite` | Vite plugin to process Tailwind styles during build. |
| `clsx`             | Simple utility to conditionally join classNames.     |
| `react-router-dom` | Declarative routing for React web apps.              |

## TalwindCSS Configuration

#### Setup in `vite.config.ts`

```ts
import tailwindcss from "tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

#### Import Tailwind in CSS

```css
@import "tailwindcss";
```

#### Routing Setup (with `react-router-dom`)

Defined two routes:

- `/` -> Homepage
- `*` -> NotFoundPage for unmatched paths

---

### App Layout

A global AppLayout component wraps all routed pages to ensure consistent layout and structure across the site.

### State Management with Context API

Used React's built-in Context API to manage and share global state.

#### Benefits:

- ** No extra dependacies **
- ideal for lightweight ** global state **
- simplifies ** state sharing ** across deeply nested components.

## UI Implementation

UI implemented as per design specs. Each skip size card (e.g., 4 Yards, 6 Yards, etc.) is responsive, reusable, and cleanly styled using TailwindCSS utilities.

The app also includes a multi-step flow (Postcode → Waste Type → Select Skip → Permit → Date → Payment), with step tracking handled via Context API and localStorage keys.

## Responsiveness

- the application is fully responsive, optimized for mobile, tablet, large and extra-large screen experiences.
- Responsive utilities in TailwindCSS ensure flexible layouts and adaptive spacing

## Skip Options, and Address API Integration

- The skip options are dynamically populated using real-time data from the API provided,
- For the Address API, I got the api by inspecting the provided website then integrated it to render the addresses.
- where data was incomplete or unvailable, ** dummy data ** was used to fullfill the UI/UX and layout design requirements while maintaining functionality and flow integraty.

## Requirements Coverage

All functional UI/UX requirements have been addressed:

- ✅ Fully functional ** multi-step ** booking process.
- ✅ ** Mobile-first responsive ** design.
- ✅ Use ** Addresses data ** from a public API endpoint.
- ✅ Use ** real skip data ** from a public API endpoint.
- ✅ Global state managed with ** Context API **.
- ✅ Navigation using ** React Router ** with fallback for 404.
- ✅ Clean and maintainable ** React + Typescript ** codebase.
- ✅ UI consistency via ** TailwindCSS **.

Where some API data was unvailable,dummy data was seamlessly integrated to ensure that the interface and experience remained complete.

## Preview

[preview](https://wewantwaste-bice.vercel.app/)
