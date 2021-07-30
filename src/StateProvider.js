import React, { createContext, useContext, useReducer } from "react";

//Preparing the data layer.
export const StateContext = createContext();

//Higher order States

//reducer listens to the changes
//initialstate says the current state when the component loads.

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {/* Accesses APP component */}
    {children}
  </StateContext.Provider>
);

//Hook allows us to pull info from data layer
export const useStateValue = () => useContext(StateContext);
