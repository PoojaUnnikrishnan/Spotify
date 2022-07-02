import React, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext(); //prepares the data layer.

export const StateProvider = ({ initialState, reducer, children }) => (
  <stateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </stateContext.Provider>
);
// state provider takes in initial states, reducer and also children as props.
// children means, since we wrap App component in stateProvider, App is the children.

export const useStateValue = () => useContext(stateContext);
//useContext is the hook for providing whole statecontext using useStateValue inside anywhere in app.
