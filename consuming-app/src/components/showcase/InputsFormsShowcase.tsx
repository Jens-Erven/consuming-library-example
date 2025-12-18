import {
  Favorite,
  FavoriteBorder,
  Search,
  Star,
  StarBorder,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Rating,
  Select,
  Slider,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function InputsFormsShowcase() {
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [switchChecked, setSwitchChecked] = useState(true);
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(30);
  const [selectValue, setSelectValue] = useState("option1");
  const [autocompleteValue, setAutocompleteValue] = useState<string | null>(
    null
  );
  const [rating, setRating] = useState<number | null>(4);
  const [showPassword, setShowPassword] = useState(false);

  const autocompleteOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];

  return (
    <Stack spacing={4}>
      {/* Text Fields */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Text Fields
        </Typography>
        <Stack spacing={3}>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <TextField fullWidth label="Standard" variant="standard" />
            <TextField fullWidth label="Filled" variant="filled" />
          </Stack>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <TextField fullWidth label="Outlined" variant="outlined" />
            <TextField fullWidth label="Disabled" disabled variant="outlined" />
          </Stack>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <TextField
              fullWidth
              label="Error"
              error
              helperText="This field has an error"
              variant="outlined"
            />
            <TextField
              fullWidth
              label="With Helper Text"
              helperText="Some helpful information"
              variant="outlined"
            />
          </Stack>
          <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              fullWidth
              label="With Icon"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <Search sx={{ mr: 1, color: "text.secondary" }} />
                ),
              }}
            />
          </Stack>
          <TextField
            fullWidth
            label="Multiline"
            multiline
            rows={4}
            variant="outlined"
          />
        </Stack>
      </Paper>

      {/* Select & Autocomplete */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Select & Autocomplete
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
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
          <Autocomplete
            fullWidth
            value={autocompleteValue}
            onChange={(_, newValue) => setAutocompleteValue(newValue)}
            options={autocompleteOptions}
            renderInput={(params) => (
              <TextField {...params} label="Autocomplete" />
            )}
          />
        </Stack>
      </Paper>

      {/* Checkboxes, Radio, Switch */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Selection Controls
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" paragraph>
              Checkboxes:
            </Typography>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkboxChecked}
                  onChange={(e) => setCheckboxChecked(e.target.checked)}
                />
              }
              label="Default"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="primary" />}
              label="Primary"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="secondary" />}
              label="Secondary"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="success" />}
              label="Success"
            />
            <FormControlLabel
              control={<Checkbox defaultChecked color="error" />}
              label="Error"
            />
            <FormControlLabel
              control={
                <Checkbox
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              }
              label="Custom Icon"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <FormControl>
              <FormLabel>Radio Group</FormLabel>
              <RadioGroup
                value={radioValue}
                onChange={(e) => setRadioValue(e.target.value)}
              >
                <FormControlLabel
                  value="option1"
                  control={<Radio />}
                  label="Option 1"
                />
                <FormControlLabel
                  value="option2"
                  control={<Radio color="primary" />}
                  label="Option 2"
                />
                <FormControlLabel
                  value="option3"
                  control={<Radio color="secondary" />}
                  label="Option 3"
                />
                <FormControlLabel
                  value="option4"
                  control={<Radio color="success" />}
                  label="Option 4"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" paragraph>
              Switches:
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={switchChecked}
                  onChange={(e) => setSwitchChecked(e.target.checked)}
                />
              }
              label="Default"
            />
            <FormControlLabel
              control={<Switch defaultChecked color="primary" />}
              label="Primary"
            />
            <FormControlLabel
              control={<Switch defaultChecked color="secondary" />}
              label="Secondary"
            />
            <FormControlLabel
              control={<Switch defaultChecked color="success" />}
              label="Success"
            />
            <FormControlLabel
              control={<Switch defaultChecked color="error" />}
              label="Error"
            />
          </Box>
        </Stack>
      </Paper>

      {/* Sliders & Rating */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography variant="h5" gutterBottom color="primary">
          Sliders & Rating
        </Typography>
        <Stack direction={{ xs: "column", md: "row" }} spacing={3}>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Default Slider
            </Typography>
            <Slider
              value={sliderValue}
              onChange={(_, value) => setSliderValue(value as number)}
              valueLabelDisplay="auto"
            />

            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Primary Color Slider
            </Typography>
            <Slider
              defaultValue={50}
              color="primary"
              valueLabelDisplay="auto"
            />

            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Secondary Color Slider
            </Typography>
            <Slider
              defaultValue={70}
              color="secondary"
              valueLabelDisplay="auto"
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Rating Component
            </Typography>
            <Rating
              value={rating}
              onChange={(_, value) => setRating(value)}
              size="large"
            />

            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Custom Icon Rating
            </Typography>
            <Rating
              defaultValue={3}
              icon={<Star fontSize="inherit" />}
              emptyIcon={<StarBorder fontSize="inherit" />}
            />

            <Typography
              variant="body2"
              color="text.secondary"
              gutterBottom
              sx={{ mt: 3 }}
            >
              Heart Rating
            </Typography>
            <Rating
              defaultValue={4}
              icon={<Favorite fontSize="inherit" />}
              emptyIcon={<FavoriteBorder fontSize="inherit" />}
            />
          </Box>
        </Stack>
      </Paper>
    </Stack>
  );
}
