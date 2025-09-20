import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import theme from '@/theme';

export const metadata = {
    title: 'Lead Management App',
    description: 'Quovoy Coding Test',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider
                    disableTransitionOnChange
                    theme={theme}
                    defaultMode="light">
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
