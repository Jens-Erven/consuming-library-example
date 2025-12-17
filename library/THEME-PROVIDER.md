# Theme Provider Usage Guide

## 🚀 Quick Start

Wrap your application with `AppThemeProvider` and place the theme controls wherever you want in your UI.

```typescript
import { 
  AppThemeProvider, 
  ThemeSelector, 
  ThemeModeToggle 
} from '@jens-erven/fe-lib';

function App() {
  return (
    <AppThemeProvider defaultTheme="ocean" defaultMode="light">
      <Header>
        <ThemeSelector />
        <ThemeModeToggle />
      </Header>
      <MainContent />
    </AppThemeProvider>
  );
}
```

## 📦 Components

### `AppThemeProvider`

The main wrapper that provides theme context to your application.

**Props:**
- `defaultTheme?: 'ocean' | 'sunset' | 'forest'` - Initial theme (default: 'ocean')
- `defaultMode?: 'light' | 'dark'` - Initial mode (default: 'light' or system preference)
- `enablePersistence?: boolean` - Save theme to localStorage (default: true)
- `storageKey?: string` - localStorage key prefix (default: 'app-theme')
- `useSystemPreference?: boolean` - Detect system dark mode preference (default: true)
- `themeExtension?: ThemeOptions` - Extend/override MUI theme
- `disableCssBaseline?: boolean` - Disable Material-UI CssBaseline (default: false)

**Example:**
```typescript
<AppThemeProvider
  defaultTheme="sunset"
  defaultMode="dark"
  enablePersistence={true}
  useSystemPreference={true}
>
  <App />
</AppThemeProvider>
```

### `ThemeSelector`

A Material-UI Select dropdown for choosing themes.

**Props:**
- `showLabel?: boolean` - Show label (default: true)
- `label?: string` - Label text (default: 'Theme')
- `size?: 'small' | 'medium'` - Size (default: 'medium')
- `width?: number | string` - Custom width (default: 120)
- `sx?: object` - Additional Material-UI sx props

**Example:**
```typescript
// In your navbar
<ThemeSelector size="small" width={150} />

// In a settings form
<ThemeSelector showLabel={true} label="Choose Theme" />
```

### `ThemeModeToggle`

A Material-UI Switch for toggling between light and dark mode.

**Props:**
- `showLabel?: boolean` - Show label text (default: true)
- `showIcons?: boolean` - Show sun/moon icons (default: true)
- `size?: 'small' | 'medium'` - Size (default: 'medium')
- `darkLabel?: string` - Label for dark mode (default: 'Dark')
- `lightLabel?: string` - Label for light mode (default: 'Light')
- `sx?: object` - Additional Material-UI sx props

**Example:**
```typescript
// With icons and label
<ThemeModeToggle />

// Compact version
<ThemeModeToggle showLabel={false} size="small" />

// Custom labels
<ThemeModeToggle darkLabel="Night" lightLabel="Day" />
```

### `useAppTheme` Hook

Access and control theme programmatically.

**Returns:**
- `themeName: ThemeName` - Current theme name
- `mode: ThemeMode` - Current mode
- `setTheme: (name: ThemeName) => void` - Set theme
- `setMode: (mode: ThemeMode) => void` - Set mode
- `toggleMode: () => void` - Toggle between light/dark

**Example:**
```typescript
import { useAppTheme } from '@jens-erven/fe-lib';

function CustomThemeControls() {
  const { themeName, mode, setTheme, toggleMode } = useAppTheme();
  
  return (
    <div>
      <p>Current: {themeName} ({mode})</p>
      <button onClick={() => setTheme('sunset')}>
        Use Sunset
      </button>
      <button onClick={toggleMode}>
        Toggle Mode
      </button>
    </div>
  );
}
```

## 🎨 Complete Examples

### Example 1: Navbar with Theme Controls

```typescript
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Stack 
} from '@mui/material';
import { 
  ThemeSelector, 
  ThemeModeToggle 
} from '@jens-erven/fe-lib';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Stack direction="row" spacing={2} alignItems="center">
          <ThemeSelector size="small" width={100} />
          <ThemeModeToggle showLabel={false} size="small" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
```

### Example 2: Settings Page

```typescript
import { 
  Paper, 
  Stack, 
  Typography, 
  Divider 
} from '@mui/material';
import { 
  ThemeSelector, 
  ThemeModeToggle 
} from '@jens-erven/fe-lib';

function SettingsPage() {
  return (
    <Paper sx={{ p: 3, maxWidth: 600 }}>
      <Typography variant="h5" gutterBottom>
        Appearance Settings
      </Typography>
      <Divider sx={{ my: 2 }} />
      
      <Stack spacing={3}>
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Color Theme
          </Typography>
          <ThemeSelector width="100%" />
        </div>
        
        <div>
          <Typography variant="subtitle1" gutterBottom>
            Dark Mode
          </Typography>
          <ThemeModeToggle />
        </div>
      </Stack>
    </Paper>
  );
}
```

### Example 3: With Custom Theme Extension

```typescript
import { AppThemeProvider } from '@jens-erven/fe-lib';
import { ThemeOptions } from '@mui/material/styles';

const customizations: ThemeOptions = {
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", sans-serif',
  },
};

function App() {
  return (
    <AppThemeProvider themeExtension={customizations}>
      <YourApp />
    </AppThemeProvider>
  );
}
```

### Example 4: Programmatic Control

```typescript
import { useAppTheme } from '@jens-erven/fe-lib';
import { useEffect } from 'react';

function AutoThemeSwitcher() {
  const { setTheme, setMode } = useAppTheme();
  
  useEffect(() => {
    const hour = new Date().getHours();
    
    // Auto switch to dark mode at night
    if (hour >= 18 || hour < 6) {
      setMode('dark');
    }
    
    // Switch theme based on season
    const month = new Date().getMonth();
    if (month >= 6 && month <= 8) {
      setTheme('sunset'); // Summer
    } else if (month >= 3 && month <= 5) {
      setTheme('forest'); // Spring
    } else {
      setTheme('ocean'); // Winter/Fall
    }
  }, [setTheme, setMode]);
  
  return null;
}
```

## 🎯 Benefits

✅ **Flexible Placement** - Put theme controls anywhere in your UI  
✅ **Automatic Persistence** - Theme preferences saved to localStorage  
✅ **System Preference** - Respects user's OS dark mode setting  
✅ **Type Safe** - Full TypeScript support  
✅ **Customizable** - Extend themes with your own overrides  
✅ **Zero Config** - Works out of the box with sensible defaults  
✅ **Material-UI Native** - Fully integrated with MUI theming  

## 📚 See Also

- [Main README](./README.md) - Installation and getting started
- [TOKENS.md](./TOKENS.md) - Using design tokens directly
- [Material-UI Documentation](https://mui.com/material-ui/customization/theming/)
