'use client';

import React, { useState } from 'react';

import GroupIcon from '@mui/icons-material/Group';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar, Box, IconButton, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import MobileNavigation from '../MobileNavigation';

import { usePopover } from '@/hooks';

const MainNavigation = () => {
    const [openNav, setOpenNav] = useState(false);
    const theme = useTheme();

    const userPopover = usePopover();

    return (
        <React.Fragment>
            <Box
                component="header"
                sx={{
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    backgroundColor: theme.palette.background.paper,
                    position: 'sticky',
                    top: 0,
                    zIndex: theme.zIndex.appBar,
                }}>
                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        minHeight: '64px',
                        px: 2,
                    }}>
                    <Stack
                        sx={{ alignItems: 'center' }}
                        direction="row"
                        spacing={2}>
                        <IconButton
                            onClick={() => {
                                setOpenNav(true);
                            }}
                            sx={{ display: { lg: 'none' } }}>
                            <MenuIcon />
                        </IconButton>
                    </Stack>
                    <Stack
                        sx={{ alignItems: 'center' }}
                        direction="row"
                        spacing={2}>
                        <IconButton>
                            <NotificationsIcon />
                        </IconButton>
                        <IconButton>
                            <GroupIcon />
                        </IconButton>
                        <Avatar
                            onClick={userPopover.handleOpen}
                            ref={userPopover.anchorRef}
                            sx={{ cursor: 'pointer' }}
                        />
                    </Stack>
                </Stack>
            </Box>
            <MobileNavigation
                onClose={() => {
                    setOpenNav(false);
                }}
                open={openNav}
            />
        </React.Fragment>
    );
};

export default MainNavigation;
