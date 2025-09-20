'use client';

import { createTheme } from '@mui/material/styles';

import { components } from './components';
import { palette } from './palette';
import { shadows } from './shadows';

const theme = createTheme({
    components,
    palette,
    shadows,
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1440,
        },
    },
    direction: 'ltr',
    shape: {
        borderRadius: 8,
    },
});

export default theme;
