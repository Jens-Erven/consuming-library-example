# Theme Usage Guide

Complete guide for using themes in your application with `@jens-erven/fe-lib`.

---

## 📚 Table of Contents

1. [Quick Start](#quick-start)
2. [Approach 1: Use Everything (Easiest)](#approach-1-use-everything-easiest)
3. [Approach 2: Custom UI with Library Themes](#approach-2-custom-ui-with-library-themes)
4. [Approach 3: Extend Library Themes](#approach-3-extend-library-themes)
5. [Approach 4: Direct Theme Control (Advanced)](#approach-4-direct-theme-control-advanced)
6. [Approach 5: CSS Variables Only (No React)](#approach-5-css-variables-only-no-react)
7. [API Reference](#api-reference)

---

## Quick Start

**Install the library:**
```bash
npm install @jens-erven/fe-lib @mui/material @emotion/react @emotion/styled
```

**Simplest setup:**
```typescript
import { AppThemeProvider, ThemeSelector, ThemeModeToggle } from '@jens-erven/fe-lib';

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

That's it! You now have 3 themes (Ocean, Sunset, Forest) with light/dark modes.

---

## Approach 1: Use Everything (Easiest)

**Perfect for:** Apps that want theme switching with minimal code.

### Setup

```typescript
import { 
  AppThemeProvider, 
  ThemeSelector, 
  ThemeModeToggle 
} from '@jens-erven/fe-lib';
import { AppBar, Toolbar, Typography, Stack } from '@mui/material';

function App() {
  return (
    <AppThemeProvider 
      defaultTheme="ocean"      // Optional: ocean, sunset, or forest
      defaultMode="light"       // Optional: light or dark
    >
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

### What You Get
- ✅ 3 themes: Ocean (blue), Sunset (orange), Forest (green)
- ✅ Light and dark modes for each theme
- ✅ Automatic localStorage persistence
- ✅ System dark mode detection
- ✅ Pre-built Material-UI components

### Component Props

**ThemeSelector:**
```typescript
<ThemeSelector 
  showLabel={true}        // Show "Theme" label
  label="Theme"           // Custom label text
  size="small"            // 'small' | 'medium'
  width={120}             // Custom width
/>
```

**ThemeModeToggle:**
```typescript
<ThemeModeToggle 
  showLabel={true}        // Show mode label
  showIcons={true}        // Show sun/moon icons
  size="small"            // 'small' | 'medium'
  darkLabel="Dark"        // Custom dark mode label
  lightLabel="Light"      // Custom light mode label
/>
```

---

## Approach 2: Custom UI with Library Themes

**Perfect for:** Apps that want custom theme controls but use library themes.

### Setup

```typescript
import { AppThemeProvider, useAppTheme } from '@jens-erven/fe-lib';
import { Button, IconButton, Stack, ButtonGroup } from '@mui/material';

// 1. Wrap your app with the provider
function App() {
  return (
    <AppThemeProvider>
      <Navbar />
      <YourMainContent />
    </AppThemeProvider>
  );
}

// 2. Build custom theme controls anywhere in your app
function Navbar() {
  const { themeName, mode, setTheme, toggleMode } = useAppTheme();
  
  return (
    <nav>
      {/* Custom theme buttons */}
      <ButtonGroup>
        <Button 
          variant={themeName === 'ocean' ? 'contained' : 'outlined'}
          onClick={() => setTheme('ocean')}
        >
          🌊 Ocean
        </Button>
        <Button 
          variant={themeName === 'sunset' ? 'contained' : 'outlined'}
          onClick={() => setTheme('sunset')}
        >
          🌅 Sunset
        </Button>
        <Button 
          variant={themeName === 'forest' ? 'contained' : 'outlined'}
          onClick={() => setTheme('forest')}
        >
          🌲 Forest
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

### More Custom Examples

**Dropdown with both theme and mode:**
```typescript
import { useAppTheme } from '@jens-erven/fe-lib';
import { Select, MenuItem } from '@mui/material';

function CombinedDropdown() {
  const { themeName, mode, setTheme, setMode } = useAppTheme();
  const value = `${themeName}-${mode}`;
  
  const handleChange = (event) => {
    const [theme, themeMode] = event.target.value.split('-');
    setTheme(theme);
    setMode(themeMode);
  };
  
  return (
    <Select value={value} onChange={handleChange}>
      <MenuItem value="ocean-light">Ocean Light</MenuItem>
      <MenuItem value="ocean-dark">Ocean Dark</MenuItem>
      <MenuItem value="sunset-light">Sunset Light</MenuItem>
      <MenuItem value="sunset-dark">Sunset Dark</MenuItem>
      <MenuItem value="forest-light">Forest Light</MenuItem>
      <MenuItem value="forest-dark">Forest Dark</MenuItem>
    </Select>
  );
}
```

**Tabs for theme selection:**
```typescript
import { useAppTheme } from '@jens-erven/fe-lib';
import { Tabs, Tab } from '@mui/material';

function TabsThemeSwitcher() {
  const { themeName, setTheme } = useAppTheme();
  
  return (
    <Tabs value={themeName} onChange={(e, val) => setTheme(val)}>
      <Tab label="Ocean" value="ocean" />
      <Tab label="Sunset" value="sunset" />
      <Tab label="Forest" value="forest" />
    </Tabs>
  );
}
```

**Radio buttons in settings:**
```typescript
import { useAppTheme } from '@jens-erven/fe-lib';
import { RadioGroup, FormControlLabel, Radio } from '@mui/material';

function SettingsPanel() {
  const { themeName, setTheme } = useAppTheme();
  
  return (
    <RadioGroup value={themeName} onChange={(e) => setTheme(e.target.value)}>
      <FormControlLabel value="ocean" control={<Radio />} label="Ocean Theme" />
      <FormControlLabel value="sunset" control={<Radio />} label="Sunset Theme" />
      <FormControlLabel value="forest" control={<Radio />} label="Forest Theme" />
    </RadioGroup>
  );
}
```

### useAppTheme Hook API

```typescript
const {
  themeName,    // Current theme: 'ocean' | 'sunset' | 'forest'
  mode,         // Current mode: 'light' | 'dark'
  setTheme,     // Function to change theme: (name: ThemeName) => void
  setMode,      // Function to change mode: (mode: ThemeMode) => void
  toggleMode,   // Function to toggle light/dark: () => void
} = useAppTheme();
```

---

## Approach 3: Extend Library Themes

**Perfect for:** Apps that want to customize library themes with brand-specific changes.

### Setup

```typescript
import { AppThemeProvider } from '@jens-erven/fe-lib';
import { ThemeOptions } from '@mui/material/styles';

// Define your customizations
const customizations: ThemeOptions = {
  // Override component styles
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',      // No uppercase
          borderRadius: 12,            // More rounded
          fontWeight: 600,             // Bolder text
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
        },
      },
    },
  },
  
  // Override typography
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
    },
  },
  
  // Add or override specific palette values (not recommended, use sparingly)
  // The base theme colors will be preserved
};

function App() {
  return (
    <AppThemeProvider themeExtension={customizations}>
      <YourApp />
    </AppThemeProvider>
  );
}
```

### What Gets Extended

When you use `themeExtension`, your customizations are **merged** with the library themes:
- ✅ Base theme colors are preserved
- ✅ Your component overrides are applied on top
- ✅ Works with all themes (ocean, sunset, forest)
- ✅ Works in both light and dark modes

---

## Approach 4: Direct Theme Control (Advanced)

**Perfect for:** Apps that need complete control or want to use library themes without the provider.

### Option A: Manual Theme Provider

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { oceanLightTheme, oceanDarkTheme, themes } from '@jens-erven/fe-lib';
import { useState } from 'react';

function App() {
  const [themeName, setThemeName] = useState<'ocean' | 'sunset' | 'forest'>('ocean');
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  
  // Get the current theme object
  const currentTheme = themes[themeName][mode];
  
  return (
    <ThemeProvider theme={currentTheme}>
      <YourCustomThemeControls 
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

### Option B: Use Specific Theme Only

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { oceanLightTheme } from '@jens-erven/fe-lib';

function App() {
  return (
    <ThemeProvider theme={oceanLightTheme}>
      {/* App always uses Ocean Light theme */}
      <YourApp />
    </ThemeProvider>
  );
}
```

### Option C: Extend Theme Manually

```typescript
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { oceanLightTheme } from '@jens-erven/fe-lib';

const customTheme = createTheme(oceanLightTheme, {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
        },
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

### Available Theme Exports

```typescript
// Individual theme objects
import { 
  oceanLightTheme,
  oceanDarkTheme,
  sunsetLightTheme,
  sunsetDarkTheme,
  forestLightTheme,
  forestDarkTheme
} from '@jens-erven/fe-lib';

// Structured object
import { themes } from '@jens-erven/fe-lib';
// themes.ocean.light
// themes.ocean.dark
// themes.sunset.light
// themes.sunset.dark
// themes.forest.light
// themes.forest.dark

// All themes in flat object (useful for dropdowns)
import { allThemes } from '@jens-erven/fe-lib';
// allThemes['Ocean Light']
// allThemes['Ocean Dark']
// etc.
```

---

## Approach 5: CSS Variables Only (No React)

**Perfect for:** Apps not using Material-UI or wanting pure CSS approach.

### Setup

```typescript
// In your main entry file (main.tsx, App.tsx)
import '@jens-erven/fe-lib/css/ocean/light';   // Import ocean light CSS
import '@jens-erven/fe-lib/css/ocean/dark';    // Import ocean dark CSS
// or import all themes
import '@jens-erven/fe-lib/css/tailwind';      // Includes all themes
```

### Use in CSS

```css
.my-component {
  background-color: var(--primary);
  color: var(--primary-contrast);
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
}

.my-card {
  background-color: var(--background-paper);
  color: var(--text-primary);
}
```

### Use with Tailwind (if imported tailwind CSS)

```typescript
<div className="theme-theme-ocean">
  <button className="bg-primary text-primary-contrast">
    Themed Button
  </button>
</div>

{/* Toggle dark mode */}
<div className="theme-theme-ocean dark">
  {/* Content uses dark mode colors */}
</div>
```

### Available CSS Variables

**Colors:**
- `--primary`, `--primary-contrast`
- `--secondary`, `--secondary-contrast`
- `--background-default`, `--background-paper`
- `--text-primary`, `--text-secondary`
- `--error`, `--warning`, `--info`, `--success`

**Layout:**
- `--spacing-unit` (8px)
- `--border-radius` (4px, 8px, or 12px depending on theme)

### Manual Theme Switching (JavaScript)

```javascript
// Switch theme by changing class name
document.documentElement.className = 'theme-theme-sunset';

// Toggle dark mode
document.documentElement.classList.toggle('dark');
```

---

## API Reference

### AppThemeProvider Props

```typescript
interface AppThemeProviderProps {
  children: ReactNode;
  defaultTheme?: 'ocean' | 'sunset' | 'forest';  // Default: 'ocean'
  defaultMode?: 'light' | 'dark';                // Default: 'light' or system preference
  enablePersistence?: boolean;                   // Default: true
  storageKey?: string;                           // Default: 'app-theme'
  useSystemPreference?: boolean;                 // Default: true
  themeExtension?: ThemeOptions;                 // Material-UI theme overrides
  disableCssBaseline?: boolean;                  // Default: false
}
```

### useAppTheme Hook

```typescript
interface ThemeContextType {
  themeName: 'ocean' | 'sunset' | 'forest';     // Current theme name
  mode: 'light' | 'dark';                        // Current mode
  setTheme: (name: ThemeName) => void;          // Change theme
  setMode: (mode: ThemeMode) => void;           // Change mode
  toggleMode: () => void;                        // Toggle light/dark
}
```

### Theme Selector Props

```typescript
interface ThemeSelectorProps {
  showLabel?: boolean;      // Default: true
  label?: string;           // Default: 'Theme'
  size?: 'small' | 'medium';// Default: 'medium'
  width?: number | string;  // Default: 120
  sx?: object;              // Material-UI sx prop
}
```

### Theme Mode Toggle Props

```typescript
interface ThemeModeToggleProps {
  showLabel?: boolean;      // Default: true
  showIcons?: boolean;      // Default: true
  size?: 'small' | 'medium';// Default: 'medium'
  darkLabel?: string;       // Default: 'Dark'
  lightLabel?: string;      // Default: 'Light'
  sx?: object;              // Material-UI sx prop
}
```

---

## Quick Decision Guide

**Choose your approach based on your needs:**

| Your Need | Recommended Approach |
|-----------|---------------------|
| Quick setup, minimal code | [Approach 1](#approach-1-use-everything-easiest) |
| Custom UI, library themes | [Approach 2](#approach-2-custom-ui-with-library-themes) |
| Customize component styles | [Approach 3](#approach-3-extend-library-themes) |
| Full control over theming | [Approach 4](#approach-4-direct-theme-control-advanced) |
| CSS-only, no React components | [Approach 5](#approach-5-css-variables-only-no-react) |
| Settings page with theme picker | [Approach 2](#approach-2-custom-ui-with-library-themes) |
| Brand-specific button styles | [Approach 3](#approach-3-extend-library-themes) |

---

## Examples Repository

For complete working examples of each approach, see:
- [Examples folder in repository](./examples)
- [Live demos on CodeSandbox](https://codesandbox.io/examples/jens-erven-fe-lib)

---

## Troubleshooting

**Theme not applying:**
- Make sure `AppThemeProvider` wraps your entire app
- Check that Material-UI is installed (`@mui/material`, `@emotion/react`, `@emotion/styled`)

**useAppTheme hook error:**
- Ensure you're calling `useAppTheme()` inside a component wrapped by `AppThemeProvider`

**TypeScript errors:**
- Make sure you're using `ThemeName` and `ThemeMode` types from the library

**CSS variables not working:**
- Import the CSS file: `import '@jens-erven/fe-lib/css/ocean/light'`
- Check that your build tool supports CSS imports

---

## Need Help?

- 📚 [Full Documentation](./README.md)
- 🎨 [Design Tokens Guide](./TOKENS.md)
- 🔧 [Theme Provider Details](./THEME-PROVIDER.md)
- 🐛 [Report Issues](https://github.com/your-repo/issues)
