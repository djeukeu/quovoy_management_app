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

import LeadListTable from '@/components/LeadListTable';
import { paths } from '@/paths';

const Dashboard = () => {
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
                    <LeadListTable loading={false} />
                </Stack>
            </Container>
        </Box>
    );
};

export default Dashboard;
