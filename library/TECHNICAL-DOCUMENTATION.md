# Frontend Library (@portima/fe-lib) - Technical Foundation Documentation

## 📋 Executive Summary

The `@portima/fe-lib` package is a comprehensive React component library that provides a **single source of truth** for design tokens, themes, and reusable UI components across all frontend applications. It bridges the gap between design (Figma) and development by automatically generating themes, TypeScript tokens, CSS variables, and Tailwind utilities from design tokens.

**Key Feature:** Pre-configured Material-UI themes with a custom `AppThemeProvider` wrapper that includes theme state management, localStorage persistence, system preference detection, and a React hook for programmatic theme control.

---

## 🎯 Purpose & Benefits

### Why This Package Exists

1. **Design-Development Consistency**
   - Ensures design tokens from Figma are accurately reflected in code
   - Eliminates manual translation of design values
   - Maintains pixel-perfect consistency across all applications

2. **Single Source of Truth**
   - All colors, spacing, typography defined once in Figma
   - Exported as JSON and automatically transformed into usable formats
   - Changes in Figma propagate to all applications through a rebuild

3. **Material-UI Integration**
   - **10 pre-built MUI themes** (5 themes × 2 modes) ready to use
   - **AppThemeProvider** - Custom wrapper around MUI's ThemeProvider with additional features:
     - Automatic localStorage persistence
     - System dark mode preference detection
     - Theme state management via React Context
     - `useAppTheme()` hook for programmatic control
   - Works seamlessly with all Material-UI components

4. **Developer Experience**
   - Pre-built themes ready to use
   - Type-safe tokens with TypeScript
   - Multiple consumption patterns (React, CSS, Tailwind)
   - Automatic light/dark mode support
   - Easy theme switching without prop drilling

5. **Scalability**
   - Easy to add new themes
   - Centralized component library
   - Consistent theming across multiple applications
   - Reduces code duplication

---

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         FIGMA                                │
│              (Design System - Single Source)                 │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Export Tokens
                      ▼
┌─────────────────────────────────────────────────────────────┐
│              tokens-export.json                              │
│        (Raw design tokens from Figma)                        │
│    • 5 Themes (Amsterdam, Barcelona, Berlin, etc.)          │
│    • Light/Dark modes                                        │
│    • Colors, spacing, typography                            │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      │ Build Process (npm run build)
                      │
        ┌─────────────┴─────────────┐
        │                           │
        ▼                           ▼
┌───────────────┐         ┌───────────────────┐
│  Flatten      │         │  Style Dictionary │
│  Tokens       │────────▶│  (Token Builder)  │
│               │         │                   │
└───────────────┘         └─────────┬─────────┘
                                    │
                    ┌───────────────┼───────────────┐
                    │               │               │
                    ▼               ▼               ▼
          ┌─────────────┐  ┌──────────────┐  ┌────────────┐
          │ TypeScript  │  │  CSS         │  │ Tailwind   │
          │ Tokens      │  │  Variables   │  │ CSS        │
          │ (.ts)       │  │  (.css)      │  │ (app.css)  │
          └──────┬──────┘  └──────┬───────┘  └─────┬──────┘
                 │                │                 │
                 └────────────────┼─────────────────┘
                                  │
                                  ▼
                    ┌──────────────────────────┐
                    │  Material-UI Themes      │
                    │  (createTheme objects)   │
                    │  • 10 complete themes    │
                    │  • MUI palette mapped    │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │  AppThemeProvider        │
                    │  • Wraps MUI ThemeProvider│
                    │  • React Context         │
                    │  • localStorage          │
                    │  • System preferences    │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │  React Components        │
                    │  • useAppTheme() hook    │
                    │  • ThemeSelector         │
                    │  • ThemeModeToggle       │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │   NPM Package            │
                    │   @portima/fe-lib        │
                    └────────────┬─────────────┘
                                 │
                                 ▼
                    ┌──────────────────────────┐
                    │  Consuming Applications  │
                    │  • All MUI components    │
                    │  • Automatic theming     │
                    └──────────────────────────┘
