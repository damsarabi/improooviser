// src/themes/lightTheme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Define your light theme configuration
const lightTheme: Theme = createTheme({
  palette: {
    mode: 'light',
    // You can customize colors further here, for example:
    // primary: {
    //   main: '#1976d2', // Default MUI blue
    // },
    // secondary: {
    //   main: '#dc004e', // Default MUI pink
    // },
    // background: {
    //   default: '#ffffff',
    //   paper: '#f5f5f5',
    // },
  },
  // You can also customize typography, components, etc.
  // typography: {
  //   fontFamily: 'Roboto, Arial, sans-serif',
  // },
});

export default lightTheme;