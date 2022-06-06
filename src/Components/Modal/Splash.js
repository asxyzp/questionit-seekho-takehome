// IMPORTING PACKAGES/MODULES
import React from 'react';
import { Box, Typography } from '@mui/material';

/**
 * @name Splash
 * @description SPLASH SCREEN COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <Splash /> (JSX)
 */
const Splash = (props) => {
    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            zIndex: "2000",
            display: "flex",
            alignItems: "center",
            position: "absolute",
            justifyContent: "center",
            bgcolor: "background.default",
        }}>
            <Typography variant="h1" sx={{ color: "primary.main" }}> Q </Typography>
        </Box>
    );
};

export default Splash;