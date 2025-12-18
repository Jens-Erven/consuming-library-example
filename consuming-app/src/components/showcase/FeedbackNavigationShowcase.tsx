import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  LinearProgress,
  Menu,
  MenuItem,
  Paper,
  Snackbar,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function FeedbackNavigationShowcase() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const steps: string[] = [
    "Select Theme",
    "Configure Settings",
    "Preview",
    "Apply",
  ];

  return (
    <Stack spacing={4}>
      {/* Progress Indicators */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Progress Indicators
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Linear Progress:
            </Typography>
            <Stack spacing={2}>
              <LinearProgress />
              <LinearProgress color="secondary" />
              <LinearProgress
                color="success"
                variant="determinate"
                value={50}
              />
              <LinearProgress color="error" variant="determinate" value={75} />
              <LinearProgress
                color="warning"
                variant="buffer"
                value={60}
                valueBuffer={80}
              />
            </Stack>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Circular Progress:
            </Typography>
            <Stack direction="row" spacing={3}>
              <CircularProgress />
              <CircularProgress color="secondary" />
              <CircularProgress
                color="success"
                variant="determinate"
                value={75}
              />
              <CircularProgress
                color="error"
                variant="determinate"
                value={50}
              />
              <CircularProgress
                color="warning"
                variant="determinate"
                value={25}
              />
            </Stack>
          </Box>
        </Stack>
      </Paper>

      {/* Stepper */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Stepper
        </Typography>
        <Stepper activeStep={activeStep} sx={{ mt: 2 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
          <Button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => prev - 1)}
            variant="outlined"
          >
            Back
          </Button>
          <Button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Stack>
      </Paper>

      {/* Dialog & Snackbar */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Dialog & Snackbar
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={() => setDialogOpen(true)}>
            Open Dialog
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setSnackbarOpen(true)}
          >
            Show Snackbar
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Open Menu
          </Button>
        </Stack>

        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
          <DialogTitle>Theme Dialog</DialogTitle>
          <DialogContent>
            <DialogContentText>
              This dialog demonstrates how dialogs appear with the current
              theme. Notice how all colors and typography adapt to the selected
              theme.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button onClick={() => setDialogOpen(false)} variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={3000}
          onClose={() => setSnackbarOpen(false)}
          message="This is a snackbar notification"
          action={
            <Button
              color="secondary"
              size="small"
              onClick={() => setSnackbarOpen(false)}
            >
              Close
            </Button>
          }
        />

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Settings</MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>Logout</MenuItem>
        </Menu>
      </Paper>

      {/* Color Palette Display */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Current Theme Color Palette
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ mt: 1, flexWrap: "wrap", gap: 2 }}
        >
          {["primary", "secondary", "success", "error", "warning", "info"].map(
            (color) => (
              <Box
                key={color}
                sx={{
                  bgcolor: `${color}.main`,
                  color: `${color}.contrastText`,
                  p: 3,
                  borderRadius: 2,
                  textAlign: "center",
                  fontWeight: "bold",
                  boxShadow: 2,
                  flex: "1 1 150px",
                  minWidth: "120px",
                }}
              >
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </Box>
            )
          )}
        </Stack>
      </Paper>
    </Stack>
  );
}
