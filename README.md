# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    "react-x": reactX,
    "react-dom": reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs["recommended-typescript"].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

# Submission Details

A simple React app built as part of a coding challenge. The app allows users to perform and log sit-stand tests, view past results, and receive performance-based guidance.

## Project Structure

```
src/
|---assets/ # Application assets
|---components/ # Reusable UI components
|---data/ # Data used to provide test feedback
|---screens/ # Route components
|---fonts/ # Application fonts
|---providers/ # Context provider to manage application state
|---types/ # Type definitions
|---utils/ # utility / helper functions
```

## Git Workflow

I followed a feature branch approach. After completing a feature, it's functionality was tested before being merged into main.

## Design Considerations

- Mobile first approach with responsive layout to handle desktop viewports gracefully
- Focused on clean, readable code with reusable components
- Minimal dependencies (only Lucide Icons)

## Extra Features

- User has the ability to set their name and gender
- Recategorise results based on selected gender

## TODO

- Add unit tests (e.g., for result categorisation)
- Integrate local storage to persist test results
- Improve animation/transitions between steps
