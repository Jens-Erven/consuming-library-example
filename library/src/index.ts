// Export styles
import './styles.css';

// Export components
export { Button } from './components/Button';
export type { ButtonProps } from './components/Button';

export { ThemeSelector } from './components/ThemeSelector';
export type { ThemeSelectorProps } from './components/ThemeSelector';

export { ThemeModeToggle } from './components/ThemeModeToggle';
export type { ThemeModeToggleProps } from './components/ThemeModeToggle';

export { ProfileCard } from './components/ProfileCard';
export type { ProfileCardProps } from './components/ProfileCard';

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
// import * as oceanLight from '@portima/fe-lib/tokens/ocean/light';
// import '@portima/fe-lib/css/ocean/light';

