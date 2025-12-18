import { Add, CloudUpload, Share, Visibility } from "@mui/icons-material";
import {
  Alert,
  AlertTitle,
  Breadcrumbs,
  Button,
  Container,
  Fab,
  Link,
  Paper,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { useState } from "react";
import {
  ButtonsActionsShowcase,
  CustomComponentsShowcase,
  DataDisplayShowcase,
  FeedbackNavigationShowcase,
  InputsFormsShowcase,
} from ".";

export function MainContentShowcase() {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link underline="hover" color="inherit" href="#">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="#">
          Components
        </Link>
        <Typography color="text.primary">Showcase</Typography>
      </Breadcrumbs>

      {/* Hero Section with Alerts */}
      <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: "background.paper" }}>
        <Typography variant="h3" component="h1" gutterBottom color="primary">
          🎨 Complete Material-UI Component Showcase
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          Explore all Material-UI components with live theme switching. Test all
          themese in both light and dark modes.
        </Typography>

        <Stack spacing={2} sx={{ mt: 3, mb: 3 }}>
          <Stack direction="row" spacing={2}>
            <Alert severity="success" sx={{ flex: 1 }}>
              <AlertTitle>Success</AlertTitle>
              All themes are loaded and ready to use!
            </Alert>
            <Alert severity="info" sx={{ flex: 1 }}>
              <AlertTitle>Info</AlertTitle>
              Switch themes using the selector in the top right corner.
            </Alert>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Alert severity="warning" sx={{ flex: 1 }}>
              <AlertTitle>Warning</AlertTitle>
              Some features are still in beta.
            </Alert>
            <Alert severity="error" sx={{ flex: 1 }}>
              <AlertTitle>Error</AlertTitle>
              This is how error messages will appear.
            </Alert>
          </Stack>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ mt: 3 }} flexWrap="wrap">
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Add />}
          >
            Get Started
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<Visibility />}
          >
            Learn More
          </Button>
          <Button
            variant="text"
            color="success"
            size="large"
            endIcon={<Share />}
          >
            Share
          </Button>
          <Fab color="primary" size="small" sx={{ ml: 2 }}>
            <Add />
          </Fab>
          <Fab color="secondary" size="small" variant="extended">
            <CloudUpload sx={{ mr: 1 }} />
            Upload
          </Fab>
        </Stack>
      </Paper>

      {/* Tabs Navigation */}
      <Paper sx={{ mb: 4 }}>
        <Tabs
          value={tabValue}
          onChange={(_, newValue) => setTabValue(newValue)}
          variant="scrollable"
        >
          <Tab label="Buttons & Actions" />
          <Tab label="Inputs & Forms" />
          <Tab label="Data Display" />
          <Tab label="Feedback & Navigation" />
          <Tab label="Custom Components" />
        </Tabs>
      </Paper>

      {/* Tab Panel 0: Buttons & Actions */}
      {tabValue === 0 && <ButtonsActionsShowcase />}

      {/* Tab Panel 1: Inputs & Forms */}
      {tabValue === 1 && <InputsFormsShowcase />}

      {/* Tab Panel 2: Data Display */}
      {tabValue === 2 && <DataDisplayShowcase />}

      {/* Tab Panel 3: Feedback & Navigation */}
      {tabValue === 3 && <FeedbackNavigationShowcase />}

      {/* Tab Panel 4: Custom Components */}
      {tabValue === 4 && <CustomComponentsShowcase />}
    </Container>
  );
}
