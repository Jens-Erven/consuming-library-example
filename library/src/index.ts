// Export styles
import './styles.css';

// Export components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { MaterialButton } from './components/MaterialButton';
export type { MaterialButtonProps } from './components/MaterialButton';

export { ThemeSelector } from './components/ThemeSelector';
export type { ThemeSelectorProps } from './components/ThemeSelector';

export { ThemeModeToggle } from './components/ThemeModeToggle';
export type { ThemeModeToggleProps } from './components/ThemeModeToggle';

// Export themes
export {
    allThemes, forestDarkTheme, forestLightTheme, oceanDarkTheme,
    // Individual themes
    oceanLightTheme, sunsetDarkTheme, sunsetLightTheme,
    // Theme collections
    themes, type ThemeMode,
    // Types
    type ThemeName
} from './themes';

// Export theme provider and utilities
export { AppThemeProvider, useAppTheme } from './providers';
export type { AppThemeProviderProps, ThemeContextType } from './providers';

// Note: Design tokens (TypeScript and CSS) are available via package.json exports
// Import them directly:
// import * as oceanLight from '@jens-erven/fe-lib/tokens/ocean/light';
// import '@jens-erven/fe-lib/css/ocean/light';