```

---

## 📦 Package Contents

### What Developers Get When They Install

| Asset Type             | Count    | Import Path                             | Use Case                                        |
| ---------------------- | -------- | --------------------------------------- | ----------------------------------------------- |
| **React Provider**     | 1        | `@portima/fe-lib`                       | MUI ThemeProvider wrapper with state management |
| **React Hook**         | 1        | `@portima/fe-lib`                       | `useAppTheme()` - Theme state & controls        |
| **React Components**   | 2        | `@portima/fe-lib`                       | ThemeSelector, ThemeModeToggle                  |
| **TypeScript Types**   | 4+       | `@portima/fe-lib`                       | ThemeName, ThemeMode, etc.                      |
| **Material-UI Themes** | 10       | `@portima/fe-lib`                       | Pre-configured MUI theme objects                |
| **TypeScript Tokens**  | 10 files | `@portima/fe-lib/tokens/{theme}/{mode}` | Raw token values in JS/TS                       |
| **CSS Variables**      | 10 files | `@portima/fe-lib/css/{theme}/{mode}`    | Framework-agnostic styling                      |
| **Tailwind CSS**       | 1 file   | `@portima/fe-lib/css/tailwind`          | Utility-first CSS                               |
| **Component Styles**   | 1 file   | `@portima/fe-lib/styles.css`            | Library component styles                        |

**Total: 5 Themes × 2 Modes = 10 Complete Theme Configurations**

---

## 🎨 Material-UI Theme Integration

### Pre-Built MUI Themes

The package provides **10 complete Material-UI theme objects** that are automatically generated from design tokens:

```typescript
import {
  amsterdamLightTheme,
  amsterdamDarkTheme,
  barcelonaLightTheme,
  barcelonaDarkTheme,
  berlinLightTheme,
  berlinDarkTheme,
  lisbonLightTheme,
  lisbonDarkTheme,
  londonLightTheme,
  londonDarkTheme,
  allThemes, // Combined object with all themes
} from "@portima/fe-lib";
```

Each theme is created using MUI's `createTheme()` with design tokens mapped to the MUI palette:

```typescript
// Example: Amsterdam Light Theme
{
  palette: {
    mode: 'light',
    primary: {
      main: '#009996',      // From design tokens
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#FAD600',
      contrastText: '#000000'
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5'
    },
    text: {
      primary: '#000000',
      secondary: '#666666'
    },
    error: { main: '#d32f2f' },
    warning: { main: '#ed6c02' },
    info: { main: '#0288d1' },
    success: { main: '#2e7d32' }
  },
  spacing: 8,  // From design tokens
  shape: {
    borderRadius: 4  // From design tokens
  }
}
```

### AppThemeProvider - Enhanced MUI ThemeProvider

The `AppThemeProvider` component wraps Material-UI's `ThemeProvider` and adds powerful theme management features:

#### Features:

1. **Theme State Management**
   - React Context-based state
   - Manages current theme name and mode
   - Provides functions to change theme/mode

2. **localStorage Persistence**
   - Automatically saves theme preferences
   - Restores on page reload
   - Configurable storage key

3. **System Preference Detection**
   - Detects OS dark mode preference
   - Auto-switches to dark mode if preferred
   - Can be disabled if needed

4. **Type Safety**
   - Full TypeScript support
   - Theme names are typed literals
   - Prevents invalid theme names

#### Usage:

```typescript
import { AppThemeProvider } from '@portima/fe-lib';
import '@portima/fe-lib/styles.css';

function App() {
  return (
    <AppThemeProvider
      defaultTheme="amsterdam"
      defaultMode="light"
      enablePersistence={true}
      useSystemPreference={true}
    >
      <YourApp />
    </AppThemeProvider>
  );
}
```

**Props:**

```typescript
interface AppThemeProviderProps {
  children: ReactNode;
  defaultTheme?: "amsterdam" | "barcelona" | "berlin" | "lisbon" | "london";
  defaultMode?: "light" | "dark";
  enablePersistence?: boolean; // Default: true
  storageKey?: string; // Default: 'app-theme-preference'
  useSystemPreference?: boolean; // Default: true
  themeExtension?: ThemeOptions; // Extend MUI theme
  disableCssBaseline?: boolean; // Default: false
}
```

### useAppTheme Hook

Programmatic access to theme state and controls:

```typescript
import { useAppTheme } from '@portima/fe-lib';

