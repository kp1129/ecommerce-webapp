import React, { createContext, useContext, useReducer } from 'react';

// set up the data layer
export const StateContext = createContext();

// wrap the data layer provider around the whole app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// pull data from data layer
export const useStateValue = () => useContext(StateContext)