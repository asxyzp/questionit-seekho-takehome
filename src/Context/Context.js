// IMPORTING PACKAGES/MODULES
import React, { useState, useContext, createContext } from 'react';

// APPLICATION CONTEXT
const AppContext = createContext();

/**
 * @name useAppContext
 * @description CUSTOM HOOK TO PASS CONTEXT VALUES
 * @returns {Object} ContextVal
 */
export const useAppContext = () => {
    return useContext(AppContext);
};

/**
 * @name Context
 * @description CONTEXT COMPONENT TO PASS GLOBAL CONTEXT USING CONTEXT API
 * @param {*} props COMPONENT PROPS
 * @returns <Context />
 */
const Context = (props) => {

    // STATES WHICH WILL BE PASSED AS CONTEXT VALUE
    const [modalType, setModalType] = useState('');
    const [darkMode, setDarkMode] = useState(false);

    // CONTEXT VALUE TO BE PASSED
    const ContextVal = {
        darkMode: darkMode,
        modalType: modalType,
        setDarkMode: setDarkMode,
        setModalType: setModalType
    };

    return (
        <AppContext.Provider value={ContextVal}>
            {props.children}
        </AppContext.Provider>
    );
};

export default Context;