/// <reference types="vite/client" />

// Type declarations for CSS imports from @portima/fe-lib
declare module '@portima/fe-lib/css/tailwind' {
  const content: string;
  export default content;
}

declare module '@portima/fe-lib/css/*/light' {
  const content: string;
  export default content;
}

declare module '@portima/fe-lib/css/*/dark' {
  const content: string;
  export default content;
}

declare module '@portima/fe-lib/styles.css' {
  const content: string;
  export default content;
}
