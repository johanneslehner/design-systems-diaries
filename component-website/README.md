# Component Repository Website

A modern React component library showcase built with **React**, **Material-UI (MUI)**, and **Tailwind CSS**, featuring a dynamic theme system powered by pure CSS custom properties.

## Features

- 🎨 **Dynamic Theme Switching** - Toggle between light and dark themes
- 🎭 **CSS Custom Properties** - All colors managed through CSS variables
- 🧩 **MUI Integration** - Material-UI components using CSS custom properties
- 🌊 **Tailwind CSS** - Utility-first CSS framework coexisting with MUI
- 💾 **Theme Persistence** - User's theme choice saved in localStorage
- ⚡ **Vite** - Fast development with Hot Module Replacement (HMR)
- 📱 **Responsive Design** - Mobile-first approach with responsive layouts

## Technology Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Material-UI (MUI)** - Component library
- **Tailwind CSS** - Utility-first CSS framework
- **Emotion** - CSS-in-JS library for MUI styling

## Project Structure

```
component-website/
├── src/
│   ├── components/
│   │   ├── ThemeSwitcher.jsx    # Theme switcher component
│   │   └── DemoPage.jsx          # Demo showcase page
│   ├── themes/
│   │   ├── light-theme.css       # Light theme colors
│   │   └── dark-theme.css        # Dark theme colors
│   ├── theme.js                  # MUI theme configuration
│   ├── App.jsx                   # Main App component
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles + Tailwind directives
├── public/                       # Static assets
├── package.json                  # Dependencies
├── vite.config.js                # Vite configuration
├── tailwind.config.js            # Tailwind configuration
└── postcss.config.js             # PostCSS configuration
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the component-website directory:
```bash
cd component-website
```

2. Install dependencies (if not already installed):
```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Build the application for production:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Theme System Architecture

### CSS Custom Properties

The theme system uses CSS custom properties (CSS variables) defined in separate theme files:

- **`src/themes/light-theme.css`** - Light theme colors
- **`src/themes/dark-theme.css`** - Dark theme colors

Each theme file uses the `:root[data-theme="..."]` selector to override color variables:

```css
:root[data-theme="light"] {
  --primary-main: #1976d2;
  --background-default: #ffffff;
  --text-primary: rgba(0, 0, 0, 0.87);
  /* ... more color properties */
}
```

### MUI Theme Configuration

The MUI theme (`src/theme.js`) is configured to use CSS custom properties:

```javascript
export const createMuiTheme = () => {
  return createTheme({
    palette: {
      primary: {
        main: 'var(--primary-main)',
        light: 'var(--primary-light)',
        // ...
      },
      // ...
    },
  });
};
```

### Theme Switcher Component

The `ThemeSwitcher` component (`src/components/ThemeSwitcher.jsx`) manages theme switching:

- Provides a UI to select themes
- Updates the `data-theme` attribute on the root HTML element
- Persists theme selection to localStorage
- Automatically applies the saved theme on page load

### Tailwind CSS Integration

Tailwind CSS is configured to coexist with MUI using the `important: '#root'` option in `tailwind.config.js`. This ensures Tailwind utilities have proper specificity without conflicting with MUI styles.

## Adding New Themes

To add a new theme:

1. Create a new theme CSS file in `src/themes/` (e.g., `ocean-theme.css`)
2. Define color custom properties with the theme selector:
   ```css
   :root[data-theme="ocean"] {
     --primary-main: #0077be;
     --secondary-main: #00a8cc;
     /* ... other colors */
   }
   ```
3. Import the theme file in `src/App.jsx`
4. Add the theme to the `themes` array in `src/components/ThemeSwitcher.jsx`

## Dependencies

### Production Dependencies

- `react` - React library
- `react-dom` - React DOM renderer
- `@mui/material` - Material-UI components
- `@mui/icons-material` - Material-UI icons
- `@emotion/react` - CSS-in-JS for MUI
- `@emotion/styled` - Styled components for MUI

### Development Dependencies

- `vite` - Build tool
- `@vitejs/plugin-react` - Vite React plugin
- `tailwindcss` - Tailwind CSS framework
- `postcss` - CSS post-processor
- `autoprefixer` - PostCSS plugin for vendor prefixes
- `eslint` - Code linting

## Key Features Demonstration

The demo page showcases:

- **MUI Components**: Cards, Buttons, Text Fields, Alerts, Chips, App Bar
- **Tailwind Components**: Custom styled cards with Tailwind utilities
- **Theme Switcher**: Toggle between light and dark themes
- **Color Palette Display**: Visual representation of theme colors
- **Responsive Layout**: Grid system adapting to different screen sizes

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Custom Properties support required

## License

This project is part of the Design Systems Diaries repository.

## Contributing

This is a showcase project demonstrating theme integration. Feel free to explore and learn from the implementation!

## Learn More

- [React Documentation](https://react.dev/)
- [Material-UI Documentation](https://mui.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vite.dev/)
- [CSS Custom Properties (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
