import React from 'react';

import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                margin: 16,
            }}>
            <CircularProgress size={24} />
        </Box>
    );
};

export default Loader;
