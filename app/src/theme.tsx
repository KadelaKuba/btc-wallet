import { createTheme } from '@mui/material';

export default createTheme({
    typography: {
        fontFamily: [
            'Source Code Pro',
            'sans-serif',
        ].join(','),
    },
    colorSchemes: {
        light: {
            palette: {
                primary: {
                    main: '#F7931A',
                }
            }
        },
        dark: {
            palette: {
                primary: {
                    main: '#F7931A',
                }
            }
        },
    },
});