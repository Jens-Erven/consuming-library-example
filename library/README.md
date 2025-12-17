# @jens-erven/fe-lib

A comprehensive React component library with Material-UI theming, design tokens, and flexible theme switching capabilities.

[![npm version](https://badge.fury.io/js/%40jens-erven%2Ffe-lib.svg)](https://www.npmjs.com/package/@jens-erven/fe-lib)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 🎨 Features

- ✅ **3 Themes** - Ocean, Sunset, and Forest with light/dark modes
- ✅ **Material-UI Integration** - Pre-configured MUI themes ready to use
- ✅ **React Components** - Custom built React Components & Documented with Storybook
- ✅ **Theme Provider** - Context-based theme management with hooks
- ✅ **Pre-built Theme/Mode React Components** - Theme selector and mode toggle components
- ✅ **Design Tokens** - Access raw token values (TypeScript + CSS)
- ✅ **CSS Variables** - Use themes without React/MUI
- ✅ **Tailwind CSS** - Pre-built Tailwind theme classes
- ✅ **Auto Persistence** - Saves theme preferences to localStorage
- ✅ **System Preference** - Detects OS dark mode automatically
- ✅ **Tree Shakeable** - Import only what you need

---

## 📦 Installation

```bash
npm install @jens-erven/fe-lib @mui/material @emotion/react @emotion/styled
```

### Peer Dependencies

This library requires Material-UI and its dependencies:

- `@mui/material` ^6.0.0
- `@emotion/react` ^11.0.0
- `@emotion/styled` ^11.0.0
- `react` ^18.0.0
- `react-dom` ^18.0.0

---

## 🚀 Quick Start

```typescript
import {
  AppThemeProvider,
  ThemeSelector,
  ThemeModeToggle
} from '@jens-erven/fe-lib';

function App() {
  return (
    <AppThemeProvider defaultTheme="ocean" defaultMode="light">
      <header>
        <ThemeSelector />
        <ThemeModeToggle />
      </header>
      <YourApp />
    </AppThemeProvider>
  );
}
```

That's it! You now have full theme switching with 3 themes and light/dark modes.

---

## 📋 What This Package Provides

### 🎨 **1. Material-UI Themes (6 total)**

Pre-configured Material-UI theme objects ready to use:

```typescript
import {
  oceanLightTheme,
  oceanDarkTheme,
  sunsetLightTheme,
  sunsetDarkTheme,
  forestLightTheme,
  forestDarkTheme,
  themes, // Structured object
  allThemes, // Flat object
} from "@jens-erven/fe-lib";
```

**When to use:**

- ✅ You're using Material-UI in your app
- ✅ You want consistent, professional themes
- ✅ You need light and dark mode support

**Color Palettes:**

- **Ocean** - Blue tones (professional, corporate)
- **Sunset** - Orange tones (warm, energetic)
- **Forest** - Green tones (natural, calming)

---

### 🔧 **2. Theme Provider & Context**

React Context-based theme management:

```typescript
import { AppThemeProvider, useAppTheme } from '@jens-erven/fe-lib';

// Wrap your app
<AppThemeProvider>
  <App />
</AppThemeProvider>

// Use anywhere in your app
function MyComponent() {
  const { themeName, mode, setTheme, toggleMode } = useAppTheme();
  // Build custom theme controls
}
```

**When to use:**

- ✅ You need theme switching in your app
- ✅ You want automatic localStorage persistence
- ✅ You want to build custom theme controls
- ✅ You need system dark mode detection

**Features:**

- Automatic state management
- localStorage persistence
- System preference detection
- TypeScript support
- SSR safe

---

### 🎛️ **3. Pre-built React Components**

Ready-to-use Material-UI components for theme control:

```typescript
import { ThemeSelector, ThemeModeToggle } from '@jens-erven/fe-lib';

// Theme dropdown
<ThemeSelector size="small" width={150} />

// Light/Dark mode toggle
<ThemeModeToggle showIcons={true} showLabel={true} />
```

**When to use:**

- ✅ You want quick setup with minimal code
- ✅ You don't need custom theme control UI
- ✅ You're okay with the default Material-UI styling

**Customization:**

- Size (small, medium)
- Labels (show/hide, custom text)
- Width
- Icons (show/hide)

---

### 🎨 **4. Design Tokens (TypeScript)**

Raw token values for custom styling:

```typescript
import * as oceanLight from "@jens-erven/fe-lib/tokens/ocean/light";

// Use in styled-components
const Button = styled.button`
  background-color: ${oceanLight.primary};
  color: ${oceanLight.primaryContrast};
  border-radius: ${oceanLight.borderRadius};
`;
```

**When to use:**

- ✅ You're using styled-components or emotion
- ✅ You need token values in JavaScript
- ✅ You're building custom components
- ✅ You want to access raw color/spacing values

**Available tokens:**

- Colors: primary, secondary, background, text, error, warning, info, success
- Layout: spacingUnit, borderRadius

---

### 📄 **5. CSS Variables**

CSS custom properties for each theme:

```typescript
// Import CSS file
import '@jens-erven/fe-lib/css/ocean/light';

// Use in CSS
.my-component {
  background-color: var(--primary);
  color: var(--primary-contrast);
  border-radius: var(--border-radius);
}
```

**When to use:**

- ✅ You prefer CSS over JavaScript styling
- ✅ You're using CSS Modules or plain CSS
- ✅ You're not using Material-UI
- ✅ You want framework-agnostic theming

**Available imports:**

- `@jens-erven/fe-lib/css/ocean/light`
- `@jens-erven/fe-lib/css/ocean/dark`
- `@jens-erven/fe-lib/css/sunset/light`
- `@jens-erven/fe-lib/css/sunset/dark`
- `@jens-erven/fe-lib/css/forest/light`
- `@jens-erven/fe-lib/css/forest/dark`

---

### 🎨 **6. Tailwind CSS Integration**

Pre-built Tailwind CSS with theme classes:

```typescript
// Import Tailwind CSS
import '@jens-erven/fe-lib/css/tailwind';

// Use theme classes in JSX
<div className="theme-theme-ocean">
  <button className="bg-primary text-primary-contrast">
    Themed Button
  </button>
</div>

// Toggle dark mode
<div className="theme-theme-ocean dark">
  {/* Uses dark mode colors */}
</div>
```

**When to use:**

- ✅ You're using Tailwind CSS in your project
- ✅ You want utility-class based theming
- ✅ You prefer declarative styling in markup

**Features:**

- Theme classes: `theme-theme-ocean`, `theme-theme-sunset`, `theme-theme-forest`
- Dark mode class: `dark`
- All design tokens as Tailwind utilities

---

### 🧩 **7. UI Components**

Basic UI components (more coming soon):

```typescript
import { Button, MaterialButton } from '@jens-erven/fe-lib';

<Button variant="primary" size="md">Click me</Button>
<MaterialButton variant="contained" color="primary">MUI Button</MaterialButton>
```

**When to use:**

- ✅ You need basic themed components
- ✅ You want components that match your theme colors

**Note:** This library focuses on theming. For extensive component libraries, consider using Material-UI components directly.

---

## 📁 Package Structure

```
@jens-erven/fe-lib/
├── dist/
│   ├── index.js              # Main bundle (ESM)
│   ├── index.cjs             # CommonJS bundle
│   ├── index.d.ts            # TypeScript definitions
│   └── fe-lib.css            # Component styles
│
├── design-system/
│   └── output/
│       ├── theme-ocean/      # Ocean theme tokens
│       │   ├── light/
│       │   │   ├── ts/       # TypeScript tokens
│       │   │   └── css/      # CSS variables
│       │   └── dark/
│       ├── theme-sunset/     # Sunset theme tokens
│       └── theme-forest/     # Forest theme tokens
│       └── tailwind/
│           └── app.css       # Tailwind CSS with all themes
│
└── Package exports:
    ├── @jens-erven/fe-lib                    # Main package
    ├── @jens-erven/fe-lib/styles.css         # Component styles
    ├── @jens-erven/fe-lib/tokens/*/light     # TypeScript tokens
    ├── @jens-erven/fe-lib/tokens/*/dark      # TypeScript tokens
    ├── @jens-erven/fe-lib/css/*/light        # CSS variables
    ├── @jens-erven/fe-lib/css/*/dark         # CSS variables
    └── @jens-erven/fe-lib/css/tailwind       # Tailwind CSS
```

---

## 🎯 Usage Scenarios

### Scenario 1: Corporate Dashboard

**Needs:** Professional look, light/dark mode, minimal setup

**Solution:**

```typescript
import { AppThemeProvider, ThemeSelector, ThemeModeToggle } from '@jens-erven/fe-lib';

<AppThemeProvider defaultTheme="ocean">
  <Dashboard>
    <Sidebar>
      <ThemeSelector size="small" />
      <ThemeModeToggle size="small" />
    </Sidebar>
  </Dashboard>
</AppThemeProvider>
```

**Why:** Ocean theme provides professional blue tones, pre-built components for quick setup.

---

### Scenario 2: Marketing Website

**Needs:** Vibrant colors, custom theme controls, brand-specific styling

**Solution:**

```typescript
import { AppThemeProvider, useAppTheme } from '@jens-erven/fe-lib';

<AppThemeProvider
  defaultTheme="sunset"
  themeExtension={{
    components: {
      MuiButton: {
        styleOverrides: {
          root: { borderRadius: 20 }
        }
      }
    }
  }}
>
  <Website>
    <CustomThemeControls /> {/* Built with useAppTheme() */}
  </Website>
</AppThemeProvider>
```

**Why:** Sunset theme for energetic orange tones, custom controls match brand, easy to extend.

---

### Scenario 3: E-commerce Platform

**Needs:** Natural, calm aesthetics, theme switching, mobile-friendly

**Solution:**

```typescript
import { AppThemeProvider, useAppTheme } from '@jens-erven/fe-lib';
import { IconButton } from '@mui/material';

function ThemeToggle() {
  const { themeName, setTheme } = useAppTheme();
  return (
    <IconButton onClick={() => setTheme(themeName === 'forest' ? 'ocean' : 'forest')}>
      {/* Custom icon */}
    </IconButton>
  );
}
```

**Why:** Forest theme provides calming green tones, custom compact controls for mobile.

---

### Scenario 4: Design System

**Needs:** Export tokens, use in multiple frameworks, CSS-only option

**Solution:**

```typescript
// In React apps
import { themes } from '@jens-erven/fe-lib';

// In Vue/Svelte/Angular apps
import '@jens-erven/fe-lib/css/ocean/light';

// In plain HTML/CSS
<link rel="stylesheet" href="node_modules/@jens-erven/fe-lib/css/ocean/light.css">
```

**Why:** Framework-agnostic CSS variables, raw tokens for any styling solution.

---

### Scenario 5: SaaS Application

**Needs:** User preferences, persistence, settings page

**Solution:**

```typescript
import { AppThemeProvider, useAppTheme } from '@jens-erven/fe-lib';

function SettingsPage() {
  const { themeName, mode, setTheme, setMode } = useAppTheme();

  return (
    <Settings>
      <ThemeSettings
        currentTheme={themeName}
        currentMode={mode}
        onThemeChange={setTheme}
        onModeChange={setMode}
      />
    </Settings>
  );
}
```

**Why:** Built-in localStorage persistence, easy to integrate with settings UI.

---

### Scenario 6: Component Library

**Needs:** Theme-aware components, extend library themes

**Solution:**

```typescript
import { themes } from '@jens-erven/fe-lib';
import { ThemeProvider } from '@mui/material/styles';

// Use in Storybook or component development
<ThemeProvider theme={themes.ocean.light}>
  <YourComponent />
</ThemeProvider>
```

**Why:** Direct theme object access, no provider overhead, easy theme switching in development.

---

## 📚 Documentation

- **[Theme Usage Guide](./THEME-USAGE.md)** - Complete guide with 5 usage scenarios
- **[Design Tokens](./TOKENS.md)** - Using tokens in CSS, TypeScript, and Tailwind
- **[Build Guide](./BUILD-GUIDE.md)** - Build process and token generation
- **[Export Verification](./EXPORT-VERIFICATION.md)** - Package export verification
- **[API Reference](#api-reference)** - Full API documentation below

---

## 📖 API Reference

### AppThemeProvider

```typescript
interface AppThemeProviderProps {
  children: ReactNode;
  defaultTheme?: "ocean" | "sunset" | "forest";
  defaultMode?: "light" | "dark";
  enablePersistence?: boolean;
  storageKey?: string;
  useSystemPreference?: boolean;
  themeExtension?: ThemeOptions;
  disableCssBaseline?: boolean;
}
```

### useAppTheme Hook

```typescript
interface ThemeContextType {
  themeName: "ocean" | "sunset" | "forest";
  mode: "light" | "dark";
  setTheme: (name: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
```

### ThemeSelector Component

```typescript
interface ThemeSelectorProps {
  showLabel?: boolean;
  label?: string;
  size?: "small" | "medium";
  width?: number | string;
  sx?: object;
}
```

### ThemeModeToggle Component

```typescript
interface ThemeModeToggleProps {
  showLabel?: boolean;
  showIcons?: boolean;
  size?: "small" | "medium";
  darkLabel?: string;
  lightLabel?: string;
  sx?: object;
}
```

---

## 🎨 Theme Colors Reference

### Ocean Theme

```typescript
// Light Mode
primary: "#0077be"; // Deep blue
secondary: "#00a896"; // Teal
background: "#f0f8ff"; // Alice blue

// Dark Mode
primary: "#42a5f5"; // Light blue
secondary: "#26d4c1"; // Light teal
background: "#0a1929"; // Dark navy
```

### Sunset Theme

```typescript
// Light Mode
primary: "#ff6b35"; // Coral orange
secondary: "#f7931e"; // Bright orange
background: "#fff8f0"; // Warm white

// Dark Mode
primary: "#ff8a65"; // Light coral
secondary: "#ffb74d"; // Light orange
background: "#1a1410"; // Dark brown
```

### Forest Theme

```typescript
// Light Mode
primary: "#2d6a4f"; // Forest green
secondary: "#52b788"; // Mint green
background: "#f1f8f4"; // Light mint

// Dark Mode
primary: "#52b788"; // Light green
secondary: "#74c69d"; // Pale green
background: "#081c15"; // Dark forest
```

---

## 💡 Best Practices

### 1. **Use AppThemeProvider at the Root**

```typescript
// ✅ Good
<AppThemeProvider>
  <App />
</AppThemeProvider>

// ❌ Bad
<App>
  <AppThemeProvider>
    <SomeComponent />
  </AppThemeProvider>
</App>
```

### 2. **Access Theme via MUI useTheme Hook**

```typescript
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.palette.primary.main }} />;
}
```

### 3. **Extend Themes, Don't Override**

```typescript
// ✅ Good - Extends base theme
<AppThemeProvider themeExtension={{ /* overrides */ }} />

// ❌ Bad - Creates theme confusion
const myTheme = createTheme({ /* completely new */ });
```

### 4. **Use CSS Variables for Non-React Code**

```typescript
// ✅ Good - CSS variables work everywhere
.my-class {
  color: var(--primary);
}

// ❌ Bad - Token imports only work in JS
import { primary } from 'tokens'; // In CSS file
```

---

## 🔧 TypeScript Support

Full TypeScript support with type definitions included:

```typescript
import type {
  ThemeName,
  ThemeMode,
  ThemeContextType,
  AppThemeProviderProps,
  ThemeSelectorProps,
  ThemeModeToggleProps,
} from "@jens-erven/fe-lib";
```

---

## 🌐 Framework Support

| Framework        | Support     | Notes             |
| ---------------- | ----------- | ----------------- |
| React            | ✅ Full     | Primary target    |
| Next.js          | ✅ Full     | SSR safe          |
| Vite             | ✅ Full     | Recommended       |
| Create React App | ✅ Full     | Works out of box  |
| Remix            | ✅ Full     | SSR safe          |
| Vue              | ⚠️ CSS only | Use CSS variables |
| Svelte           | ⚠️ CSS only | Use CSS variables |
| Angular          | ⚠️ CSS only | Use CSS variables |

---

## 📦 Bundle Size

| Import                | Size (gzipped) |
| --------------------- | -------------- |
| Full library          | ~13 KB         |
| AppThemeProvider only | ~8 KB          |
| Themes only           | ~6 KB          |
| Single theme          | ~1 KB          |

---

## 🛠️ Development & Build Process

### Quick Commands

```bash
# Install dependencies
npm install

# Build everything (tokens + library)
npm run build

# Run Storybook
npm run storybook

# Build Storybook
npm run build-storybook

# Create package for testing
npm pack
```

---

## 🔧 Build Process & Token Generation

### When to Run the Build

Run `npm run build` when:

- ✅ You receive a new `tokens-export.json` from Figma
- ✅ Design tokens have been updated (colors, spacing, typography)
- ✅ New themes have been added
- ✅ Component source code changes

### Build Pipeline (5 Steps)

The `npm run build` command executes these steps automatically:

#### 1. **Flatten Tokens** (`flatten:tokens`)

- **Input:** `design-system/tokens-export.json` (from Figma)
- **Output:** `design-system/output/tokens-flattened.json`
- **Purpose:** Converts Figma's nested structure to simplified JSON

#### 2. **Generate CSS & TypeScript** (`build:variables`)

- **Tool:** Style Dictionary
- **Output:**
  - `design-system/output/theme-*/light/css/tokens.css`
  - `design-system/output/theme-*/dark/css/tokens.css`
  - `design-system/output/theme-*/light/ts/tokens.ts`
  - `design-system/output/theme-*/dark/ts/tokens.ts`
- **Purpose:** Creates CSS variables and TypeScript constants from tokens

#### 3. **Generate Tailwind CSS** (`build:tailwind`)

- **Output:** `design-system/output/tailwind/app.css`
- **Purpose:** Creates Tailwind v4 compatible CSS with theme classes

#### 4. **TypeScript Compilation** (`tsc`)

- **Output:** `dist/index.d.ts`
- **Purpose:** Generates type definitions for consuming applications

#### 5. **Bundle Library** (`vite build`)

- **Output:**
  - `dist/index.js` (ES Module)
  - `dist/index.cjs` (CommonJS)
  - `dist/fe-lib.css` (Component styles)
- **Purpose:** Creates distributable npm package

### Generated Outputs

After building, consuming applications can use:

```typescript
// 1. TypeScript Tokens
import * as oceanLight from "@jens-erven/fe-lib/tokens/ocean/light";

// 2. CSS Variables
import "@jens-erven/fe-lib/css/ocean/light";

// 3. Tailwind CSS
import "@jens-erven/fe-lib/css/tailwind";

// 4. Material-UI Themes
import { oceanLightTheme } from "@jens-erven/fe-lib";

// 5. Provider & Components
import { AppThemeProvider, ThemeSelector } from "@jens-erven/fe-lib";
```

### Workflow: Updating Design Tokens

```bash
# 1. Export from Figma
# Save as: library/design-system/tokens-export.json

# 2. Build everything
cd library
npm run build

# 3. Test in Storybook
npm run storybook

# 4. Test in consuming app
npm pack
cd ../consuming-app
npm install ../library/jens-erven-fe-lib-0.0.1.tgz

# 5. Publish to npm (when ready)
npm version patch
npm publish --access public
```

### File Structure After Build

```
library/
├── design-system/
│   ├── tokens-export.json          ← SOURCE (from Figma)
│   └── output/                     ← GENERATED
│       ├── tokens-flattened.json
│       ├── theme-ocean/
│       │   ├── light/
│       │   │   ├── css/tokens.css
│       │   │   └── ts/tokens.ts + .d.ts
│       │   └── dark/
│       ├── theme-sunset/
│       ├── theme-forest/
│       └── tailwind/app.css
├── src/                            ← SOURCE
│   ├── components/
│   ├── themes/index.ts
│   └── providers/ThemeProvider.tsx
└── dist/                           ← GENERATED
    ├── index.js
    ├── index.cjs
    ├── index.d.ts
    └── fe-lib.css
```

### Individual Build Steps (Advanced)

```bash
# Run steps individually if needed
npm run flatten:tokens        # Step 1
npm run build:variables       # Step 2
npm run build:tailwind        # Step 3
tsc && vite build            # Steps 4 & 5
```

### Troubleshooting

**Build fails?**

```bash
# Install dependencies
npm install -D style-dictionary

# Clear output and rebuild
rm -rf design-system/output dist
npm run build
```

**TypeScript errors in consuming app?**

- CSS import errors are expected and safe to ignore
- Vite handles CSS imports at runtime
- Optionally add type declaration: `declare module '@jens-erven/fe-lib/css/*';`

---

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](./CONTRIBUTING.md) for details.

---

## 📄 License

MIT © [Jens Erven](https://github.com/jens-erven)

---

## 📚 Documentation

- **[Theme Usage Guide](./THEME-USAGE.md)** - Complete guide with 5 usage scenarios
- **[Design Tokens](./TOKENS.md)** - Using tokens in CSS, TypeScript, and Tailwind
- **[Build Guide](./BUILD-GUIDE.md)** - Detailed build process and token generation
- **[Export Verification](./EXPORT-VERIFICATION.md)** - Package export verification

---

## 🔗 Links

- [GitHub Repository](https://github.com/jens-erven/fe-lib)
- [NPM Package](https://www.npmjs.com/package/@jens-erven/fe-lib)
- [Report Issues](https://github.com/jens-erven/fe-lib/issues)

---

**Made with ❤️ by Jens Erven**
