import {
  Home
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import { ThemeModeToggle, ThemeSelector, useAppTheme, type ThemeName } from "@portima/fe-lib";
import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { MainContentShowcase } from "./components/showcase";


function App() {
  /* Theme management from URL params */
  const [searchParams] = useSearchParams();
  const { setTheme } = useAppTheme();
  
  // Set theme from URL parameter on mount and when it changes
  useEffect(() => {
    const themeParam = searchParams.get("theme");
    if (themeParam) {
      // Validate that it's a valid theme name
      const validThemes: ThemeName[] = ['amsterdam', 'barcelona', 'berlin', 'lisbon', 'london'];
      if (validThemes.includes(themeParam as ThemeName)) {
        setTheme(themeParam as ThemeName);
      }
    }
  }, [searchParams, setTheme]);

  return (
      

    <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* App Bar with Badges and Icons */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" sx={{ mr: 2 }}>
            <Home />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Material-UI Theme Showcase
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <ThemeSelector size="small"/>
            <ThemeModeToggle size="small"/>
          </Stack>
        </Toolbar>
      </AppBar>
      {/* Main Content */}
      <MainContentShowcase />
    </Box>
   
  );
}

export default App;

