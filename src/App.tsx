// src/App.tsx
import TopNav from './layouts/TopNav';
import MainDisplayArea from './layouts/MainDisplayArea';
import ControlsArea from './layouts/ControlsArea';
import WheelOfFifthsArea from './layouts/WheelOfFifthsArea';
import { Box, CssBaseline } from '@mui/material';

function App() { // Standard function syntax is fine
  // Later, we'll add theme state here

  return (
    // ThemeProvider will wrap this later (see ThemeContext)
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <CssBaseline /> {/* Apply baseline styles */}
      <TopNav />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', padding: 2 }}>
        <MainDisplayArea />
        {/* This Box will manage the 50/50 split */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, marginTop: 2 }}>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <ControlsArea />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' } }}>
            <WheelOfFifthsArea />
          </Box>
        </Box>
      </Box>
      {/* Maybe a Footer later? */}
    </Box>
  );
}

export default App;