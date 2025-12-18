/**
 * Design Tokens Export
 * 
 * This module provides direct access to design tokens for consuming applications.
 * 
 * Note: Raw token TypeScript/CSS files should be imported directly from package exports:
 * 
 * @example TypeScript Tokens
 * ```typescript
 * import * as amsterdamLight from '@portima/fe-lib/tokens/amsterdam/light';
 * ```
 * 
 * @example CSS Variables
 * ```typescript
 * import '@portima/fe-lib/css/amsterdam/light';
 * ```
 * 
 * See TOKENS.md for complete documentation.
 */

// Note: Token files are exported via package.json exports
// They are not re-exported here to avoid TypeScript compilation issues
// Access them directly via the package exports defined in package.json

export type { ThemeMode, ThemeName } from '../themes';

export * as amsterdamDark from '../../design-system/output/theme-amsterdam/dark/ts/tokens';
export * as amsterdamLight from '../../design-system/output/theme-amsterdam/light/ts/tokens';
export * as barcelonaDark from '../../design-system/output/theme-barcelona/dark/ts/tokens';
export * as barcelonaLight from '../../design-system/output/theme-barcelona/light/ts/tokens';
export * as berlinDark from '../../design-system/output/theme-berlin/dark/ts/tokens';
export * as berlinLight from '../../design-system/output/theme-berlin/light/ts/tokens';
export * as lisbonDark from '../../design-system/output/theme-lisbon/dark/ts/tokens';
export * as lisbonLight from '../../design-system/output/theme-lisbon/light/ts/tokens';
export * as londonDark from '../../design-system/output/theme-london/dark/ts/tokens';
export * as londonLight from '../../design-system/output/theme-london/light/ts/tokens';

