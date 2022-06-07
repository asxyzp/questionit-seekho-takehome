// IMPORTING PACKAGES/MODULES
import React from 'react';
import { useAppContext } from '../../Context/Context';
import { Modal, Box, Typography } from '@mui/material';

/**
 * @name About
 * @description ABOUT MODAL COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <About /> (JSX)
 */
const About = (props) => {

    // GETTING CONTEXT VALUES
    const { mobileMode, modalType, setModalType } = useAppContext();

    // SETTING LOCAL VARIABLES    
    const containerWidth = (mobileMode === true ? "92%" : "45%");                         // STORES CONTAINER WIDTH

    // METHODS
    /**
     * @name closeModal
     * @description METHOD TO CLOSE MODAL
     * @returns undefined
     */
    const closeModal = () => {
        setModalType("");
    };

    return (
        <Modal
            sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            open={modalType === "about"}
            onClose={closeModal}>
            <Box sx={{ width: containerWidth, mx: "auto", bgcolor: "background.paper", p: "10px", borderRadius: "4px" }}>
                <Typography component="div" variant="h4" sx={{ textAlign: "center", mb: "10px" }}> QuestionIt!</Typography>
                <Typography component="div" variant="body" sx={{ textAlign: "center", mb: "10px" }}> QuestionIt! is a simple question and answer app built as a take home assignment for Seekho.ai by Aashish Loknath Panigrahi. The questions for this Q&A app are fetched from OpenTriviaDB API.</Typography>
                <Typography component="div" variant="body" sx={{ textAlign: "center", mb: "10px" }}> &copy; {(new Date()).getFullYear()} Aashish Loknath Panigrahi </Typography>
            </Box>
        </Modal>
    );
}

export default About