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
 * import { amsterdamLightTheme } from 'your-library';
 * 
 * function App() {
 *   return (
 *     <ThemeProvider theme={amsterdamLightTheme}>
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
 *     <ThemeProvider theme={themes.amsterdam[mode]}>
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
 * Switch between different theme families (amsterdam, barcelona, berlin, lisbon, london) and modes:
 * 
 * ```typescript
 * import { ThemeProvider } from '@mui/material/styles';
 * import { themes, type ThemeName, type ThemeMode } from 'your-library';
 * import { useState } from 'react';
 * 
 * function App() {
 *   const [themeName, setThemeName] = useState<ThemeName>('amsterdam');
 *   const [mode, setMode] = useState<ThemeMode>('light');
 *   
 *   return (
 *     <ThemeProvider theme={themes[themeName][mode]}>
 *       <select onChange={(e) => setThemeName(e.target.value as ThemeName)}>
 *         <option value="amsterdam">Amsterdam</option>
 *         <option value="barcelona">Barcelona</option>
 *         <option value="berlin">Berlin</option>
 *         <option value="lisbon">Lisbon</option>
 *         <option value="london">London</option>
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
 * import { amsterdamLightTheme } from 'your-library';
 * 
 * const customTheme = createTheme(amsterdamLightTheme, {
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
 *   themeName: 'amsterdam' as ThemeName,
 *   mode: 'light' as ThemeMode,
 *   setThemeName: (name: ThemeName) => {},
 *   setMode: (mode: ThemeMode) => {},
 * });
 * 
 * export function AppThemeProvider({ children }) {
 *   const [themeName, setThemeName] = useState<ThemeName>('amsterdam');
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
 * - amsterdamLightTheme, amsterdamDarkTheme
 * - barcelonaLightTheme, barcelonaDarkTheme
 * - berlinLightTheme, berlinDarkTheme
 * - lisbonLightTheme, lisbonDarkTheme
 * - londonLightTheme, londonDarkTheme
 * 
 * Structured Themes Object (for dynamic theme switching):
 * - themes.amsterdam.light, themes.amsterdam.dark
 * - themes.barcelona.light, themes.barcelona.dark
 * - themes.berlin.light, themes.berlin.dark
 * - themes.lisbon.light, themes.lisbon.dark
 * - themes.london.light, themes.london.dark
 * 
 * Flat Themes Object (for Storybook and dropdown selectors):
 * - allThemes['Amsterdam Light'], allThemes['Amsterdam Dark'], etc.
 * 
 * TypeScript Types:
 * - ThemeName: 'amsterdam' | 'barcelona' | 'berlin' | 'lisbon' | 'london'
 * - ThemeMode: 'light' | 'dark'
 */

import { createTheme, Theme } from '@mui/material/styles';

// Import light themes
import * as amsterdamLight from '../../design-system/output/theme-amsterdam/light/ts/tokens';
import * as barcelonaLight from '../../design-system/output/theme-barcelona/light/ts/tokens';
import * as berlinLight from '../../design-system/output/theme-berlin/light/ts/tokens';
import * as lisbonLight from '../../design-system/output/theme-lisbon/light/ts/tokens';
import * as londonLight from '../../design-system/output/theme-london/light/ts/tokens';

// Import dark themes
import * as amsterdamDark from '../../design-system/output/theme-amsterdam/dark/ts/tokens';
import * as barcelonaDark from '../../design-system/output/theme-barcelona/dark/ts/tokens';
import * as berlinDark from '../../design-system/output/theme-berlin/dark/ts/tokens';
import * as lisbonDark from '../../design-system/output/theme-lisbon/dark/ts/tokens';
import * as londonDark from '../../design-system/output/theme-london/dark/ts/tokens';

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
export const amsterdamLightTheme = createThemeFromTokens(amsterdamLight, 'light');
export const amsterdamDarkTheme = createThemeFromTokens(amsterdamDark, 'dark');
export const barcelonaLightTheme = createThemeFromTokens(barcelonaLight, 'light');
export const barcelonaDarkTheme = createThemeFromTokens(barcelonaDark, 'dark');
export const berlinLightTheme = createThemeFromTokens(berlinLight, 'light');
export const berlinDarkTheme = createThemeFromTokens(berlinDark, 'dark');
export const lisbonLightTheme = createThemeFromTokens(lisbonLight, 'light');
export const lisbonDarkTheme = createThemeFromTokens(lisbonDark, 'dark');
export const londonLightTheme = createThemeFromTokens(londonLight, 'light');
export const londonDarkTheme = createThemeFromTokens(londonDark, 'dark');

// Export a themes object for convenience (structured by theme name)
export const themes = {
  amsterdam: {
    light: amsterdamLightTheme,
    dark: amsterdamDarkTheme,
  },
  barcelona: {
    light: barcelonaLightTheme,
    dark: barcelonaDarkTheme,
  },
  berlin: {
    light: berlinLightTheme,
    dark: berlinDarkTheme,
  },
  lisbon: {
    light: lisbonLightTheme,
    dark: lisbonDarkTheme,
  },
  london: {
    light: londonLightTheme,
    dark: londonDarkTheme,
  },
};

// Export all themes as a flat object (for Storybook compatibility)
export const allThemes = {
  'Amsterdam Light': amsterdamLightTheme,
  'Amsterdam Dark': amsterdamDarkTheme,
  'Barcelona Light': barcelonaLightTheme,
  'Barcelona Dark': barcelonaDarkTheme,
  'Berlin Light': berlinLightTheme,
  'Berlin Dark': berlinDarkTheme,
  'Lisbon Light': lisbonLightTheme,
  'Lisbon Dark': lisbonDarkTheme,
  'London Light': londonLightTheme,
  'London Dark': londonDarkTheme,
};

// Type exports for consumers
export type ThemeName = 'amsterdam' | 'barcelona' | 'berlin' | 'lisbon' | 'london';
export type ThemeMode = 'light' | 'dark';

