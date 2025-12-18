import { createTheme, Theme } from "@mui/material";

export type BrioThemeName = "Amsterdam" | "Lisbon" | "London" | "Barcelona" | "Berlin";

export const brioThemes: Record<BrioThemeName, Theme> = {
  Amsterdam: createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: { main: "#009996" },
          secondary: { main: "#FAD600" },
        },
      },
      dark: {
        palette: {
          primary: { main: "#009996" },
          secondary: { main: "#FAD600" },
        },
      },
    },
    typography: {
      fontFamily: "sans-serif",
      fontSize: 12,
    },
  }),
  Barcelona: createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: { main: "#006E91" },
          secondary: { main: "#F28E02", contrastText: "#FFFFFF" },

        },
      },
      dark: {
        palette: {
          primary: { main: "#006E91" },
          secondary: { main: "#F28E02", contrastText: "#FFFFFF" },
        },
      },
    },
    typography: {
      fontFamily: "sans-serif",
      fontSize: 12,
    },
  }),
  Berlin: createTheme({
    colorSchemes: {
      light: {
        palette: {
          mode: "light",
          primary: { main: "#C02D19" },
          secondary: { main: "#3BB0D1", contrastText: "#FFFFFF" },
        },
      },
      dark: {
        palette: {
          mode: "light",
          primary: { main: "#C02D19" },
          secondary: { main: "#3BB0D1", contrastText: "#FFFFFF" },
        },
      }
    },
    typography: {
      fontFamily: "sans-serif",
      fontSize: 12,
    },

  }),
  Lisbon: createTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: { main: "#FA965A", contrastText: "#FFFFFF" },
          secondary: { main: "#009996" },
        },
      },
      dark: {
        palette: {
          primary: { main: "#FA965A", contrastText: "#FFFFFF" },
          secondary: { main: "#009996" },
        },
      }
    },
    typography: {
      fontFamily: "sans-serif",
      fontSize: 12,
    },

  }),
  London: createTheme({
    colorSchemes: {
      light: {
        palette: {
          mode: "light",
          primary: { main: "#686049" },
          secondary: { main: "#70B476", contrastText: "#FFFFFF" },
        },
      },
      dark: {
        palette: {
          mode: "light",
          primary: { main: "#686049" },
          secondary: { main: "#70B476", contrastText: "#FFFFFF" },
        },
      }
    },
    typography: {
      fontFamily: "sans-serif",
      fontSize: 12,
    },
  }),
};