function CustomThemeControl() {
  const { themeName, mode, setTheme, setMode, toggleMode } = useAppTheme();

  return (
    <div>
      <p>Current: {themeName} ({mode})</p>
      <button onClick={() => setTheme('barcelona')}>
        Switch to Barcelona
      </button>
      <button onClick={toggleMode}>
        Toggle Light/Dark
      </button>
    </div>
  );
}
```

**Hook Return Type:**

```typescript
interface ThemeContextType {
  themeName: "amsterdam" | "barcelona" | "berlin" | "lisbon" | "london";
  mode: "light" | "dark";
  setTheme: (name: ThemeName) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}
```

### All Material-UI Components Automatically Themed

Once wrapped with `AppThemeProvider`, **all Material-UI components automatically use the active theme**:

```typescript
import { Button, TextField, Card, AppBar } from '@mui/material';

function MyComponent() {
  // All these components automatically use the active theme
  return (
    <>
      <AppBar color="primary">
        {/* Uses theme's primary color */}
      </AppBar>

      <Button variant="contained" color="secondary">
        {/* Uses theme's secondary color */}
      </Button>

      <TextField
        label="Email"
        color="primary"
        {/* Uses theme colors for input */}
      />

      <Card>
        {/* Uses theme's background.paper */}
      </Card>
    </>
  );
}
```

---

## 🔄 Build Process - From Figma to Code

### Step-by-Step Token Generation

#### 1️⃣ **Design Token Export** (Manual - Designer)

```bash
# In Figma: Plugins → Export Design Tokens
# Output: library/design-system/tokens-export.json
```

**What it contains:**

```json
{
  "theme-amsterdam": {
    "modes": {
      "light": {
        "primary": { "$value": "#009996", "$type": "color" },
        "secondary": { "$value": "#FAD600", "$type": "color" },
        "background-default": { "$value": "#ffffff", "$type": "color" }
      },
      "dark": {
        "primary": { "$value": "#26d4c1", "$type": "color" },
        "secondary": { "$value": "#FFE74C", "$type": "color" }
      }
    }
  }
  // ... 4 more themes
}
```

#### 2️⃣ **Flatten Tokens** (`npm run flatten:tokens`)

```bash
node ./design-system/scripts/flatten-tokens.js
```

**Input:** `tokens-export.json` (nested Figma structure)  
**Output:** `tokens-flattened.json` (simplified structure)  
**Purpose:** Transforms Figma's nested format into a flat structure for Style Dictionary

#### 3️⃣ **Generate TypeScript & CSS** (`npm run build:variables`)

```bash
node ./design-system/scripts/build-multi-themes.js
```

**Tool:** Style Dictionary  
**Output:**

```
design-system/output/
├── theme-amsterdam/
│   ├── light/
│   │   ├── ts/tokens.ts        # TypeScript constants
│   │   └── css/tokens.css      # CSS variables
│   └── dark/
│       ├── ts/tokens.ts
│       └── css/tokens.css
├── theme-barcelona/
├── theme-berlin/
├── theme-lisbon/
└── theme-london/
```

#### 4️⃣ **Generate Tailwind CSS** (`npm run build:tailwind`)

```bash
node ./design-system/scripts/build-tailwind-css.js
```

**Output:**

```
design-system/output/tailwind/
├── app.css                    # Main file (imports all themes)
├── theme-amsterdam.css        # Amsterdam light + dark
├── theme-barcelona.css
├── theme-berlin.css
├── theme-lisbon.css
└── theme-london.css
```

#### 5️⃣ **Generate Material-UI Themes** (`npm run build:mui-themes`)

```bash
node ./design-system/scripts/build-mui-themes.js
```

**Purpose:** Automatically generates `src/themes/index.ts` with all Material-UI theme objects

**How it works:**

1. Reads `tokens-flattened.json` to detect all available themes
2. Creates the `src/themes/` directory if it doesn't exist
3. Generates complete TypeScript file with:
   - Imports for all theme token files (light & dark)
   - `createThemeFromTokens()` helper function
   - Individual theme exports (e.g., `amsterdamLightTheme`, `barcelonaDarkTheme`)
   - Structured `themes` object for dynamic switching
   - Flat `allThemes` object for Storybook
   - TypeScript types (`ThemeName`, `ThemeMode`)
   - Usage documentation in JSDoc comments

**Output:** `src/themes/index.ts` (auto-generated, do not edit manually)

**Example generated code:**

```typescript
// ⚠️ AUTO-GENERATED FILE - DO NOT EDIT MANUALLY
// This file is automatically generated by design-system/scripts/build-mui-themes.js

