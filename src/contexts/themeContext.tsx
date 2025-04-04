// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useMemo, ReactNode } from 'react'; // Import ReactNode
import { ThemeProvider } from '@mui/material/styles'; // createTheme directly here ok too
import lightTheme from '../themes/lightTheme'; // Assuming these are defined
import darkTheme from '../themes/darkTheme';   // Assuming these are defined

interface ColorModeContextType { // Define type for context value
    toggleColorMode: () => void;
}

// Provide a default value matching the type
export const ColorModeContext = createContext<ColorModeContextType>({
    toggleColorMode: () => { console.warn('toggleColorMode function not yet initialized'); },
 });


interface AppThemeProviderProps { // Define type for props
    children: ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({ children }) => { // Use FC and props type
    const [mode, setMode] = useState<'light' | 'dark'>('light'); // Type the state

    const colorMode = useMemo<ColorModeContextType>( // Type the memoized value
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    // Ensure themes are properly typed Theme objects if imported, or define inline
    const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};