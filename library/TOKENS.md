# Design Tokens Usage Guide

This library exports design tokens in multiple formats for maximum flexibility.

## 📦 Available Exports

### 1. TypeScript Tokens

Access raw token values directly in TypeScript/JavaScript:

```typescript
import { oceanLight, oceanDark } from '@jens-erven/fe-lib';

// Or import specific theme
import * as tokens from '@jens-erven/fe-lib/tokens/ocean/light';

console.log(tokens.primary); // "#0077be"
console.log(tokens.spacingUnit); // "8px"
```

**Available token imports:**
- `@jens-erven/fe-lib/tokens/ocean/light`
- `@jens-erven/fe-lib/tokens/ocean/dark`
- `@jens-erven/fe-lib/tokens/sunset/light`
- `@jens-erven/fe-lib/tokens/sunset/dark`
- `@jens-erven/fe-lib/tokens/forest/light`
- `@jens-erven/fe-lib/tokens/forest/dark`

### 2. CSS Variables

Import CSS files with custom properties:

```typescript
// Import in your entry file (main.tsx, App.tsx, etc.)
import '@jens-erven/fe-lib/css/ocean/light';

// Use in CSS
.my-component {
  background-color: var(--primary);
  color: var(--primary-contrast);
  border-radius: var(--border-radius);
  padding: var(--spacing-unit);
}
```

**Available CSS imports:**
- `@jens-erven/fe-lib/css/ocean/light`
- `@jens-erven/fe-lib/css/ocean/dark`
- `@jens-erven/fe-lib/css/sunset/light`
- `@jens-erven/fe-lib/css/sunset/dark`
- `@jens-erven/fe-lib/css/forest/light`
- `@jens-erven/fe-lib/css/forest/dark`

### 3. Tailwind CSS (Full Theme System)

Import the complete Tailwind CSS setup:

```typescript
// Import in your main CSS or entry file
import '@jens-erven/fe-lib/css/tailwind';

// Use theme classes in JSX
<div className="theme-theme-ocean">
  <button className="bg-primary text-primary-contrast rounded-[var(--radius-default)]">
    Themed Button
  </button>
</div>

// Toggle dark mode
<div className="theme-theme-ocean dark">
  {/* Dark mode colors will be applied */}
</div>
```

### 4. Material-UI Themes

Pre-configured Material-UI theme objects:

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { oceanLightTheme, themes } from '@jens-erven/fe-lib';

// Single theme
<ThemeProvider theme={oceanLightTheme}>
  <App />
</ThemeProvider>

// Dynamic switching
const theme = themes[themeName][mode];
<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

## 🎨 Token Reference

All themes include these tokens:

### Colors
- `primary` - Primary brand color
- `primaryContrast` - Text color on primary background
- `secondary` - Secondary brand color
- `secondaryContrast` - Text color on secondary background
- `backgroundDefault` - Default background color
- `backgroundPaper` - Card/paper background color
- `textPrimary` - Primary text color
- `textSecondary` - Secondary text color
- `error` - Error state color
- `warning` - Warning state color
- `info` - Info state color
- `success` - Success state color

### Layout
- `spacingUnit` - Base spacing unit (8px)
- `borderRadius` - Border radius (varies: 4px, 8px, or 12px)

## 🚀 Usage Examples

### Example 1: Styled Components

```typescript
import styled from 'styled-components';
import { oceanLight } from '@jens-erven/fe-lib';

const Button = styled.button`
  background-color: ${oceanLight.primary};
  color: ${oceanLight.primaryContrast};
  padding: ${oceanLight.spacingUnit};
  border-radius: ${oceanLight.borderRadius};
  
  &:hover {
    opacity: 0.9;
  }
`;
```

### Example 2: Emotion CSS

```typescript
import { css } from '@emotion/react';
import { sunsetLight } from '@jens-erven/fe-lib';

const buttonStyle = css`
  background-color: ${sunsetLight.primary};
  color: ${sunsetLight.primaryContrast};
  border-radius: ${sunsetLight.borderRadius};
`;
```

### Example 3: CSS Modules

```typescript
// Import CSS tokens
import '@jens-erven/fe-lib/css/forest/light';

// In your CSS module
.button {
  background-color: var(--primary);
  color: var(--primary-contrast);
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 2);
}
```

### Example 4: Inline Styles

```typescript
import { oceanDark } from '@jens-erven/fe-lib';

function MyComponent() {
  return (
    <div style={{
      backgroundColor: oceanDark.backgroundDefault,
      color: oceanDark.textPrimary,
      padding: oceanDark.spacingUnit,
    }}>
      Content
    </div>
  );
}
```

## 🎯 Best Practices

1. **For Material-UI apps**: Use the pre-configured theme objects
2. **For Tailwind projects**: Import the Tailwind CSS file
3. **For CSS-in-JS**: Import TypeScript tokens directly
4. **For CSS Modules**: Import CSS variable files
5. **For design systems**: Re-export tokens from your own design system layer

## 📚 More Information

See the main README for complete documentation on Material-UI theme integration and Storybook setup.