import { createTheme } from "@mui/material/styles";
import * as amsterdamLight from "../../design-system/output/theme-amsterdam/light/ts/tokens";
import * as amsterdamDark from "../../design-system/output/theme-amsterdam/dark/ts/tokens";
// ... imports for all themes

const createThemeFromTokens = (tokens: any, mode: "light" | "dark") => {
  return createTheme({
    palette: {
      mode,
      primary: { main: tokens.primary, contrastText: tokens.primaryContrast },
      secondary: {
        main: tokens.secondary,
        contrastText: tokens.secondaryContrast,
      },
      background: {
        default: tokens.backgroundDefault,
        paper: tokens.backgroundPaper,
      },
      text: { primary: tokens.textPrimary, secondary: tokens.textSecondary },
      error: { main: tokens.error },
      warning: { main: tokens.warning },
      info: { main: tokens.info },
      success: { main: tokens.success },
    },
    spacing: parseInt(tokens.spacingUnit),
    shape: { borderRadius: parseInt(tokens.borderRadius) },
  });
};

export const amsterdamLightTheme = createThemeFromTokens(
  amsterdamLight,
  "light"
);
export const amsterdamDarkTheme = createThemeFromTokens(amsterdamDark, "dark");
// ... exports for all themes

export const themes = {
  amsterdam: { light: amsterdamLightTheme, dark: amsterdamDarkTheme },
  // ... all other themes
};

export type ThemeName =
  | "amsterdam"
  | "barcelona"
  | "berlin"
  | "lisbon"
  | "london";
