# Project Overview

This project is a web application built using Node.js, TypeScript, React, Vite, and Tailwind CSS. It utilizes ESLint for code linting.

## Project Structure

```
.
├── .bolt/            # Bolt specific files (further investigation needed if relevant)
├── dist/             # Build output directory
├── node_modules/     # Node.js dependencies
├── src/              # Application source code
│   ├── assets/       # Static assets (images, fonts, etc.)
│   │   ├── adolescent-img.png
│   │   ├── adult-img.png
│   │   ├── child-img.png
│   │   └── locations-image.png
│   ├── components/   # React components
│   │   ├── Tabs/            # Components related to Tab functionality
│   │   ├── AccordionSection.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Layout.tsx
│   │   ├── MainContent.tsx
│   │   ├── ProgramSlider.tsx
│   │   ├── StickyButtons.tsx
│   │   └── TabContent.tsx
│   ├── App.tsx       # Main React application component
│   ├── index.css     # Global/entry-point CSS
│   ├── main.tsx      # React application entry point
│   └── vite-env.d.ts # Vite environment variable type definitions
├── .gitignore        # Files and directories ignored by Git
├── eslint.config.js  # ESLint configuration
├── index.html        # Main HTML entry point
├── package-lock.json # Exact dependency versions
├── package.json      # Project metadata and dependencies
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.app.json # TypeScript configuration for the application
├── tsconfig.json     # Base TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node.js (e.g., build scripts)
└── vite.config.ts    # Vite configuration
```

## Setup and Technologies

*   **Framework/Library:** React with TypeScript (.tsx files)
*   **Build Tool & Dev Server:** Vite
*   **CSS Framework:** Tailwind CSS
*   **Linting:** ESLint
*   **Package Manager:** npm (inferred from `package-lock.json`)

## Available Scripts

*   `npm run dev`: Starts the development server using Vite.
*   `npm run build`: Builds the application for production.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run preview`: Serves the production build locally for preview.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Run the development server:**
    ```bash
    npm run dev
    ```

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Lint the code:**
    ```bash
    npm run lint
    ```

5.  **Preview the production build:**
    ```bash
    npm run preview
    ```

## Further Exploration

*   Examine `package.json` to confirm available npm scripts and exact dependencies.
*   If the `.bolt/` directory is crucial, investigate its purpose within the project's specific context.
*   Delve into individual components in `src/components/` to understand their specific roles and functionalities.
*   Review `vite.config.ts`, `tailwind.config.js`, and `eslint.config.js` for detailed configurations. 