'use client';

import React, { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    Container,
    Typography,
    Box,
    Stack,
    IconButton,
    Button,
    CardHeader,
    Card,
    Link,
    CardContent,
    Grid,
    TextField,
    MenuItem,
} from '@mui/material';
import { useFormik } from 'formik';
import RouterLink from 'next/link';
import { useRouter } from 'next/navigation';
import * as yup from 'yup';

import { paths } from '@/paths';

const initialValues = {
    name: '',
    email: '',
    status: 'NEW',
};

const statusOptions = [
    {
        label: 'NEW',
        value: 'NEW',
    },
    {
        label: 'ENGAGED',
        value: 'ENGAGED',
    },
    {
        label: 'PROPOSAL_SENT',
        value: 'PROPOSAL_SENT',
    },
    {
        label: 'CLOSED_WON',
        value: 'CLOSED_WON',
    },
    {
        label: 'CLOSED_LOST',
        value: 'CLOSED_LOST',
    },
];

const validationSchema = yup.object({
    name: yup.string().required('name required'),
    email: yup.string().required('email required'),
    status: yup.string().required('status required'),
});

const NewLead = () => {
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            setIsLoading(true);
            await fetch(process.env.NEXT_PUBLIC_API_URL + '/lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    status: values.status,
                }),
            });
            router.push('/dashboard');
            setIsLoading(false);
        },
    });

    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                py: 6,
            }}>
            <Container maxWidth="xl">
                <Stack spacing={4} sx={{ mb: 4 }}>
                    <div>
                        <Link
                            color="text.primary"
                            component={RouterLink}
                            href={paths.dashboard.overview}
                            sx={{
                                alignItems: 'center',
                                display: 'inline-flex',
                            }}
                            underline="hover">
                            <IconButton size="small" color="inherit">
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography variant="subtitle2">Leads</Typography>
                        </Link>
                    </div>
                </Stack>
                <form noValidate onSubmit={formik.handleSubmit}>
                    <Card>
                        <CardHeader title={'Add Lead'} />
                        <CardContent sx={{ pt: 0 }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <TextField
                                        error={
                                            !!(
                                                formik.touched.name &&
                                                formik.errors.name
                                            )
                                        }
                                        fullWidth
                                        helperText={
                                            formik.touched.name &&
                                            formik.errors.name
                                        }
                                        label="Name"
                                        name="name"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.name}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        error={
                                            !!(
                                                formik.touched.email &&
                                                formik.errors.email
                                            )
                                        }
                                        fullWidth
                                        helperText={
                                            formik.touched.email &&
                                            formik.errors.email
                                        }
                                        label="Email"
                                        name="email"
                                        type="email"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                    />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                    <TextField
                                        fullWidth
                                        error={
                                            !!(
                                                formik.touched.status &&
                                                formik.errors.status
                                            )
                                        }
                                        helperText={
                                            formik.touched.status &&
                                            formik.errors.status
                                        }
                                        label="Status"
                                        name="status"
                                        value={formik.values.status}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        select>
                                        {statusOptions.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}>
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </Grid>
                        </CardContent>
                        <Stack
                            direction={{
                                xs: 'column',
                                sm: 'row',
                            }}
                            flexWrap="wrap"
                            spacing={3}
                            sx={{ p: 3 }}>
                            <Button
                                disabled={formik.isSubmitting}
                                type="submit"
                                loading={isLoading}
                                variant="contained">
                                Add
                            </Button>
                        </Stack>
                    </Card>
                </form>
            </Container>
        </Box>
    );
};

export default NewLead;
