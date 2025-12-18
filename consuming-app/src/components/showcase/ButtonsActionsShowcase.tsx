import {
  Add,
  Delete,
  Edit,
  Favorite,
  Mail,
  Print,
  Save,
  Settings,
  Star,
  ThumbUp,
} from "@mui/icons-material";
import {
  Avatar,
  Button,
  Chip,
  Fab,
  IconButton,
  Paper,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function ButtonsActionsShowcase() {
  const [alignment, setAlignment] = useState<string>("left");

  return (
    <Stack spacing={4}>
      {/* Button Variants */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Button Variants & Colors
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Contained Buttons:
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          sx={{ mb: 3, gap: 2 }}
        >
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
          Outlined Buttons:
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          sx={{ mb: 3, gap: 2 }}
        >
          <Button variant="outlined" color="primary">
            Primary
          </Button>
          <Button variant="outlined" color="secondary">
            Secondary
          </Button>
          <Button variant="outlined" color="success">
            Success
          </Button>
          <Button variant="outlined" color="error">
            Error
          </Button>
          <Button variant="outlined" color="warning">
            Warning
          </Button>
          <Button variant="outlined" color="info">
            Info
          </Button>
        </Stack>

        <Typography variant="body2" color="text.secondary" paragraph>
          Text Buttons:
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          flexWrap="wrap"
          sx={{ mb: 3, gap: 2 }}
        >
          <Button variant="text" color="primary">
            Primary
          </Button>
          <Button variant="text" color="secondary">
            Secondary
          </Button>
          <Button variant="text" color="success">
            Success
          </Button>
          <Button variant="text" color="error">
            Error
          </Button>
        </Stack>

        <Typography variant="body2" color="text.secondary" paragraph>
          Buttons with Icons:
        </Typography>
        <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 2 }}>
          <Button variant="contained" startIcon={<Delete />} color="error">
            Delete
          </Button>
          <Button variant="contained" startIcon={<Save />} color="success">
            Save
          </Button>
          <Button variant="contained" startIcon={<Edit />} color="primary">
            Edit
          </Button>
          <Button variant="outlined" endIcon={<Print />} color="secondary">
            Print
          </Button>
        </Stack>
      </Paper>

      {/* Icon Buttons & Chips */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Icon Buttons & Chips
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Icon Buttons:
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
          <IconButton color="primary">
            <Favorite />
          </IconButton>
          <IconButton color="secondary">
            <Mail />
          </IconButton>
          <IconButton color="success">
            <ThumbUp />
          </IconButton>
          <IconButton color="error">
            <Delete />
          </IconButton>
          <IconButton color="warning">
            <Star />
          </IconButton>
          <IconButton color="info">
            <Settings />
          </IconButton>
        </Stack>

        <Typography variant="body2" color="text.secondary" paragraph>
          Chips:
        </Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ gap: 1 }}>
          <Chip label="Default" />
          <Chip label="Primary" color="primary" />
          <Chip label="Secondary" color="secondary" />
          <Chip label="Success" color="success" />
          <Chip label="Error" color="error" />
          <Chip label="Warning" color="warning" />
          <Chip label="Info" color="info" />
          <Chip label="Clickable" color="primary" onClick={() => {}} />
          <Chip label="Deletable" color="secondary" onDelete={() => {}} />
          <Chip
            avatar={<Avatar>M</Avatar>}
            label="With Avatar"
            color="primary"
          />
          <Chip icon={<Star />} label="With Icon" color="success" />
        </Stack>
      </Paper>

      {/* Toggle Buttons & FAB */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Toggle Buttons & Floating Action Buttons
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          Toggle Button Group:
        </Typography>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={(_, newAlignment) =>
            newAlignment && setAlignment(newAlignment)
          }
          sx={{ mb: 3 }}
        >
          <ToggleButton value="left">Left</ToggleButton>
          <ToggleButton value="center">Center</ToggleButton>
          <ToggleButton value="right">Right</ToggleButton>
          <ToggleButton value="justify">Justify</ToggleButton>
        </ToggleButtonGroup>

        <Typography variant="body2" color="text.secondary" paragraph>
          Floating Action Buttons:
        </Typography>
        <Stack direction="row" spacing={2}>
          <Fab color="primary">
            <Add />
          </Fab>
          <Fab color="secondary">
            <Edit />
          </Fab>
          <Fab color="success" size="small">
            <Save />
          </Fab>
          <Fab color="error" variant="extended">
            <Delete sx={{ mr: 1 }} />
            Delete
          </Fab>
        </Stack>
      </Paper>
    </Stack>
  );
}
