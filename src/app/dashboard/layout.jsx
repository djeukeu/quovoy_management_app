'use client';

import React, { Fragment } from 'react';

import { Box, Container, GlobalStyles } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MainNavigation from '@/components/MainNavigation';
import SideNavigation from '@/components/SideNavigation';

const Layout = ({ children }) => {
    const theme = useTheme();

    return (
        <Fragment>
            <GlobalStyles
                styles={{
                    body: {
                        '--MainNav-height': '56px',
                        '--MainNav-zIndex': 1000,
                        '--SideNav-width': '280px',
                        '--SideNav-zIndex': 1100,
                        '--MobileNav-width': '320px',
                        '--MobileNav-zIndex': 1100,
                    },
                }}
            />
            <Box
                sx={{
                    bgcolor: theme.palette.background.default,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    minHeight: '100%',
                }}>
                <SideNavigation />
                <Box
                    sx={{
                        display: 'flex',
                        flex: '1 1 auto',
                        flexDirection: 'column',
                        pl: { lg: 'var(--SideNav-width)' },
                    }}>
                    <MainNavigation />
                    <main>
                        <Container maxWidth="xl" sx={{ py: '64px' }}>
                            {children}
                        </Container>
                    </main>
                </Box>
            </Box>
        </Fragment>
    );
};

export default Layout;
