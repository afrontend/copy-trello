import React, { useContext } from "react";
import { actions, configureReducer } from "./reducers";

export const Actions = actions;

export const TrelloContext = React.createContext();

export const TrelloProvider = ({ initialState = {}, children }) => (
  <TrelloContext.Provider value={configureReducer(initialState)}>
    {children}
  </TrelloContext.Provider>
);

export const useTrelloContext = () => useContext(TrelloContext);
