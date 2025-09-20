import React from 'react';

import {
    Typography,
    Box,
    Card,
    Stack,
    TableRow,
    TableHead,
    Table,
    TableCell,
    TableBody,
    Avatar,
} from '@mui/material';

import Loader from '../Loader';
import { leads } from './leads/lead';

import { getInitials } from '@/utils/getInitials';

const LeadListTable = ({ loading }) => {
    return (
        <Card>
            <Box sx={{ overflowX: 'auto' }}>
                <Table sx={{ minWidth: 700 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>created On</TableCell>
                        </TableRow>
                    </TableHead>
                    {loading ? (
                        <Loader />
                    ) : (
                        <TableBody>
                            {leads.map((lead) => {
                                return (
                                    <TableRow hover key={lead.id}>
                                        <TableCell>
                                            <Stack
                                                alignItems="center"
                                                direction="row"
                                                spacing={1}>
                                                <Avatar
                                                    sx={{
                                                        height: 42,
                                                        width: 42,
                                                    }}>
                                                    {getInitials(lead.name)}
                                                </Avatar>
                                                <Typography
                                                    color="text.secondary"
                                                    variant="body2">
                                                    {lead.name}
                                                </Typography>
                                            </Stack>
                                        </TableCell>
                                        <TableCell>{lead.email}</TableCell>
                                        <TableCell>{lead.status}</TableCell>
                                        <TableCell>{lead.status}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    )}
                </Table>
            </Box>
        </Card>
    );
};

export default LeadListTable;
