import {
  AppBar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography
} from "@mui/material";
import { MaterialButton, ThemeModeToggle, ThemeSelector } from "@portima/fe-lib";
import { TestTokensAndCSS } from "./TestTokensAndCSS";

function App() {

  return (

      <Box sx={{ flexGrow: 1, minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* App Bar */}
        <AppBar position="static" >
          <Toolbar 
          className="">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Theme Showcase App
            </Typography>
            <Stack direction="row" spacing={2} alignItems="center">
              <ThemeSelector size="small"/>
              <ThemeModeToggle size="small"/>
            </Stack>
          </Toolbar>
        </AppBar>
        {/* Main Content */}
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          {/* Hero Section */}
          <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'background.paper' }}>
            <Typography variant="h3" component="h1" gutterBottom color="primary">
              Welcome to the Theme Showcase
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Explore our beautiful themes with Material-UI components. Switch between Ocean,
              Sunset, and Forest themes, and toggle between light and dark modes.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
              <Button variant="outlined" color="secondary" size="large">
                Learn More
              </Button>
            </Stack>
          </Paper>

          {/* Button Showcase */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Button Variants
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Standard Material-UI buttons with theme colors:
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3 }}>
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="success">
                Success
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
              <Button variant="contained" color="warning">
                Warning
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
            </Stack>

            <Typography variant="body2" color="text.secondary" paragraph>
              Custom MaterialButton component from library:
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap">
              <MaterialButton variant="contained" color="primary">
                Primary
              </MaterialButton>
              <MaterialButton variant="outlined" color="secondary">
                Outlined
              </MaterialButton>
              <MaterialButton variant="text" color="success">
                Text
              </MaterialButton>
              <MaterialButton variant="contained" color="error">
                Error
              </MaterialButton>
            </Stack>
          </Paper>

          {/* Cards Grid */}
          <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 2 }}>
            Feature Cards
          </Typography>
          <Stack direction="row" spacing={3} sx={{ flexWrap: 'wrap', gap: 3 }}>
            <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    🎨 Multiple Themes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Choose from Ocean, Sunset, and Forest themes, each with unique color palettes
                    designed for optimal user experience.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Box>

            <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="secondary" gutterBottom>
                    🌓 Dark Mode
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Seamlessly switch between light and dark modes for comfortable viewing in any
                    lighting condition.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="secondary">
                    Toggle Now
                  </Button>
                </CardActions>
              </Card>
            </Box>

            <Box sx={{ flex: '1 1 300px', minWidth: '300px' }}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" color="success.main" gutterBottom>
                    ⚡ Fast & Responsive
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Built with performance in mind, our components are optimized for speed and
                    responsiveness across all devices.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="success">
                    Explore
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Stack>

          {/* Color Palette Display */}
          <Paper elevation={2} sx={{ p: 3, mt: 4 }}>
            <Typography variant="h5" gutterBottom color="primary">
              Current Theme Colors
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mt: 2, flexWrap: 'wrap', gap: 2 }}>
              <Box
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  p: 2,
                  borderRadius: 1,
                  textAlign: 'center',
                  flex: '1 1 150px',
                  minWidth: '120px',
                }}
              >
                Primary
              </Box>
              <Box
                sx={{
                  bgcolor: 'secondary.main',
                  color: 'secondary.contrastText',
                  p: 2,
                  borderRadius: 1,
                  textAlign: 'center',
                  flex: '1 1 150px',
                  minWidth: '120px',
                }}
              >
                Secondary
              </Box>
              <Box
                sx={{
                  bgcolor: 'success.main',
                  color: 'success.contrastText',
                  p: 2,
                  borderRadius: 1,
                  textAlign: 'center',
                  flex: '1 1 150px',
                  minWidth: '120px',
                }}
              >
                Success
              </Box>
              <Box
                sx={{
                  bgcolor: 'error.main',
                  color: 'error.contrastText',
                  p: 2,
                  borderRadius: 1,
                  textAlign: 'center',
                  flex: '1 1 150px',
                  minWidth: '120px',
                }}
              >
                Error
              </Box>
              <Box
                sx={{
                  bgcolor: 'warning.main',
                  color: 'warning.contrastText',
                  p: 2,
                  borderRadius: 1,
                  textAlign: 'center',
                  flex: '1 1 150px',
                  minWidth: '120px',
                }}
              >
                Warning
              </Box>
              <Box
                sx={{
                  bgcolor: 'info.main',
                  color: 'info.contrastText',
                  p: 2,
                  borderRadius: 1,
                  textAlign: 'center',
                  flex: '1 1 150px',
                  minWidth: '120px',
                }}
              >
                Info
              </Box>
            </Stack>
          </Paper>

          {/* Token Test Section */}
          <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
            <TestTokensAndCSS />
          </Paper>
        </Container>
      </Box>

  );
}

export default App;

