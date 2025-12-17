// Test 1: Import TypeScript tokens
import * as forestLight from "@jens-erven/fe-lib/tokens/forest/light";
import * as oceanLight from "@jens-erven/fe-lib/tokens/ocean/light";
import * as sunsetDark from "@jens-erven/fe-lib/tokens/sunset/dark";

// Test 2: Import CSS variables (need to be imported in a CSS-aware way)
// Import in index.css or main.tsx instead, or use require

export function TestTokensAndCSS() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Testing Design Tokens & CSS Variables</h2>

      {/* Test 1: TypeScript Tokens */}
      <div style={{ marginTop: "20px" }}>
        <h3>✅ 1. TypeScript Tokens Work!</h3>
        <p style={{ fontSize: "14px", color: "#666" }}>
          Imported from: <code>@jens-erven/fe-lib/tokens/ocean/light</code>
        </p>
        <div
          style={{
            backgroundColor: oceanLight.primary,
            color: oceanLight.primaryContrast,
            padding: "10px",
            borderRadius: oceanLight.borderRadius,
            marginBottom: "10px",
          }}
        >
          Primary: {oceanLight.primary}
        </div>
        <div
          style={{
            backgroundColor: sunsetDark.secondary,
            color: sunsetDark.secondaryContrast,
            padding: "10px",
            borderRadius: sunsetDark.borderRadius,
            marginBottom: "10px",
          }}
        >
          Sunset Dark Secondary: {sunsetDark.secondary}
        </div>
        <div
          style={{
            backgroundColor: forestLight.primary,
            color: forestLight.primaryContrast,
            padding: "10px",
            borderRadius: forestLight.borderRadius,
          }}
        >
          Forest Light Primary: {forestLight.primary}
        </div>
      </div>

      {/* Token Values Display */}
      <div
        style={{
          marginTop: "20px",
          backgroundColor: "#f5f5f5",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h3>📊 Token Values:</h3>
        <pre style={{ fontSize: "12px", overflow: "auto" }}>
          {JSON.stringify(
            {
              oceanLight: {
                primary: oceanLight.primary,
                primaryContrast: oceanLight.primaryContrast,
                secondary: oceanLight.secondary,
                backgroundDefault: oceanLight.backgroundDefault,
                spacingUnit: oceanLight.spacingUnit,
                borderRadius: oceanLight.borderRadius,
              },
              sunsetDark: {
                primary: sunsetDark.primary,
                primaryContrast: sunsetDark.primaryContrast,
                secondary: sunsetDark.secondary,
                backgroundDefault: sunsetDark.backgroundDefault,
                spacingUnit: sunsetDark.spacingUnit,
                borderRadius: sunsetDark.borderRadius,
              },
              forestLight: {
                primary: forestLight.primary,
                primaryContrast: forestLight.primaryContrast,
                secondary: forestLight.secondary,
                backgroundDefault: forestLight.backgroundDefault,
                spacingUnit: forestLight.spacingUnit,
                borderRadius: forestLight.borderRadius,
              },
            },
            null,
            2
          )}
        </pre>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#fff3cd",
          borderRadius: "8px",
        }}
      >
        <h3>ℹ️ CSS Variables & Tailwind CSS</h3>
        <p>To test CSS variables and Tailwind CSS:</p>
        <ol style={{ fontSize: "14px" }}>
          <li>
            <strong>CSS Variables:</strong> Import in main.tsx or index.css:
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "5px",
                marginTop: "5px",
              }}
            >
              import '@jens-erven/fe-lib/css/forest/light';
            </pre>
            Then use: <code>var(--primary)</code>, <code>var(--secondary)</code>
            , etc.
          </li>
          <li style={{ marginTop: "10px" }}>
            <strong>Tailwind CSS:</strong> Import in main.tsx or index.css:
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "5px",
                marginTop: "5px",
              }}
            >
              import '@jens-erven/fe-lib/css/tailwind';
            </pre>
            Then use classes: <code>bg-primary</code>,{" "}
            <code>text-primary-contrast</code>, etc.
          </li>
        </ol>
      </div>
    </div>
  );
}
