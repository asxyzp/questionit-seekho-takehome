// IMPORTING PACKAGES/MODULES
import { createTheme } from '@mui/material/styles';

/**
 * @name LightTheme
 * @description LIGHT THEME OBJECT
 * @returns {Object} Theme
 */
const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#2086c3',
        },
        secondary: {
            main: '#f766a1',
        },
        error: {
            main: '#f57030',
        },
    },
    typography: {
        fontFamily: "'Akshar', sans-serif",
    },
});

export default LightTheme;