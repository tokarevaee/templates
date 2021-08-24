/**
 * Vendors
 */
import React, { useReducer, createContext } from 'react';

/**
 * Reducer
 */
import { reducer, initialState } from './reducer';

/**
 * Context
 */
export const GlobalStateContext = createContext();
export const GlobalDispatchContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    );
};

export default GlobalContextProvider;
