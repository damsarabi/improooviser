// src/themes/darkTheme.ts
import { createTheme, Theme } from '@mui/material/styles';

// Define your dark theme configuration
const darkTheme: Theme = createTheme({
  palette: {
    mode: 'dark',
    // You can customize colors further here, for example:
    // primary: {
    //   main: '#90caf9', // Lighter blue for dark mode
    // },
    // secondary: {
    //   main: '#f48fb1', // Lighter pink for dark mode
    // },
    // background: {
    //   default: '#121212', // Common dark background
    //   paper: '#1e1e1e',   // Slightly lighter dark for surfaces
    // },
    // text: {
    //   primary: '#ffffff',
    //   secondary: 'rgba(255, 255, 255, 0.7)',
    // }
  },
  // You can also customize typography, components, etc.
  // typography: {
  //   fontFamily: 'Roboto, Arial, sans-serif',
  // },
});

export default darkTheme;