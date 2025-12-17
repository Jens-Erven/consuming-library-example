/**
 * Material-UI Theme Configuration
 * 
 * This module provides pre-configured Material-UI themes based on design tokens.
 * It exports themes in multiple formats to support different use cases in consuming applications.
 * 
 * @module themes
 * 
 * USAGE EXAMPLES:
 * 
 * 1. SIMPLE USAGE - Single Static Theme
 * -------------------------------------
 * Import a specific theme and wrap your app with Material-UI's ThemeProvider:
 * 
 * ```typescript
 * import { ThemeProvider } from '@mui/material/styles';
 * import { oceanLightTheme } from 'your-library';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider theme={oceanLightTheme}>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * 2. DYNAMIC THEME SWITCHING - Light/Dark Mode
 * ---------------------------------------------
 * Use the structured `themes` object to switch between light and dark modes:
 * 
 * ```typescript
 * import { ThemeProvider } from '@mui/material/styles';
 * import { themes, type ThemeMode } from 'your-library';
 * import { useState } from 'react';
 * 
 * function App() {
 *   const [mode, setMode] = useState<ThemeMode>('light');
 *   
 *   return (
 *     <ThemeProvider theme={themes.ocean[mode]}>
 *       <button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
 *         Toggle Mode
 *       </button>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * 3. FULL THEME SWITCHING - Multiple Themes + Light/Dark
 * -------------------------------------------------------
 * Switch between different theme families (ocean, sunset, forest) and modes:
 * 
 * ```typescript
 * import { ThemeProvider } from '@mui/material/styles';
 * import { themes, type ThemeName, type ThemeMode } from 'your-library';
 * import { useState } from 'react';
 * 
 * function App() {
 *   const [themeName, setThemeName] = useState<ThemeName>('ocean');
 *   const [mode, setMode] = useState<ThemeMode>('light');
 *   
 *   return (
 *     <ThemeProvider theme={themes[themeName][mode]}>
 *       <select onChange={(e) => setThemeName(e.target.value as ThemeName)}>
 *         <option value="ocean">Ocean</option>
 *         <option value="sunset">Sunset</option>
 *         <option value="forest">Forest</option>
 *       </select>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * 4. ADVANCED - Extending/Customizing Themes
 * -------------------------------------------
 * Import a base theme and extend it with custom overrides:
 * 
 * ```typescript
 * import { createTheme, ThemeProvider } from '@mui/material/styles';
 * import { oceanLightTheme } from 'your-library';
 * 
 * const customTheme = createTheme(oceanLightTheme, {
 *   components: {
 *     MuiButton: {
 *       styleOverrides: {
 *         root: {
 *           textTransform: 'none',
 *           borderRadius: 8,
 *         },
 *       },
 *     },
 *   },
 *   typography: {
 *     fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
 *   },
 * });
 * 
 * function App() {
 *   return (
 *     <ThemeProvider theme={customTheme}>
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 * 
 * 5. WITH CONTEXT API - App-Wide Theme Management
 * ------------------------------------------------
 * Create a custom theme context for app-wide theme management:
 * 
 * ```typescript
 * import { createContext, useContext, useState } from 'react';
 * import { ThemeProvider } from '@mui/material/styles';
 * import { themes, type ThemeName, type ThemeMode } from 'your-library';
 * 
 * const ThemeContext = createContext({
 *   themeName: 'ocean' as ThemeName,
 *   mode: 'light' as ThemeMode,
 *   setThemeName: (name: ThemeName) => {},
 *   setMode: (mode: ThemeMode) => {},
 * });
 * 
 * export function AppThemeProvider({ children }) {
 *   const [themeName, setThemeName] = useState<ThemeName>('ocean');
 *   const [mode, setMode] = useState<ThemeMode>('light');
 *   
 *   return (
 *     <ThemeContext.Provider value={{ themeName, mode, setThemeName, setMode }}>
 *       <ThemeProvider theme={themes[themeName][mode]}>
 *         {children}
 *       </ThemeProvider>
 *     </ThemeContext.Provider>
 *   );
 * }
 * 
 * export const useAppTheme = () => useContext(ThemeContext);
 * ```
 * 
 * EXPORTS OVERVIEW:
 * 
 * Individual Theme Objects (for simple static usage):
 * - oceanLightTheme, oceanDarkTheme
 * - sunsetLightTheme, sunsetDarkTheme
 * - forestLightTheme, forestDarkTheme
 * 
 * Structured Themes Object (for dynamic theme switching):
 * - themes.ocean.light, themes.ocean.dark
 * - themes.sunset.light, themes.sunset.dark
 * - themes.forest.light, themes.forest.dark
 * 
 * Flat Themes Object (for Storybook and dropdown selectors):
 * - allThemes['Ocean Light'], allThemes['Ocean Dark'], etc.
 * 
 * TypeScript Types:
 * - ThemeName: 'ocean' | 'sunset' | 'forest'
 * - ThemeMode: 'light' | 'dark'
 */