export type ThemeMode = "light" | "dark";
```

**Key Benefits:**

- ✅ **Automatic theme detection** - No manual configuration needed when adding new themes
- ✅ **Zero maintenance** - Adding a theme to Figma automatically includes it in the build
- ✅ **Type safety** - TypeScript types are generated dynamically
- ✅ **Documentation included** - JSDoc comments with usage examples are auto-generated

#### 6️⃣ **Compile & Bundle** (`tsc && vite build`)

```bash
tsc                    # Generate TypeScript definitions
vite build             # Bundle library with Vite
```

**Output:**

```
dist/
├── index.js           # ES Module
├── index.cjs          # CommonJS
├── index.d.ts         # TypeScript types
└── fe-lib.css         # Component styles
```

---

## 📂 File Structure

```
@portima/fe-lib/
│
├── design-system/
│   ├── tokens-export.json              ← SOURCE: Figma export
│   ├── scripts/
│   │   ├── flatten-tokens.js           # Step 1: Flatten
│   │   ├── build-multi-themes.js       # Step 2: Style Dictionary
│   │   └── build-tailwind-css.js       # Step 3: Tailwind generation
│   └── output/                         ← GENERATED (Do not edit!)
│       ├── tokens-flattened.json
│       ├── theme-amsterdam/
│       │   ├── light/
│       │   │   ├── ts/tokens.ts
│       │   │   └── css/tokens.css
│       │   └── dark/
│       ├── theme-barcelona/
│       ├── theme-berlin/
│       ├── theme-lisbon/
│       ├── theme-london/
│       └── tailwind/
│           ├── app.css
│           ├── theme-amsterdam.css
│           └── ...
│
├── src/                                ← SOURCE: React components
│   ├── index.ts                        # Main exports
│   ├── styles.css                      # Component styles
│   ├── components/
│   │   ├── ThemeSelector/
│   │   ├── ThemeModeToggle/
│   │   └── ProfileCard/
│   ├── providers/
│   │   └── ThemeProvider.tsx           # AppThemeProvider + useAppTheme
│   └── themes/
│       └── index.ts                    # MUI theme objects
│
├── dist/                               ← GENERATED: Build output
│   ├── index.js                        # Bundled library
│   ├── index.cjs
│   ├── index.d.ts                      # TypeScript types
│   └── fe-lib.css
│
└── package.json                        # Package configuration
```

---

## 🔌 Package Exports Configuration

### `package.json` Exports Map

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs"
    },
    "./tokens/amsterdam/light": "./design-system/output/theme-amsterdam/light/ts/tokens.ts",
    "./tokens/amsterdam/dark": "./design-system/output/theme-amsterdam/dark/ts/tokens.ts",
    "./tokens/barcelona/light": "./design-system/output/theme-barcelona/light/ts/tokens.ts",
    "./tokens/barcelona/dark": "./design-system/output/theme-barcelona/dark/ts/tokens.ts",
    "./tokens/berlin/light": "./design-system/output/theme-berlin/light/ts/tokens.ts",
    "./tokens/berlin/dark": "./design-system/output/theme-berlin/dark/ts/tokens.ts",
    "./tokens/lisbon/light": "./design-system/output/theme-lisbon/light/ts/tokens.ts",
    "./tokens/lisbon/dark": "./design-system/output/theme-lisbon/dark/ts/tokens.ts",
    "./tokens/london/light": "./design-system/output/theme-london/light/ts/tokens.ts",
    "./tokens/london/dark": "./design-system/output/theme-london/dark/ts/tokens.ts",
    "./css/amsterdam/light": "./design-system/output/theme-amsterdam/light/css/tokens.css",
    "./css/amsterdam/dark": "./design-system/output/theme-amsterdam/dark/css/tokens.css",
    "./css/barcelona/light": "./design-system/output/theme-barcelona/light/css/tokens.css",
    "./css/barcelona/dark": "./design-system/output/theme-barcelona/dark/css/tokens.css",
    "./css/berlin/light": "./design-system/output/theme-berlin/light/css/tokens.css",
    "./css/berlin/dark": "./design-system/output/theme-berlin/dark/css/tokens.css",
    "./css/lisbon/light": "./design-system/output/theme-lisbon/light/css/tokens.css",
    "./css/lisbon/dark": "./design-system/output/theme-lisbon/dark/css/tokens.css",
    "./css/london/light": "./design-system/output/theme-london/light/css/tokens.css",
    "./css/london/dark": "./design-system/output/theme-london/dark/css/tokens.css",
    "./css/tailwind": "./design-system/output/tailwind/app.css",
    "./styles.css": "./dist/fe-lib.css"
  }
}
```

---

## 💻 Usage Examples

### 1. Full React Integration with Material-UI (Recommended)

```typescript
// main.tsx
import { AppThemeProvider } from '@portima/fe-lib';
import '@portima/fe-lib/styles.css';

function App() {
  return (
    <AppThemeProvider defaultTheme="amsterdam" defaultMode="light">
      <YourApp />
    </AppThemeProvider>
  );
}
```

```typescript
// Header.tsx
import { ThemeSelector, ThemeModeToggle } from '@portima/fe-lib';
import { AppBar, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <ThemeSelector />
        <ThemeModeToggle />
      </Toolbar>
    </AppBar>
  );
}
```

