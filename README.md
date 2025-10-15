
## Patient Dashboard

A lightweight React + Vite single-page app for managing and viewing patient records. This project uses Vite for fast dev builds, React 19, Tailwind CSS for utility-first styling, and React Router for client-side routing.

This README documents how to get the project running locally, where to find the main files, and the available npm scripts.

## Quick overview

- Framework: React 19 + Vite
- Styling: Tailwind CSS
- Routing: react-router-dom
- Icons: react-icons

## Requirements

- Node.js (v18+ recommended)
- npm (v9+) or yarn

## Setup (Windows PowerShell)

1. Install dependencies:

```powershell
npm install
```

2. Start the dev server:

```powershell
npm run dev
```

3. Open http://localhost:5173 in your browser (Vite will show the exact URL after starting).

## Available scripts (from `package.json`)

- `npm run dev` — start Vite dev server with HMR
- `npm run build` — build production assets to `dist/`
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the project

## Project structure

Top-level files:

- `index.html` — Vite entry HTML
- `package.json` — scripts & dependencies
- `vite.config.js` — Vite configuration

src/ (main application)

- `main.jsx` — app bootstrap and router mounting
- `App.jsx` — top-level routes and layout
- `index.css` — global styles (Tailwind)
- `assets/` — static assets imported by the app
- `components/` — reusable UI components:
	- `Header.jsx` — app header/navigation
	- `SearchBar.jsx` — search input for patients
	- `PatientCard.jsx` — card view for a patient in lists
	- `PatientDetailsModal.jsx` — modal showing patient details
	- `AddPatientForm.jsx` — form to add a new patient
- `data/patients.json` — sample patient data used by the app
- `pages/` — route pages:
	- `Home.jsx` — landing/dashboard
	- `Patients.jsx` — patient list and management
	- `About.jsx` — about page

## How the app works

The app is a single-page React application. Patient data is loaded from `src/data/patients.json` (a simple JSON file for demo purposes). Components in `src/components/` render lists, forms, and modals. React Router (configured in `App.jsx`) handles navigation between `Home`, `Patients`, and `About` pages.

To persist data beyond a demo, replace the local JSON data with a backend API and update the data-loading code accordingly.

## Screenshots

<p align="center">
	<img src="https://res.cloudinary.com/dtogfz0uu/image/upload/v1760509412/Screenshot_2025-10-15_115145_fxkdjs.png" alt="Screenshot 1" width="45%" style="margin: 0 1%;" />
	<img src="https://res.cloudinary.com/dtogfz0uu/image/upload/v1760509412/Screenshot_2025-10-15_115155_gz7f8e.png" alt="Screenshot 2" width="45%" style="margin: 0 1%;" />
</p>

<p align="center">
	<img src="https://res.cloudinary.com/dtogfz0uu/image/upload/v1760509412/Screenshot_2025-10-15_115225_iedc1x.png" alt="Screenshot 3" width="45%" style="margin: 0 1%;" />
	<img src="https://res.cloudinary.com/dtogfz0uu/image/upload/v1760509412/Screenshot_2025-10-15_115240_hjxgfv.png" alt="Screenshot 4" width="45%" style="margin: 0 1%;" />
</p>

## Development notes & tips

- Tailwind is already included as a dependency. If you update `tailwind.config.js` or PostCSS settings, restart the dev server.
- ESLint is configured; run `npm run lint` to check code style. Fixable issues can be auto-fixed with `eslint --fix .` (you can add this to `package.json` if desired).
- This project uses React 19 typings in devDependencies. If you convert this project to TypeScript, update configs and add types for other libraries.

## Recommended small improvements (optional)

- Add a `CONTRIBUTING.md` and code style guide if multiple people will work on the project.
- Replace the local `patients.json` with a REST API or IndexedDB for persistence.
- Add unit tests and/or component tests (Vitest, React Testing Library).

## License

This repository currently includes no license file. Add a `LICENSE` when you're ready to publish or share.

## Contact / Next steps

If you'd like, I can:

- wire up a simple Node/Express or JSON-server backend to persist patient data
- add form validation and save-new-patient functionality
- add unit tests and a GitHub Actions workflow to run lint/tests on push

Tell me which of the above (if any) you'd like me to implement next.
