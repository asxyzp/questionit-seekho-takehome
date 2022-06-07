// IMPORTING PACKAGES/MODULES
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import { useAppContext } from '../../Context/Context';
import { Check, Cancel } from '@mui/icons-material';

/**
 * @name ResultCard
 * @description COMPONENT TO SHOW RESULT
 * @param {*} props COMPONENT PROPS
 * @returns <ResultCard /> (JSX)
 */
const ResultCard = (props) => {

    // GETTING CONTEXT VALUES
    const { questions, mobileMode } = useAppContext();

    // SETTING LOCAL VARIABLES
    const containerWidth = (mobileMode === true ? "92%" : "45%");

    return (
        <Card sx={{ p: "10px", mb: "10px", width: containerWidth, overflowX: "hidden", overflowY: "auto" }} elevation={1}>
            <Typography component="div" variant="body" sx={{ width: "100%", textAlign: "center" }}>You've answered</Typography>
            <Typography component="div" variant="h1" sx={{ color: "primary.main", width: "100%", textAlign: "center" }}>{props.correctAnswerCount}/{questions.length}</Typography>
            <Typography component="div" variant="body" sx={{ width: "100%", textAlign: "center", mb: "15px" }}>questions correctly.</Typography>
            <Typography component="div" variant="h6" sx={{ width: "100%", textAlign: "center", mb: "15px", color:"primary.main", fontWeight: "bolder" }}>Incorrect answers</Typography>
            {
                questions
                    .filter((question) => {
                        if (question.selected !== question.correct_answer) return true;
                        else return false;
                    })
                    .map((question) => {
                        return (<>
                            <Box sx={{ width: "85%", mx: "auto", textAlign: "center", mb: "15px" }} dangerouslySetInnerHTML={{ __html: question.question }} />
                            <Box sx={{ display: "flex" }}>
                                <Typography component="div" variant="body" sx={{ width: "100%", mb: "15px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}> <Check  sx={{ marginRight: "5px" }}/> {question.correct_answer}</Typography>
                                <Typography component="div" variant="body" sx={{ width: "100%", mb: "15px", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}> <Cancel sx={{ marginRight: "5px" }}/> {question.selected}</Typography>
                            </Box>
                        </>);
                    })
            }
            {
                props.correctAnswerCount <= questions.length / 2 &&
                <Typography component="div" variant="h6" sx={{ width: "100%", textAlign: "center", color:"primary.main", fontWeight: "bolder" }}>Better luck next time!</Typography>
            }
        </Card>
    );
};

export default ResultCard;