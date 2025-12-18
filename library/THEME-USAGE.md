# Theme Usage Guide

Complete guide for using themes with `@portima/fe-lib` - from quick setup to advanced customization.

---

## 📦 Installation

```bash
npm install @portima/fe-lib @mui/material @emotion/react @emotion/styled
```

---

## 🚀 Quick Start (2 minutes)

```typescript
import { AppThemeProvider, ThemeSelector, ThemeModeToggle } from '@portima/fe-lib';

function App() {
  return (
    <AppThemeProvider>
      <header>
        <ThemeSelector />
        <ThemeModeToggle />
      </header>
      <YourApp />
    </AppThemeProvider>
  );
}
```

**Done!** You now have:

- ✅ 5 themes (Amsterdam, Barcelona, Berlin, Lisbon, London)
- ✅ Light/Dark modes
- ✅ Auto localStorage persistence
- ✅ System dark mode detection

---

## 📚 Usage Scenarios

Choose the approach that fits your needs:

| Scenario                       | Best Solution                                      | Complexity      |
| ------------------------------ | -------------------------------------------------- | --------------- |
| Quick setup with pre-built UI  | [Scenario 1](#scenario-1-use-pre-built-components) | ⭐ Easy         |
| Custom theme controls          | [Scenario 2](#scenario-2-build-custom-controls)    | ⭐⭐ Medium     |
| Brand-specific styling         | [Scenario 3](#scenario-3-customize-theme-styles)   | ⭐⭐ Medium     |
| Full control over theming      | [Scenario 4](#scenario-4-manual-theme-control)     | ⭐⭐⭐ Advanced |
| CSS-only (no React components) | [Scenario 5](#scenario-5-css-variables-only)       | ⭐⭐ Medium     |

---

## Scenario 1: Use Pre-Built Components

**When to use:** You want theme switching with minimal code.

**What you get:** Ready-to-use dropdown and toggle components.

**When to use:** You want theme switching with minimal code.

**What you get:** Ready-to-use dropdown and toggle components.

### Basic Setup

```typescript
import {
  AppThemeProvider,
  ThemeSelector,
  ThemeModeToggle
} from '@portima/fe-lib';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

function App() {
  return (
    <AppThemeProvider defaultTheme="amsterdam" defaultMode="light">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Stack direction="row" spacing={2}>
            <ThemeSelector size="small" />
            <ThemeModeToggle size="small" />
          </Stack>
        </Toolbar>
      </AppBar>
      <YourMainContent />
    </AppThemeProvider>
  );
}
```

### Component Options

```typescript
// Theme Selector
<ThemeSelector
  size="small"              // 'small' | 'medium'
  width={120}               // Custom width
  showLabel={true}          // Show "Theme" label
  label="Color Theme"       // Custom label
/>

// Mode Toggle
<ThemeModeToggle
  size="small"              // 'small' | 'medium'
  showLabel={true}          // Show mode label
  showIcons={true}          // Show ☀️/🌙 icons
  darkLabel="Dark Mode"     // Custom labels
  lightLabel="Light Mode"
/>
```

### Provider Options

```typescript
<AppThemeProvider
  defaultTheme="amsterdam"          // 'amsterdam' | 'barcelona' | 'berlin' | 'lisbon' | 'london'
  defaultMode="light"               // 'light' | 'dark'
  enablePersistence={true}          // Save to localStorage
  useSystemPreference={true}        // Detect OS dark mode
  storageKey="my-app-theme"         // Custom localStorage key
  disableCssBaseline={false}        // Keep MUI baseline styles
>
  <App />
</AppThemeProvider>
```

**✅ Perfect for:** Quick prototypes, MVPs, apps that don't need custom theme UI.

---

## Scenario 2: Build Custom Controls

**When to use:** You want custom theme controls that match your design.

**What you get:** Access to theme state via React hook, build any UI you want.

### Setup

```typescript
import { AppThemeProvider, useAppTheme } from '@portima/fe-lib';
import { Button, IconButton, ButtonGroup } from '@mui/material';

// 1. Wrap app with provider
function App() {
  return (
    <AppThemeProvider>
      <CustomNavbar />
      <YourContent />
    </AppThemeProvider>
  );
}

// 2. Build custom controls anywhere
function CustomNavbar() {
  const { themeName, mode, setTheme, toggleMode } = useAppTheme();

  return (
    <nav>
      {/* Custom theme buttons */}
      <ButtonGroup>
        <Button
          variant={themeName === 'amsterdam' ? 'contained' : 'outlined'}
          onClick={() => setTheme('amsterdam')}
        >
          🇳🇱 Amsterdam
        </Button>
        <Button
          variant={themeName === 'barcelona' ? 'contained' : 'outlined'}
          onClick={() => setTheme('barcelona')}
        >
          🇪� Barcelona
        </Button>
        <Button
          variant={themeName === 'berlin' ? 'contained' : 'outlined'}
          onClick={() => setTheme('berlin')}
        >
          🇩🇪 Berlin
        </Button>
        <Button
          variant={themeName === 'lisbon' ? 'contained' : 'outlined'}
          onClick={() => setTheme('lisbon')}
        >
          �🇹 Lisbon
        </Button>
        <Button
          variant={themeName === 'london' ? 'contained' : 'outlined'}
          onClick={() => setTheme('london')}
        >
          🇬� London
        </Button>
      </ButtonGroup>

      {/* Custom dark mode toggle */}
      <IconButton onClick={toggleMode}>
        {mode === 'light' ? '🌙' : '☀️'}
      </IconButton>
    </nav>
  );
}
```

### useAppTheme Hook

```typescript
const {
  themeName, // 'amsterdam' | 'barcelona' | 'berlin' | 'lisbon' | 'london'
  mode, // 'light' | 'dark'
  setTheme, // (name) => void
  setMode, // (mode) => void
  toggleMode, // () => void
} = useAppTheme();
```

### More Examples

**Tabs:**

```typescript
import { Tabs, Tab } from '@mui/material';

function ThemeTabs() {
  const { themeName, setTheme } = useAppTheme();
  return (
    <Tabs value={themeName} onChange={(e, val) => setTheme(val)}>
      <Tab label="Amsterdam" value="amsterdam" />
      <Tab label="Barcelona" value="barcelona" />
      <Tab label="Berlin" value="berlin" />
      <Tab label="Lisbon" value="lisbon" />
      <Tab label="London" value="london" />
    </Tabs>
  );
}
```

**Dropdown (combined theme + mode):**

```typescript
import { Select, MenuItem } from '@mui/material';

function CombinedDropdown() {
  const { themeName, mode, setTheme, setMode } = useAppTheme();
  const value = `${themeName}-${mode}`;

  return (
    <Select
      value={value}
      onChange={(e) => {
        const [theme, themeMode] = e.target.value.split('-');
        setTheme(theme);
        setMode(themeMode);
      }}
    >
      <MenuItem value="amsterdam-light">Amsterdam Light</MenuItem>
      <MenuItem value="amsterdam-dark">Amsterdam Dark</MenuItem>
      <MenuItem value="barcelona-light">Barcelona Light</MenuItem>
      <MenuItem value="barcelona-dark">Barcelona Dark</MenuItem>
      <MenuItem value="berlin-light">Berlin Light</MenuItem>
      <MenuItem value="berlin-dark">Berlin Dark</MenuItem>
      <MenuItem value="lisbon-light">Lisbon Light</MenuItem>
      <MenuItem value="lisbon-dark">Lisbon Dark</MenuItem>
      <MenuItem value="london-light">London Light</MenuItem>
      <MenuItem value="london-dark">London Dark</MenuItem>
    </Select>
  );
}
```

**Settings Page:**

```typescript
import { RadioGroup, FormControlLabel, Radio, Paper } from '@mui/material';

function SettingsPage() {
  const { themeName, setTheme } = useAppTheme();
  return (
    <Paper sx={{ p: 3 }}>
      <h3>Choose Theme</h3>
      <RadioGroup value={themeName} onChange={(e) => setTheme(e.target.value)}>
        <FormControlLabel value="ocean" control={<Radio />} label="Ocean" />
        <FormControlLabel value="sunset" control={<Radio />} label="Sunset" />
        <FormControlLabel value="forest" control={<Radio />} label="Forest" />
      </RadioGroup>
    </Paper>
  );
}
```

**✅ Perfect for:** Apps with custom design systems, branded UI, settings pages.

---

## Scenario 3: Customize Theme Styles

**When to use:** You want to use library themes but customize component styles for your brand.

**What you get:** Base theme colors + your component overrides.

### Setup

```typescript
import { AppThemeProvider } from '@portima/fe-lib';
import { ThemeOptions } from '@mui/material/styles';

// Define your customizations
const brandCustomizations: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',    // No uppercase
          borderRadius: 12,          // More rounded
          fontWeight: 600,           // Bolder
          padding: '10px 24px',      // More padding
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "SF Pro", "Roboto", sans-serif',
    button: {
      fontWeight: 600,
    },
  },
};

function App() {
  return (
    <AppThemeProvider themeExtension={brandCustomizations}>
      <YourApp />
    </AppThemeProvider>
  );
}
```

### What Happens

- ✅ Base theme colors are preserved (ocean/sunset/forest)
- ✅ Your component overrides apply on top
- ✅ Works with all themes and light/dark modes
- ✅ Only override what you need

**✅ Perfect for:** Branded apps, design system customization, component-specific styling.

---

## Scenario 4: Manual Theme Control

**When to use:** You need complete control or don't want the provider wrapper.

**What you get:** Direct access to theme objects, manage state yourself.

### Option A: Use Specific Theme Only

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { oceanLightTheme } from '@portima/fe-lib';

function App() {
  return (
    <ThemeProvider theme={oceanLightTheme}>
      {/* App always uses Ocean Light */}
      <YourApp />
    </ThemeProvider>
  );
}
```

### Option B: Manual Switching

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { themes } from '@portima/fe-lib';
import { useState } from 'react';

function App() {
  const [themeName, setThemeName] = useState('ocean');
  const [mode, setMode] = useState('light');

  const currentTheme = themes[themeName][mode];

  return (
    <ThemeProvider theme={currentTheme}>
      <YourCustomControls
        themeName={themeName}
        mode={mode}
        onThemeChange={setThemeName}
        onModeChange={setMode}
      />
      <YourApp />
    </ThemeProvider>
  );
}
```

### Option C: Extend Theme Manually

```typescript
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { oceanLightTheme } from '@portima/fe-lib';

const customTheme = createTheme(oceanLightTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 20 },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

### Available Exports

```typescript
// Individual themes
import {
  oceanLightTheme,
  oceanDarkTheme,
  sunsetLightTheme,
  sunsetDarkTheme,
  forestLightTheme,
  forestDarkTheme,
} from "@portima/fe-lib";

// Structured object
import { themes } from "@portima/fe-lib";
// themes.ocean.light, themes.ocean.dark, etc.

// Flat object (good for dropdowns)
import { allThemes } from "@portima/fe-lib";
// allThemes['Ocean Light'], allThemes['Ocean Dark'], etc.
```

**✅ Perfect for:** Advanced use cases, custom state management, non-standard setups.

---

## Scenario 5: CSS Variables Only

**When to use:** You're not using Material-UI or want pure CSS approach.

**What you get:** CSS custom properties, framework-agnostic styling.

### Setup

```typescript
// In main.tsx or App.tsx
import "@portima/fe-lib/css/ocean/light"; // Import one theme
// OR
import "@portima/fe-lib/css/tailwind"; // Import all themes
```

### Use in CSS

```css
.my-button {
  background-color: var(--primary);
  color: var(--primary-contrast);
  padding: var(--spacing-unit);
  border-radius: var(--border-radius);
}

.my-card {
  background-color: var(--background-paper);
  color: var(--text-primary);
}
```

### Available CSS Variables

```css
/* Colors */
--primary
--primary-contrast
--secondary
--secondary-contrast
--background-default
--background-paper
--text-primary
--text-secondary
--error, --warning, --info, --success

/* Layout */
--spacing-unit        /* 8px */
--border-radius       /* 4px, 8px, or 12px */
```

### With Tailwind CSS

```typescript
// Import Tailwind CSS
import '@portima/fe-lib/css/tailwind';

// Use in JSX
<div className="theme-theme-ocean">
  <button className="bg-primary text-primary-contrast p-4 rounded">
    Ocean Button
  </button>
</div>

// Dark mode
<div className="theme-theme-ocean dark">
  <button className="bg-primary text-primary-contrast p-4">
    Ocean Dark Button
  </button>
</div>
```

### Manual Theme Switching (JavaScript)

```javascript
// Change theme
document.documentElement.className = "theme-theme-sunset";

// Toggle dark mode
document.documentElement.classList.toggle("dark");
```

**✅ Perfect for:** Vue/Svelte/Angular apps, CSS-only projects, non-React frameworks.

---

## 🎯 Component API Reference

### AppThemeProvider Props

```typescript
{
  children: ReactNode;
  defaultTheme?: 'ocean' | 'sunset' | 'forest';  // Default: 'ocean'
  defaultMode?: 'light' | 'dark';                // Default: system or 'light'
  enablePersistence?: boolean;                   // Default: true
  storageKey?: string;                           // Default: 'app-theme'
  useSystemPreference?: boolean;                 // Default: true
  themeExtension?: ThemeOptions;                 // MUI theme overrides
  disableCssBaseline?: boolean;                  // Default: false
  enableTailwindIntegration?: boolean;           // Default: true
}
```

### useAppTheme Hook

```typescript
{
  themeName: 'ocean' | 'sunset' | 'forest';     // Current theme
  mode: 'light' | 'dark';                        // Current mode
  setTheme: (name: ThemeName) => void;          // Change theme
  setMode: (mode: ThemeMode) => void;           // Change mode
  toggleMode: () => void;                        // Toggle light/dark
}
```

### ThemeSelector Props

```typescript
{
  showLabel?: boolean;      // Default: true
  label?: string;           // Default: 'Theme'
  size?: 'small' | 'medium';// Default: 'medium'
  width?: number | string;  // Default: 120
  sx?: object;              // MUI sx prop
}
```

### ThemeModeToggle Props

```typescript
{
  showLabel?: boolean;      // Default: true
  showIcons?: boolean;      // Default: true (☀️/🌙)
  size?: 'small' | 'medium';// Default: 'medium'
  darkLabel?: string;       // Default: 'Dark'
  lightLabel?: string;      // Default: 'Light'
  sx?: object;              // MUI sx prop
}
```

---

## 🎨 Theme Colors Reference

### Ocean (Professional Blue)

```typescript
Light: primary: '#0077be', secondary: '#00a896', bg: '#f0f8ff'
Dark:  primary: '#42a5f5', secondary: '#26d4c1', bg: '#0a1929'
```

### Sunset (Warm Orange)

```typescript
Light: primary: '#ff6b35', secondary: '#f7931e', bg: '#fff8f0'
Dark:  primary: '#ff8a65', secondary: '#ffb74d', bg: '#1a1410'
```

### Forest (Natural Green)

```typescript
Light: primary: '#2d6a4f', secondary: '#52b788', bg: '#f1f8f4'
Dark:  primary: '#52b788', secondary: '#74c69d', bg: '#081c15'
```

---

## 🐛 Troubleshooting

**Theme not applying?**

- Ensure `AppThemeProvider` wraps your entire app
- Check Material-UI is installed

**`useAppTheme` hook error?**

- Must be called inside `AppThemeProvider`
- Check you're not calling it at the top level

**CSS imports not working?**

- TypeScript errors for CSS imports are normal and safe to ignore
- Vite handles them at runtime

**Need localStorage disabled?**

```typescript
<AppThemeProvider enablePersistence={false}>
```

**Need to disable system preference detection?**

```typescript
<AppThemeProvider useSystemPreference={false}>
```

---

## 📚 Related Documentation

- **[README.md](./README.md)** - Installation and features overview
- **[BUILD-GUIDE.md](./BUILD-GUIDE.md)** - Build process and token generation
- **[TOKENS.md](./TOKENS.md)** - Design tokens detailed guide
- **[EXPORT-VERIFICATION.md](./EXPORT-VERIFICATION.md)** - Package verification

---

## � Quick Decision Guide

**Choose based on your needs:**

| If you need...            | Use...                               |
| ------------------------- | ------------------------------------ |
| Quick setup, minimal code | Scenario 1 + Pre-built components    |
| Custom theme controls     | Scenario 2 + useAppTheme hook        |
| Brand-specific styling    | Scenario 3 + themeExtension prop     |
| Settings page             | Scenario 2 + Radio/Select components |
| Complete control          | Scenario 4 + Manual theme objects    |
| CSS-only (no React)       | Scenario 5 + CSS variables           |
| Tailwind CSS              | Scenario 5 + Tailwind import         |

---

**Questions or Issues?**

- � [Report Issue](https://github.com/portima/fe-lib/issues)
- 💬 [Discussions](https://github.com/portima/fe-lib/discussions)