```typescript
// Any component - MUI components automatically themed
import { Button, Card, CardContent } from '@mui/material';

function MyComponent() {
  return (
    <Card>
      <CardContent>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
      </CardContent>
    </Card>
  );
}
```

### 2. Custom Theme Controls with useAppTheme Hook

```typescript
import { useAppTheme } from '@portima/fe-lib';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { Palette } from '@mui/icons-material';

function CustomThemeControl() {
  const { themeName, mode, setTheme, toggleMode } = useAppTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Palette />
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)}>
        <MenuItem onClick={() => setTheme('amsterdam')}>Amsterdam</MenuItem>
        <MenuItem onClick={() => setTheme('barcelona')}>Barcelona</MenuItem>
        <MenuItem onClick={() => setTheme('berlin')}>Berlin</MenuItem>
        <MenuItem onClick={() => setTheme('lisbon')}>Lisbon</MenuItem>
        <MenuItem onClick={() => setTheme('london')}>London</MenuItem>
        <MenuItem onClick={toggleMode}>
          Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
        </MenuItem>
      </Menu>
    </>
  );
}
```

### 3. Direct Material-UI Theme Usage (Without Provider)

```typescript
import { ThemeProvider } from '@mui/material';
import { amsterdamLightTheme, barcelonaDarkTheme } from '@portima/fe-lib';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeProvider theme={isDark ? barcelonaDarkTheme : amsterdamLightTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### 4. TypeScript Tokens (styled-components)

```typescript
import * as amsterdamLight from "@portima/fe-lib/tokens/amsterdam/light";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${amsterdamLight.primary};
  color: ${amsterdamLight.primaryContrast};
  padding: ${amsterdamLight.spacingUnit}px;
  border-radius: ${amsterdamLight.borderRadius}px;
`;
```

### 5. CSS Variables (Vanilla CSS)

```typescript
// Import CSS
import "@portima/fe-lib/css/amsterdam/light";
```

```css
/* styles.css */
.my-button {
  background-color: var(--primary);
  color: var(--primary-contrast);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
}
```

### 6. Tailwind CSS Integration

```typescript
// main.tsx
import "@portima/fe-lib/css/tailwind";
```

```tsx
// Component.tsx
function Card() {
  return (
    <div className="theme-amsterdam">
      <div className="bg-primary text-primary-contrast p-4 rounded">
        Amsterdam Theme Card
      </div>
    </div>
  );
}

function DarkCard() {
  return (
    <div className="theme-barcelona dark">
      <div className="bg-secondary text-secondary-contrast p-4">
        Barcelona Dark Mode
      </div>
    </div>
  );
}
```

---

## 🔄 Workflow: Updating Design Tokens

### When Designer Makes Changes

```
Designer updates Figma
        ↓
Export tokens-export.json
        ↓
Replace in library/design-system/
        ↓
npm run build
        ↓
Test in Storybook
        ↓
npm version patch
        ↓
npm publish
        ↓
Apps install new version
        ↓
Updated themes everywhere
```

### Commands

```bash
# 1. Designer exports from Figma
# Save to: library/design-system/tokens-export.json

# 2. Developer runs build
cd library
npm run build

# 3. Test changes
npm run storybook

# 4. Package for local testing
npm pack
# Creates: portima-fe-lib-0.0.1.tgz

# 5. Test in consuming app
cd ../consuming-app
npm install ../library/portima-fe-lib-0.0.1.tgz

# 6. Publish to NPM (when ready)
cd ../library
npm version patch
npm publish --access public

# 7. Install in all apps
npm install @portima/fe-lib@latest
```

---

## 🎨 Theme System

### 5 Brio Themes

