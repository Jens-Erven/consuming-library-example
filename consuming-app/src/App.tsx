import {
  Add,
  CloudUpload,
  Delete,
  Edit,
  ExpandMore,
  Favorite,
  FavoriteBorder,
  Home,
  Mail,
  Notifications,
  Person,
  Print,
  Save,
  Search,
  Settings,
  Share,
  Star,
  StarBorder,
  ThumbUp,
  Visibility,
  VisibilityOff
} from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Alert,
  AlertTitle,
  AppBar,
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Chip,
  CircularProgress,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Fab,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  InputLabel,
  LinearProgress,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Snackbar,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Switch,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip,
  Typography
} from "@mui/material";
import { ThemeModeToggle, ThemeSelector } from "@portima/fe-lib";
import { useState } from "react";
import { TestTokensAndCSS } from "./TestTokensAndCSS";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(30);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [alignment, setAlignment] = useState("left");
  const [activeStep, setActiveStep] = useState(0);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectValue, setSelectValue] = useState("option1");
  const [autocompleteValue, setAutocompleteValue] = useState<string | null>(null);
  const [rating, setRating] = useState<number | null>(4);
  const [showPassword, setShowPassword] = useState(false);

  const autocompleteOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
  const tableData = [
    { id: 1, name: "Product A", category: "Electronics", price: "$299", status: "In Stock" },
    { id: 2, name: "Product B", category: "Clothing", price: "$49", status: "Low Stock" },
    { id: 3, name: "Product C", category: "Books", price: "$19", status: "In Stock" },
    { id: 4, name: "Product D", category: "Home", price: "$89", status: "Out of Stock" },
  ];

  const steps = ["Select Theme", "Configure Settings", "Preview", "Apply"];

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
            <Tooltip title="Search">
              <IconButton color="inherit">
                <Search />
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton color="inherit">
                <Badge badgeContent={4} color="error">
                  <Notifications />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="Messages">
              <IconButton color="inherit">
                <Badge badgeContent={12} color="secondary">
                  <Mail />
                </Badge>
              </IconButton>
            </Tooltip>
            <ThemeSelector size="small"/>
            <ThemeModeToggle size="small"/>
            <Tooltip title="Settings">
              <IconButton color="inherit">
                <Settings />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
        <LinearProgress variant="determinate" value={65} sx={{ height: 2 }} />
      </AppBar>

      {/* Main Content */}
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
        <Paper elevation={3} sx={{ p: 4, mb: 4, bgcolor: 'background.paper' }}>
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            🎨 Complete Material-UI Component Showcase
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Explore all Material-UI components with live theme switching. Test Ocean, Sunset, and Forest themes in both light and dark modes.
          </Typography>
          
          <Stack spacing={2} sx={{ mt: 3, mb: 3 }}>
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              All themes are loaded and ready to use!
            </Alert>
            <Alert severity="info">
              <AlertTitle>Info</AlertTitle>
              Switch themes using the selector in the top right corner.
            </Alert>
            <Alert severity="warning">
              <AlertTitle>Warning</AlertTitle>
              Some features are still in beta.
            </Alert>
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              This is how error messages will appear.
            </Alert>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 3 }} flexWrap="wrap">
            <Button variant="contained" color="primary" size="large" startIcon={<Add />}>
              Get Started
            </Button>
            <Button variant="outlined" color="secondary" size="large" startIcon={<Visibility />}>
              Learn More
            </Button>
            <Button variant="text" color="success" size="large" endIcon={<Share />}>
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
          <Tabs value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} variant="scrollable">
            <Tab label="Buttons & Actions" />
            <Tab label="Inputs & Forms" />
            <Tab label="Data Display" />
            <Tab label="Feedback & Navigation" />
          </Tabs>
        </Paper>

        {/* Tab Panel 0: Buttons & Actions */}
        {tabValue === 0 && (
          <Stack spacing={4}>
            {/* Button Variants */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Button Variants & Colors
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Contained Buttons:
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3, gap: 2 }}>
                <Button variant="contained" color="primary">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="contained" color="success">Success</Button>
                <Button variant="contained" color="error">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
              </Stack>

              <Typography variant="body2" color="text.secondary" paragraph>
                Outlined Buttons:
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3, gap: 2 }}>
                <Button variant="outlined" color="primary">Primary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>
                <Button variant="outlined" color="success">Success</Button>
                <Button variant="outlined" color="error">Error</Button>
                <Button variant="outlined" color="warning">Warning</Button>
                <Button variant="outlined" color="info">Info</Button>
              </Stack>

              <Typography variant="body2" color="text.secondary" paragraph>
                Text Buttons:
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ mb: 3, gap: 2 }}>
                <Button variant="text" color="primary">Primary</Button>
                <Button variant="text" color="secondary">Secondary</Button>
                <Button variant="text" color="success">Success</Button>
                <Button variant="text" color="error">Error</Button>
              </Stack>

              <Typography variant="body2" color="text.secondary" paragraph>
                Buttons with Icons:
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap" sx={{ gap: 2 }}>
                <Button variant="contained" startIcon={<Delete />} color="error">Delete</Button>
                <Button variant="contained" startIcon={<Save />} color="success">Save</Button>
                <Button variant="contained" startIcon={<Edit />} color="primary">Edit</Button>
                <Button variant="outlined" endIcon={<Print />} color="secondary">Print</Button>
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
                <IconButton color="primary"><Favorite /></IconButton>
                <IconButton color="secondary"><Mail /></IconButton>
                <IconButton color="success"><ThumbUp /></IconButton>
                <IconButton color="error"><Delete /></IconButton>
                <IconButton color="warning"><Star /></IconButton>
                <IconButton color="info"><Settings /></IconButton>
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
                <Chip avatar={<Avatar>M</Avatar>} label="With Avatar" color="primary" />
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
                onChange={(_, newAlignment) => newAlignment && setAlignment(newAlignment)}
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
                <Fab color="primary"><Add /></Fab>
                <Fab color="secondary"><Edit /></Fab>
                <Fab color="success" size="small"><Save /></Fab>
                <Fab color="error" variant="extended"><Delete sx={{ mr: 1 }} />Delete</Fab>
              </Stack>
            </Paper>
          </Stack>
        )}

        {/* Tab Panel 1: Inputs & Forms */}
        {tabValue === 1 && (
          <Stack spacing={4}>
            {/* Text Fields */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Text Fields
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Standard" variant="standard" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Filled" variant="filled" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Outlined" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Disabled" disabled variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="Error" error helperText="This field has an error" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField fullWidth label="With Helper Text" helperText="Some helpful information" variant="outlined" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      )
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="With Icon"
                    variant="outlined"
                    InputProps={{
                      startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Multiline" multiline rows={4} variant="outlined" />
                </Grid>
              </Grid>
            </Paper>

            {/* Select & Autocomplete */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Select & Autocomplete
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <FormControl fullWidth>
                    <InputLabel>Select Option</InputLabel>
                    <Select
                      value={selectValue}
                      label="Select Option"
                      onChange={(e) => setSelectValue(e.target.value)}
                    >
                      <MenuItem value="option1">Option 1</MenuItem>
                      <MenuItem value="option2">Option 2</MenuItem>
                      <MenuItem value="option3">Option 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Autocomplete
                    value={autocompleteValue}
                    onChange={(_, newValue) => setAutocompleteValue(newValue)}
                    options={autocompleteOptions}
                    renderInput={(params) => <TextField {...params} label="Autocomplete" />}
                  />
                </Grid>
              </Grid>
            </Paper>

            {/* Checkboxes, Radio, Switch */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Selection Controls
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Checkboxes:
                  </Typography>
                  <FormControlLabel control={<Checkbox checked={checkboxChecked} onChange={(e) => setCheckboxChecked(e.target.checked)} />} label="Default" />
                  <FormControlLabel control={<Checkbox defaultChecked color="primary" />} label="Primary" />
                  <FormControlLabel control={<Checkbox defaultChecked color="secondary" />} label="Secondary" />
                  <FormControlLabel control={<Checkbox defaultChecked color="success" />} label="Success" />
                  <FormControlLabel control={<Checkbox defaultChecked color="error" />} label="Error" />
                  <FormControlLabel control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />} label="Custom Icon" />
                </Grid>
                <Grid item xs={12} md={4}>
                  <FormControl>
                    <FormLabel>Radio Group</FormLabel>
                    <RadioGroup value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                      <FormControlLabel value="option1" control={<Radio />} label="Option 1" />
                      <FormControlLabel value="option2" control={<Radio color="primary" />} label="Option 2" />
                      <FormControlLabel value="option3" control={<Radio color="secondary" />} label="Option 3" />
                      <FormControlLabel value="option4" control={<Radio color="success" />} label="Option 4" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    Switches:
                  </Typography>
                  <FormControlLabel control={<Switch checked={switchChecked} onChange={(e) => setSwitchChecked(e.target.checked)} />} label="Default" />
                  <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary" />
                  <FormControlLabel control={<Switch defaultChecked color="secondary" />} label="Secondary" />
                  <FormControlLabel control={<Switch defaultChecked color="success" />} label="Success" />
                  <FormControlLabel control={<Switch defaultChecked color="error" />} label="Error" />
                </Grid>
              </Grid>
            </Paper>

            {/* Sliders & Rating */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Sliders & Rating
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Default Slider
                  </Typography>
                  <Slider value={sliderValue} onChange={(_, value) => setSliderValue(value as number)} valueLabelDisplay="auto" />
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mt: 3 }}>
                    Primary Color Slider
                  </Typography>
                  <Slider defaultValue={50} color="primary" valueLabelDisplay="auto" />
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mt: 3 }}>
                    Secondary Color Slider
                  </Typography>
                  <Slider defaultValue={70} color="secondary" valueLabelDisplay="auto" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Rating Component
                  </Typography>
                  <Rating value={rating} onChange={(_, value) => setRating(value)} size="large" />
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mt: 3 }}>
                    Custom Icon Rating
                  </Typography>
                  <Rating
                    defaultValue={3}
                    icon={<Star fontSize="inherit" />}
                    emptyIcon={<StarBorder fontSize="inherit" />}
                  />
                  
                  <Typography variant="body2" color="text.secondary" gutterBottom sx={{ mt: 3 }}>
                    Heart Rating
                  </Typography>
                  <Rating
                    defaultValue={4}
                    icon={<Favorite fontSize="inherit" />}
                    emptyIcon={<FavoriteBorder fontSize="inherit" />}
                  />
                </Grid>
              </Grid>
            </Paper>
          </Stack>
        )}

        {/* Tab Panel 2: Data Display */}
        {tabValue === 2 && (
          <Stack spacing={4}>
            {/* Cards */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Cards & Media
              </Typography>
              <Grid container spacing={3}>
                {["primary", "secondary", "success", "error", "warning", "info"].map((color) => (
                  <Grid item xs={12} sm={6} md={4} key={color}>
                    <Card elevation={3}>
                      <CardContent>
                        <Typography variant="h6" color={`${color}.main`} gutterBottom>
                          {color.charAt(0).toUpperCase() + color.slice(1)} Card
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          This card demonstrates the {color} theme color palette with various components.
                        </Typography>
                        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                          <Chip label={color} color={color as any} size="small" />
                          <Chip label="Tag" size="small" variant="outlined" />
                        </Stack>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color={color as any}>Learn More</Button>
                        <Button size="small" color={color as any}>Action</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Lists */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Lists
              </Typography>
              <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main' }}><Person /></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="John Doe" secondary="Primary Color Avatar" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'secondary.main' }}><Mail /></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary="Messages" secondary="Secondary Color Avatar" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <ListItemIcon>
                    <Star color="warning" />
                  </ListItemIcon>
                  <ListItemText primary="Favorites" secondary="With icon" />
                </ListItem>
                <Divider component="li" />
                <ListItem>
                  <ListItemIcon>
                    <Settings color="info" />
                  </ListItemIcon>
                  <ListItemText primary="Settings" secondary="Configuration options" />
                </ListItem>
              </List>
            </Paper>

            {/* Table */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Data Table
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow sx={{ bgcolor: 'primary.main' }}>
                      <TableCell sx={{ color: 'primary.contrastText' }}>ID</TableCell>
                      <TableCell sx={{ color: 'primary.contrastText' }}>Name</TableCell>
                      <TableCell sx={{ color: 'primary.contrastText' }}>Category</TableCell>
                      <TableCell sx={{ color: 'primary.contrastText' }}>Price</TableCell>
                      <TableCell sx={{ color: 'primary.contrastText' }}>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.id} hover>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.category}</TableCell>
                        <TableCell>{row.price}</TableCell>
                        <TableCell>
                          <Chip
                            label={row.status}
                            color={row.status === "In Stock" ? "success" : row.status === "Low Stock" ? "warning" : "error"}
                            size="small"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* Avatars & Badges */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Avatars & Badges
              </Typography>
              <Stack direction="row" spacing={3} flexWrap="wrap" sx={{ gap: 3 }}>
                <Badge badgeContent={4} color="primary">
                  <Avatar sx={{ bgcolor: 'primary.main' }}>P</Avatar>
                </Badge>
                <Badge badgeContent={10} color="secondary">
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>S</Avatar>
                </Badge>
                <Badge badgeContent={99} color="error">
                  <Avatar sx={{ bgcolor: 'error.main' }}>E</Avatar>
                </Badge>
                <Badge badgeContent="NEW" color="success">
                  <Avatar sx={{ bgcolor: 'success.main' }}><Person /></Avatar>
                </Badge>
                <Badge variant="dot" color="warning">
                  <Avatar sx={{ bgcolor: 'warning.main' }}><Mail /></Avatar>
                </Badge>
                <Badge overlap="circular" badgeContent={<Settings fontSize="small" />} color="info">
                  <Avatar sx={{ bgcolor: 'info.main' }}>I</Avatar>
                </Badge>
              </Stack>
            </Paper>

            {/* Accordions */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 2 }}>
                Accordions
              </Typography>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color="primary">Accordion 1 - Theme Colors</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    This accordion demonstrates how content looks with the current theme applied.
                    All colors adapt automatically when you switch themes.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color="secondary">Accordion 2 - Components</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    Material-UI provides a comprehensive set of components that work seamlessly together.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary expandIcon={<ExpandMore />}>
                  <Typography color="success.main">Accordion 3 - Customization</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography color="text.secondary">
                    Every component can be customized to match your design requirements.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Paper>
          </Stack>
        )}

        {/* Tab Panel 3: Feedback & Navigation */}
        {tabValue === 3 && (
          <Stack spacing={4}>
            {/* Progress Indicators */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom color="primary">
                Progress Indicators
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Linear Progress:
                  </Typography>
                  <Stack spacing={2}>
                    <LinearProgress />
                    <LinearProgress color="secondary" />
                    <LinearProgress color="success" variant="determinate" value={50} />
                    <LinearProgress color="error" variant="determinate" value={75} />
                    <LinearProgress color="warning" variant="buffer" value={60} valueBuffer={80} />
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    Circular Progress:
                  </Typography>
                  <Stack direction="row" spacing={3}>
                    <CircularProgress />
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" variant="determinate" value={75} />
                    <CircularProgress color="error" variant="determinate" value={50} />
                    <CircularProgress color="warning" variant="determinate" value={25} />
                  </Stack>
                </Grid>
              </Grid>
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
                <Button variant="contained" color="secondary" onClick={() => setSnackbarOpen(true)}>
                  Show Snackbar
                </Button>
                <Button variant="contained" color="success" onClick={(e) => setAnchorEl(e.currentTarget)}>
                  Open Menu
                </Button>
              </Stack>

              <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
                <DialogTitle>Theme Dialog</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    This dialog demonstrates how dialogs appear with the current theme.
                    Notice how all colors and typography adapt to the selected theme.
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
                  <Button color="secondary" size="small" onClick={() => setSnackbarOpen(false)}>
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
              <Grid container spacing={2} sx={{ mt: 1 }}>
                {["primary", "secondary", "success", "error", "warning", "info"].map((color) => (
                  <Grid item xs={6} sm={4} md={2} key={color}>
                    <Box
                      sx={{
                        bgcolor: `${color}.main`,
                        color: `${color}.contrastText`,
                        p: 3,
                        borderRadius: 2,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        boxShadow: 2,
                      }}
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)}
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* Token Test Section */}
            <Paper elevation={2} sx={{ p: 3 }}>
              <TestTokensAndCSS />
            </Paper>
          </Stack>
        )}
      </Container>

      {/* Speed Dial */}
      <SpeedDial
        ariaLabel="SpeedDial"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction icon={<Save />} tooltipTitle="Save" />
        <SpeedDialAction icon={<Print />} tooltipTitle="Print" />
        <SpeedDialAction icon={<Share />} tooltipTitle="Share" />
        <SpeedDialAction icon={<Edit />} tooltipTitle="Edit" />
      </SpeedDial>
    </Box>
  );
}

export default App;

