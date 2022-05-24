// IMPORTING PACKAGES/MODULES
import DarkTheme from './Theme/Dark';
import LightTheme from './Theme/Light';
import React, { useEffect } from 'react';
import Container from './Components/Container';
import { useAppContext } from './Context/Context';
import ModalRouter from './Components/Modal/ModalRouter';
import { CssBaseline, ThemeProvider } from '@mui/material';

/**
 * @name App
 * @description APP COMPONENT
 * @param {*} props COMPONENT PROPS
 * @returns <App /> (JSX)
 */
const App = (props) => {

    // GETTING CONTEXT VALUES
    const { darkMode, setModalType } = useAppContext();

    // USING useEffect TO LOAD SPLASH SCREEN AND CALL API ENDPOINTS
    useEffect(() => {
        // LOADING SPLASH SCREEN FOR 1.75 seconds
        setModalType("splash");
        window.setTimeout(() => { setModalType(""); }, 1750);
    }, []);

    return (
        <ThemeProvider theme={darkMode === true ? DarkTheme : LightTheme}>
            <CssBaseline />
            <ModalRouter />
            <Container>
                ABCD
            </Container>
        </ThemeProvider>
    );
};

export default App;