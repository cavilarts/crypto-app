import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#232323",
      dark: "#002884",
    },
    secondary: {
      main: "#b453f5",
    },
    error: {
      main: "#e63a2b",
    },
  },
});

export default theme;
