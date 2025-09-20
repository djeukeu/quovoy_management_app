'use client';

import React from 'react';

import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RouterLink from 'next/link';
import { usePathname } from 'next/navigation';

import { navigationItems } from '@/navigationItems';
import { paths } from '@/paths';

const NavItem = ({
    disabled,
    external,
    href,
    icon,
    matcher,
    pathname,
    title,
}) => {
    return (
        <li>
            <Box
                {...(href
                    ? {
                          component: external ? 'a' : RouterLink,
                          href,
                          target: external ? '_blank' : undefined,
                          rel: external ? 'noreferrer' : undefined,
                      }
                    : { role: 'button' })}
                sx={{
                    alignItems: 'center',
                    borderRadius: 1,
                    color: 'var(--NavItem-color)',
                    cursor: 'pointer',
                    display: 'flex',
                    flex: '0 0 auto',
                    gap: 1,
                    p: '6px 16px',
                    position: 'relative',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                }}>
                <Box sx={{ flex: '1 1 auto' }}>
                    <Typography
                        component="span"
                        sx={{
                            color: 'inherit',
                            fontSize: '0.875rem',
                            fontWeight: 500,
                            lineHeight: '28px',
                        }}>
                        {title}
                    </Typography>
                </Box>
            </Box>
        </li>
    );
};

const renderNavItems = ({ items = [], pathname }) => {
    const children = items.reduce((acc, curr) => {
        const { key, ...item } = curr;

        acc.push(<NavItem key={key} pathname={pathname} {...item} />);

        return acc;
    }, []);

    return (
        <Stack
            component="ul"
            spacing={1}
            sx={{ listStyle: 'none', m: 0, p: 0 }}>
            {children}
        </Stack>
    );
};

const SideNavigation = () => {
    const pathname = usePathname();
    const theme = useTheme();

    return (
        <Box
            sx={{
                '--SideNav-background': theme.palette.neutral[900],
                '--SideNav-color': theme.palette.common.white,
                '--NavItem-color': theme.palette.neutral[300],
                '--NavItem-hover-background': 'rgba(255, 255, 255, 0.04)',
                '--NavItem-active-background': theme.palette.primary.main,
                '--NavItem-active-color': theme.palette.primary.contrastText,
                '--NavItem-disabled-color': theme.palette.neutral[500],
                '--NavItem-icon-color': theme.palette.neutral[400],
                '--NavItem-icon-active-color':
                    theme.palette.primary.contrastText,
                '--NavItem-icon-disabled-color': theme.palette.neutral[600],
                bgcolor: 'var(--SideNav-background)',
                color: 'var(--SideNav-color)',
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                height: '100%',
                left: 0,
                maxWidth: '100%',
                position: 'fixed',
                scrollbarWidth: 'none',
                top: 0,
                width: 'var(--SideNav-width)',
                zIndex: 'var(--SideNav-zIndex)',
                '&::-webkit-scrollbar': { display: 'none' },
            }}>
            <Stack spacing={2} sx={{ p: 3 }}>
                <Box
                    sx={{
                        alignItems: 'center',
                        backgroundColor: theme.palette.neutral[900],
                        border: `1px solid ${theme.palette.neutral[700]}`,
                        borderRadius: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        p: '4px 12px',
                    }}>
                    <Box sx={{ flex: '1 1 auto' }}>
                        <Typography
                            color={theme.palette.neutral[400]}
                            variant="body2">
                            Management App
                        </Typography>
                        <Typography color="inherit" variant="subtitle1">
                            {process.env.NEXT_PUBLIC_ENV}
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <Divider sx={{ borderColor: theme.palette.neutral[700] }} />
            <Box component="nav" sx={{ flex: '1 1 auto', p: '12px' }}>
                {renderNavItems({ pathname, items: navigationItems })}
            </Box>
        </Box>
    );
};

export default SideNavigation;
