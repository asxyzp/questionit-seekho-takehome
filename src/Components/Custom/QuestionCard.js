// IMPORTING PACKAGES/MODULES
import React from 'react';
import { useAppContext } from '../../Context/Context';
import { LocalFlorist, Spa, Timeline, Topic } from '@mui/icons-material';
import { Card, Chip, Box, RadioGroup, FormControlLabel, Typography, Radio } from '@mui/material';

// COMPONENTS
/**
 * @name QuestionCard
 * @description QUESION CARD COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <QuestionCard /> (JSX)
 */
const QuestionCard = (props) => {

    // GETTING PROPS DATA
    const data = props.data;
    console.log(data);

    // GETTING CONTEXT VALUES
    const { mobileMode, questions, currentQuestion, setQuestions } = useAppContext();

    // SETTING LOCAL VARIABLES
    const containerWidth = (mobileMode === true ? "92%" : "45%");

    // METHODS
    /**
     * @name selectOption
     * @description METHOD TO SELECT OPTION
     * @param {*} option SELECTED OPTION
     * @returns undefined
     */
    const selectOption = (option) => {
        questions[currentQuestion]["selected"] = option;
        setQuestions([...questions]);
    };

    return (
        <Card sx={{ p: "10px", mb: "10px", width: containerWidth }} elevation={1}>
            <Typography variant="body" color="primary" sx={{ fontWeight: "bolder" }}>Question {currentQuestion + 1}/{questions.length}</Typography>
            {/* TODO: RELACE dangerouslySetInnerHTML WITH SOMETHING ELSE*/}
            <Box sx={{ mb: "5px" }} dangerouslySetInnerHTML={{ __html: data.question }} />
            <Box sx={{ mb: "5px" }}>
                <Chip variant="outlined" label={data.difficulty} sx={{ p: "5px", textTransform: "capitalize", mr: "5px" }} icon={<Timeline />} />
                <Chip variant="outlined" label={data.category} sx={{ p: "5px" }} icon={<Topic />} />
            </Box>
            <Box sx={{ mb: "5px" }}>
                <RadioGroup name="radio-buttons-group">
                    {
                        data.options
                            .map((option) => {
                                return <FormControlLabel
                                    value={option}
                                    label={option}
                                    onClick={() => selectOption(option)}
                                    checked={option === questions[currentQuestion]["selected"]}
                                    control={<Radio icon={<Spa />} checkedIcon={<LocalFlorist />} />} />;
                            })
                    }
                </RadioGroup>
            </Box>
        </Card>
    );
};

export default QuestionCard;