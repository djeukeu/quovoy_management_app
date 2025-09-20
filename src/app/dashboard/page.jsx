'use client';

import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import {
    Container,
    Typography,
    Box,
    Stack,
    IconButton,
    Button,
} from '@mui/material';
import RouterLink from 'next/link';
import useSWR from 'swr';

import LeadListTable from '@/components/LeadListTable';
import { paths } from '@/paths';
import { fetcher } from '@/utils/fetcher';

const Dashboard = () => {
    const { data, isLoading } = useSWR('/lead', fetcher);

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 6,
            }}>
            <Container maxWidth="xl">
                <Stack spacing={4}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        spacing={4}>
                        <Typography variant="h4">Leads</Typography>
                        <Button
                            startIcon={
                                <IconButton size="small" color="inherit">
                                    <AddIcon />
                                </IconButton>
                            }
                            href={paths.dashboard.newLead}
                            component={RouterLink}
                            variant="contained">
                            Add
                        </Button>
                    </Stack>
                    <LeadListTable loading={isLoading} leads={data?.leads} />
                </Stack>
            </Container>
        </Box>
    );
};

export default Dashboard;
