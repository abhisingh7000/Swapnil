# Swapnil Assignment

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Project Instruction start from here

This is a simple yet powerful Bug Tracker web application built using React, Bootstrap, and React Router. It allows users to add, view, edit, delete, and filter bugs based on priority and status. Bug data is stored using Local Storage for persistence.

Features
 Add, update, and delete bugs
 Search bugs by title
 Filter bugs by status and priority
 View full details of a bug
 Simple and responsive UI with Bootstrap
 Clean component-based structure
 LocalStorage persistence

Tech Stack

React
React Router DOM
Bootstrap 5
UUID
Local Storage for state persistence

Approach & Component Structure
The application is divided into multiple reusable components:

App.jsx: Root component that holds global state (bugs, search, filters) and sets up routes.

BugList.jsx: Displays list of bugs with filtering, search, and action buttons.

BugForm.jsx: Handles both bug creation and editing using conditional rendering.

BugDetails.jsx: Shows complete details of a selected bug.

Routing is implemented using react-router-dom for a single-page experience.

UUID is used to generate unique IDs for bugs.

useEffect ensures any changes in the bug list are synced with localStorage for persistence.

State is handled locally in App.jsx and passed down as props to children.