| Theme         | Primary Color    | Secondary Color  | Use Case             |
| ------------- | ---------------- | ---------------- | -------------------- |
| **Amsterdam** | Teal (#009996)   | Yellow (#FAD600) | Professional, modern |
| **Barcelona** | Purple (#8B5CF6) | Pink (#EC4899)   | Creative, vibrant    |
| **Berlin**    | Gray (#6B7280)   | Blue (#3B82F6)   | Elegant, minimalist  |
| **Lisbon**    | Orange (#F97316) | Red (#EF4444)    | Warm, energetic      |
| **London**    | Blue (#3B82F6)   | Green (#10B981)  | Classic, trustworthy |

Each theme includes:

- ✅ Light mode
- ✅ Dark mode
- ✅ Complete color palette (primary, secondary, background, text)
- ✅ Semantic colors (error, warning, info, success)
- ✅ Spacing system (8px base unit)
- ✅ Typography tokens
- ✅ Border radius tokens
- ✅ **Pre-configured Material-UI theme object**
- ✅ **TypeScript tokens**
- ✅ **CSS variables**
- ✅ **Tailwind classes**

---

## 🛠️ Technologies Used

| Technology            | Purpose                     | Version  |
| --------------------- | --------------------------- | -------- |
| **React**             | Component library framework | ^19.0.0  |
| **TypeScript**        | Type safety                 | ^5.7.0   |
| **Material-UI (MUI)** | UI component foundation     | ^7.3.6   |
| **Emotion**           | CSS-in-JS styling for MUI   | ^11.14.0 |
| **Style Dictionary**  | Token transformation        | ^5.1.1   |
| **Tailwind CSS**      | Utility-first CSS           | v4.0     |
| **Vite**              | Build tool                  | ^7.3.0   |
| **Storybook**         | Component documentation     | ^8.5.0   |

---

## 📊 Benefits Summary

### For Designers

- ✅ Design changes automatically propagate to code
- ✅ No manual handoff errors
- ✅ See components in Storybook with real themes
- ✅ All Material-UI components use design tokens

### For Developers

- ✅ Type-safe tokens and theme names
- ✅ Multiple consumption patterns (React, CSS, Tailwind)
- ✅ Auto-complete in IDEs
- ✅ Consistent theming across all apps
- ✅ No hardcoded color values
- ✅ **All Material-UI components automatically themed**
- ✅ **Theme switching without prop drilling**
- ✅ **Built-in localStorage persistence**
- ✅ **System dark mode detection**

### For Organizations

- ✅ Single source of truth
- ✅ Faster development
- ✅ Consistent brand identity
- ✅ Easy to scale (add new themes/apps)
- ✅ Reduced maintenance burden
- ✅ **Standardized Material-UI implementation**

---

## 🚀 Future Enhancements

1. **More Components**
   - Add common UI components (buttons, inputs, cards)
   - Expand component library based on usage patterns
   - More Material-UI component wrappers

2. **More Themes**
   - Add city-specific themes as needed
   - Brand-specific theme variations
   - User-generated themes

3. **Advanced Features**
   - Dynamic theme generation
   - Theme editor UI
   - A/B testing different themes
   - Theme analytics

4. **Automation**
   - Figma plugin for automatic token sync
   - CI/CD pipeline for automated publishing
   - Visual regression testing
   - Automatic Storybook deployment

---

## 📝 Conclusion

The `@portima/fe-lib` package provides a **robust, scalable foundation** for frontend development by:

1. **Bridging design and development** through automated token generation
2. **Providing complete Material-UI integration** with pre-built themes and an enhanced ThemeProvider
3. **Offering flexibility** with multiple consumption patterns (React/MUI, CSS, Tailwind)
4. **Ensuring consistency** across all applications with a single source of truth
5. **Reducing manual work** through automation and built-in features (localStorage, system preferences)
6. **Maintaining quality** with TypeScript and type safety

**Key Material-UI Benefits:**

- **10 pre-configured MUI themes** ready to use out of the box
- **AppThemeProvider** wraps MUI's ThemeProvider with state management, persistence, and system preference detection
- **useAppTheme() hook** for programmatic theme control without prop drilling
- **Automatic theming** for all Material-UI components
- **Type-safe theme switching** with TypeScript

This architecture ensures that design decisions made in Figma are accurately and efficiently translated into production code, maintaining consistency and quality across the entire product ecosystem while providing developers with a powerful, easy-to-use Material-UI theming system.
