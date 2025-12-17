/**
 * Design Tokens Export
 * 
 * This module provides direct access to design tokens for consuming applications.
 * 
 * Note: Raw token TypeScript/CSS files should be imported directly from package exports:
 * 
 * @example TypeScript Tokens
 * ```typescript
 * import * as oceanLight from '@portima/fe-lib/tokens/ocean/light';
 * ```
 * 
 * @example CSS Variables
 * ```typescript
 * import '@portima/fe-lib/css/ocean/light';
 * ```
 * 
 * See TOKENS.md for complete documentation.
 */

// Note: Token files are exported via package.json exports
// They are not re-exported here to avoid TypeScript compilation issues
// Access them directly via the package exports defined in package.json

export type { ThemeMode, ThemeName } from '../themes';

export * as forestDark from '../../design-system/output/theme-forest/dark/ts/tokens';
export * as forestLight from '../../design-system/output/theme-forest/light/ts/tokens';
export * as oceanDark from '../../design-system/output/theme-ocean/dark/ts/tokens';
export * as oceanLight from '../../design-system/output/theme-ocean/light/ts/tokens';
export * as sunsetDark from '../../design-system/output/theme-sunset/dark/ts/tokens';
export * as sunsetLight from '../../design-system/output/theme-sunset/light/ts/tokens';

