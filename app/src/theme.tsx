import { createTheme } from '@mui/material';

export default createTheme({
    typography: {
        fontFamily: [
            'Source Code Pro',
            'sans-serif',
        ].join(','),
    },
    colorSchemes: {
        light: true,
        dark: true,
    },
    palette: {
        primary: {
            main: '#003892',
        }
    }
});