import { ExpandMore, Mail, Person, Settings, Star } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

interface tableData {
  id: number;
  name: string;
  category: string;
  price: string;
  status: string;
}

export function DataDisplayShowcase() {
  const tableData: tableData[] = [
    {
      id: 1,
      name: "Product A",
      category: "Electronics",
      price: "$299",
      status: "In Stock",
    },
    {
      id: 2,
      name: "Product B",
      category: "Clothing",
      price: "$49",
      status: "Low Stock",
    },
    {
      id: 3,
      name: "Product C",
      category: "Books",
      price: "$19",
      status: "In Stock",
    },
    {
      id: 4,
      name: "Product D",
      category: "Home",
      price: "$89",
      status: "Out of Stock",
    },
  ];

  return (
    <Stack spacing={4}>
      {/* Cards */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Cards & Media
        </Typography>
        <Stack direction="row" spacing={3} sx={{ flexWrap: "wrap", gap: 3 }}>
          {["primary", "secondary", "success", "error", "warning", "info"].map(
            (color) => (
              <Box key={color} sx={{ flex: "1 1 300px", minWidth: "300px" }}>
                <Card elevation={3}>
                  <CardContent>
                    <Typography
                      variant="h6"
                      color={`${color}.main`}
                      gutterBottom
                    >
                      {color.charAt(0).toUpperCase() + color.slice(1)} Card
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This card demonstrates the {color} theme color palette
                      with various components.
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                      <Chip label={color} color={color as any} size="small" />
                      <Chip label="Tag" size="small" variant="outlined" />
                    </Stack>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color={color as any}>
                      Learn More
                    </Button>
                    <Button size="small" color={color as any}>
                      Action
                    </Button>
                  </CardActions>
                </Card>
              </Box>
            )
          )}
        </Stack>
      </Paper>

      {/* Lists */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Lists
        </Typography>
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="John Doe" secondary="Primary Color Avatar" />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem>
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "secondary.main" }}>
                <Mail />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Messages"
              secondary="Secondary Color Avatar"
            />
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
            <ListItemText
              primary="Settings"
              secondary="Configuration options"
            />
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
              <TableRow sx={{ bgcolor: "primary.main" }}>
                <TableCell sx={{ color: "primary.contrastText" }}>ID</TableCell>
                <TableCell sx={{ color: "primary.contrastText" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "primary.contrastText" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "primary.contrastText" }}>
                  Price
                </TableCell>
                <TableCell sx={{ color: "primary.contrastText" }}>
                  Status
                </TableCell>
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
                      color={
                        row.status === "In Stock"
                          ? "success"
                          : row.status === "Low Stock"
                          ? "warning"
                          : "error"
                      }
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
            <Avatar sx={{ bgcolor: "primary.main" }}>P</Avatar>
          </Badge>
          <Badge badgeContent={10} color="secondary">
            <Avatar sx={{ bgcolor: "secondary.main" }}>S</Avatar>
          </Badge>
          <Badge badgeContent={99} color="error">
            <Avatar sx={{ bgcolor: "error.main" }}>E</Avatar>
          </Badge>
          <Badge badgeContent="NEW" color="success">
            <Avatar sx={{ bgcolor: "success.main" }}>
              <Person />
            </Avatar>
          </Badge>
          <Badge variant="dot" color="warning">
            <Avatar sx={{ bgcolor: "warning.main" }}>
              <Mail />
            </Avatar>
          </Badge>
          <Badge
            overlap="circular"
            badgeContent={<Settings fontSize="small" />}
            color="info"
          >
            <Avatar sx={{ bgcolor: "info.main" }}>I</Avatar>
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
              This accordion demonstrates how content looks with the current
              theme applied. All colors adapt automatically when you switch
              themes.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color="secondary">Accordion 2 - Components</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Material-UI provides a comprehensive set of components that work
              seamlessly together.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography color="success.main">
              Accordion 3 - Customization
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">
              Every component can be customized to match your design
              requirements.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Stack>
  );
}