import { createTheme, Theme } from '@mui/material/styles';

// Import light themes
import * as forestLight from '../../design-system/output/theme-forest/light/ts/tokens';
import * as oceanLight from '../../design-system/output/theme-ocean/light/ts/tokens';
import * as sunsetLight from '../../design-system/output/theme-sunset/light/ts/tokens';

// Import dark themes
import * as forestDark from '../../design-system/output/theme-forest/dark/ts/tokens';
import * as oceanDark from '../../design-system/output/theme-ocean/dark/ts/tokens';
import * as sunsetDark from '../../design-system/output/theme-sunset/dark/ts/tokens';

// Helper function to create MUI theme from design tokens
const createThemeFromTokens = (tokens: any, mode: 'light' | 'dark'): Theme => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: tokens.primary,
        contrastText: tokens.primaryContrast,
      },
      secondary: {
        main: tokens.secondary,
        contrastText: tokens.secondaryContrast,
      },
      error: {
        main: tokens.error,
      },
      warning: {
        main: tokens.warning,
      },
      info: {
        main: tokens.info,
      },
      success: {
        main: tokens.success,
      },
      background: {
        default: tokens.backgroundDefault,
        paper: tokens.backgroundPaper,
      },
      text: {
        primary: tokens.textPrimary,
        secondary: tokens.textSecondary,
      },
    },
    spacing: parseInt(tokens.spacingUnit),
    shape: {
      borderRadius: parseInt(tokens.borderRadius),
    },
  });
};

// Export individual theme objects for maximum flexibility
export const oceanLightTheme = createThemeFromTokens(oceanLight, 'light');
export const oceanDarkTheme = createThemeFromTokens(oceanDark, 'dark');
export const sunsetLightTheme = createThemeFromTokens(sunsetLight, 'light');
export const sunsetDarkTheme = createThemeFromTokens(sunsetDark, 'dark');
export const forestLightTheme = createThemeFromTokens(forestLight, 'light');
export const forestDarkTheme = createThemeFromTokens(forestDark, 'dark');

// Export a themes object for convenience (structured by theme name)
export const themes = {
  ocean: {
    light: oceanLightTheme,
    dark: oceanDarkTheme,
  },
  sunset: {
    light: sunsetLightTheme,
    dark: sunsetDarkTheme,
  },
  forest: {
    light: forestLightTheme,
    dark: forestDarkTheme,
  },
};

// Export all themes as a flat object (for Storybook compatibility)
export const allThemes = {
  'Ocean Light': oceanLightTheme,
  'Ocean Dark': oceanDarkTheme,
  'Sunset Light': sunsetLightTheme,
  'Sunset Dark': sunsetDarkTheme,
  'Forest Light': forestLightTheme,
  'Forest Dark': forestDarkTheme,
};

// Type exports for consumers
export type ThemeName = 'ocean' | 'sunset' | 'forest';
export type ThemeMode = 'light' | 'dark';
