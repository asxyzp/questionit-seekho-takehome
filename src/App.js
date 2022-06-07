// IMPORTING PACKAGES/MODULES
import DarkTheme from './Theme/Dark';
import Confetti from 'react-confetti';
import LightTheme from './Theme/Light';
import { useAppContext } from './Context/Context';
import React, { useEffect, useState } from 'react';
import Container from './Components/Custom/Container';
import ResultCard from './Components/Custom/ResultCard';
import ModalRouter from './Components/Modal/ModalRouter';
import QuestionCard from './Components/Custom/QuestionCard';
import { Menu as MenuIcon, DarkMode, LightMode, Info, ShortText } from '@mui/icons-material';
import { Box, Modal, Menu, MenuItem, ListItemIcon, ListItemText, Button, CssBaseline, Skeleton, ThemeProvider, Typography, IconButton } from '@mui/material';

// IMPORTING API ENDPOINT
import getQuestions from './API/getQuestions';

/**
 * @name App
 * @description APP COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <App /> (JSX)
 */
const App = (props) => {

    // GETTING CONTEXT VALUES
    const { darkMode, modalType, currentQuestion, mobileMode, questions, setDarkMode, setCurrentQuestion, setQuestions, setModalType } = useAppContext();

    // SETTING LOCAL STATES
    const [anchorEl, setAnchorEl] = useState(null);
    const [showResult, setShowResult] = useState(false);

    // SETTING LOCAL VARIABLES    
    const isMenuOpen = Boolean(anchorEl);
    const prevButtonVisibilityCondition = currentQuestion !== 0;                          // STORES CONDITION FOR VISBILITY OF NEXT BUTTON 
    const containerWidth = (mobileMode === true ? "92%" : "45%");                         // STORES CONTAINER WIDTH
    const nextButtonVisibilityCondition = currentQuestion !== questions.length - 1;       // STORES CONDITION FOR VISBILITY OF PREV BUTTON
    const resultButtonVisibilityCondition = currentQuestion === questions.length - 1;     // STORES CONDITION FOR VISBILITY OF RESULT BUTTON 

    // METHODS
    /**
     * @name randomize
     * @description METHOD TO RANDOMIZE ARRAY
     * @param {*} array ARRAY
     * @returns RANDOMIZED ARRAY
     */
    const randomize = (array) => {

        // STORES CURRENT & RANDOM INDEX
        let currentIndex = array.length;
        let randomIndex;

        while (currentIndex !== 0) {
            // PICKING RANDOM INDEX
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // SWAPPING
            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    };

    /**
     * @name getQuestionsData
     * @description API METHOD TO FETCH QUESTION DATA & UPDATE STATE
     * @returns undefined
     */
    const getQuestionsData = async () => {

        // FETCHING FIVE QUESTIONS
        getQuestions(5)
            .then(response => response.json())
            .then((data) => {

                // ADDING SELECTED FIELD TO QUESTION OBJECT & SETTING STATE
                const questions = data.results.map((question) => {
                    return { ...question, selected: "", options: randomize([question.correct_answer, ...question.incorrect_answers]) };
                });

                setQuestions([...questions]);
            })
            .catch((err) => {
                // TODO: SHOW SNACKBAR/TOAST
                console.error(err);
            });
    };

    /**
     * @name nextQuestion
     * @description METHOD TO SHOW NEXT QUESTION
     * @param {*} event EVENT OBJECT
     * @returns undefined
     */
    const nextQuestion = (event) => {
        event.preventDefault();
        setCurrentQuestion(currentQuestion + 1);
    };

    /**
     * @name prevQuestion
     * @description METHOD TO SHOW PREV QUESTION
     * @param {*} event EVENT OBJECT
     * @returns undefined
     */
    const prevQuestion = (event) => {
        event.preventDefault();
        setCurrentQuestion(currentQuestion - 1);
    };

    /**
     * @name openMenu
     * @description METHOD TO OPEN MENU
     * @param {*} event EVENT OBJECT
     * @returns undefined
     */
    const openMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    /**
     * @name closeMenu
     * @description METHOD TO CLOSE MENU
     * @returns undefined
     */
    const closeMenu = () => {
        setAnchorEl(null);
    };

    /**
     * @name openAboutModal
     * @description METHOD TO OPEN ABOUT MODAL
     * @returns undefined
     */
    const openAboutModal = () => {
        closeMenu();
        setModalType("about");
    };

    /**
     * @name openAboutModal
     * @description METHOD TO OPEN ABOUT MODAL
     * @returns undefined
     */
    const openSelectedAnswerModal = () => {
        closeMenu();
        setModalType("selected");
    };

    /**
     * @name changeMode
     * @description METHOD TO CHANGE MODE
     * @returns undefined
     */
    const changeMode = () => {
        closeMenu();
        setDarkMode(!darkMode);
    };

    /**
     * @name closeModal
     * @description METHOD TO CLOSE MODAL
     * @returns undefined
     */
    const closeModal = () => {
        setModalType("");
    };

    // USING useEffect TO LOAD SPLASH SCREEN AND CALL API ENDPOINTS
    useEffect(() => {

        // LOADING SPLASH SCREEN FOR 1.75 seconds
        setModalType("splash");
        window.setTimeout(() => { setModalType(""); }, 1750);

        // CALLING API ENDPOINT
        getQuestionsData();
    }, []);

    return (
        <ThemeProvider theme={darkMode === true ? DarkTheme : LightTheme}>
            <CssBaseline />
            <ModalRouter />
            <Container>

                {/* MODAL TO SHOW APPLICATION INFO */}
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

                {/* MODAL TO SHOW SELECTED ANSWERS */}
                <Modal
                    sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    open={modalType === "selected"}
                    onClose={closeModal}>
                    <Box sx={{ width: containerWidth, mx: "auto", bgcolor: "background.paper", p: "10px", borderRadius: "4px" }}>
                        <Typography component="div" variant="h6" sx={{ width: "100%", textAlign: "center", mb: "15px", color: "primary.main", fontWeight: "bolder" }}>Selected answers</Typography>
                        {
                            questions
                                .filter((question) => {
                                    if (question.selected !== "") return true;
                                    else return false;
                                }).length > 0 ?
                                questions
                                    .filter((question) => {
                                        if (question.selected !== "") return true;
                                        else return false;
                                    })
                                    .map((question) => {
                                        return (<>
                                            <Box sx={{ width: "85%", mx: "auto", textAlign: "center", mb: "5px" }} dangerouslySetInnerHTML={{ __html: question.question }} />
                                            <Typography component="div" variant="body" sx={{ width: "100%", mb: "15px", textAlign: "center" }}> <Box sx={{ display:"inline", fontWeight: "bold" }}>Your answer:</Box> {question.selected} </Typography>
                                        </>);
                                    }) :
                                <Box sx={{ textAlign: "center" }}>Answer a few questions!</Box>
                        }
                    </Box>
                </Modal>

                {/* SHOWING CONFETTI WHEN THE RESULT IS SHOWN */}
                {
                    showResult === true &&
                    <Confetti />
                }

                {/* SHOWING MENU */}
                {
                    showResult === false &&
                    <>
                        <Menu id="app-menu" anchorEl={anchorEl} open={isMenuOpen} onClose={closeMenu}>
                            <MenuItem onClick={openAboutModal}>
                                <ListItemIcon>
                                    <Info />
                                </ListItemIcon>
                                <ListItemText>About</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={changeMode}>
                                <ListItemIcon>
                                    {darkMode === true ? <DarkMode /> : <LightMode />}
                                </ListItemIcon>
                                <ListItemText>{darkMode === true ? "Dark mode" : "Light mode"}</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={openSelectedAnswerModal}>
                                <ListItemIcon>
                                    <ShortText />
                                </ListItemIcon>
                                <ListItemText>Show selected options</ListItemText>
                            </MenuItem>
                        </Menu>
                        <IconButton onClick={openMenu} sx={{ position: "absolute", bottom: "0px", right: "0px" }}>
                            <MenuIcon sx={{ height: "35px", width: "35px", }} />
                        </IconButton>
                    </>
                }

                {/* CONTAINS QUESTION & RESULT CARD */}
                {
                    questions.length > 0 ?
                        <>
                            <Typography variant="h4" sx={{ mb: "10px" }}> QuestionIt!</Typography>
                            {
                                showResult === false ?
                                    <>
                                        <QuestionCard data={questions[currentQuestion]} />
                                        {
                                            nextButtonVisibilityCondition &&
                                            <Button onClick={nextQuestion} variant="outlined" sx={{ mb: "10px", width: containerWidth }} disabled={questions[currentQuestion]["selected"] === ""}>
                                                <Typography variant="h6">Next</Typography>
                                            </Button>
                                        }
                                        {
                                            resultButtonVisibilityCondition &&
                                            <Button onClick={() => setShowResult(true)} variant="outlined" sx={{ mb: "10px", width: containerWidth }} disabled={questions[currentQuestion]["selected"] === ""}>
                                                <Typography variant="h6">Show results</Typography>
                                            </Button>
                                        }
                                        {
                                            prevButtonVisibilityCondition &&
                                            <Button onClick={prevQuestion} variant="contained" sx={{ mb: "10px", width: containerWidth }}>
                                                <Typography variant="h6">Previous</Typography>
                                            </Button>
                                        }
                                    </> :
                                    <>
                                        <ResultCard correctAnswerCount={questions.filter((question) => { if (question.selected === question.correct_answer) return true; else return false; }).length} />
                                        <Button onClick={() => window.location.reload()} variant="contained" sx={{ mb: "10px", width: containerWidth }}>
                                            <Typography variant="h6">Start afresh</Typography>
                                        </Button>
                                    </>
                            }
                        </> :
                        <Skeleton sx={{ height: "450px", width: containerWidth }} />
                }
            </Container>
        </ThemeProvider>
    );
};

export default App;