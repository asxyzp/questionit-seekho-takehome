// IMPORTING PACKAGES/MODULES
import React from 'react';
import { Box } from '@mui/material';

/**
 * @name Container
 * @description CONTAINER COMPONENT TO CONTAIN THE ENTIRE APP
 * @param {*} props COMPONENT PROPS
 * @returns <Container /> (JSX)
 */
const Container = (props) => {
    return (
        <Box sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            bgcolor: "background.default",
        }}>
            {props.children}
        </Box>
    );
};

export default Container;