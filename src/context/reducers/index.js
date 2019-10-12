import { useReducer } from "react";
import trelloList from "./trelloList";
import trelloListItem from "./trelloListItem";

const initialState = {
  lists: {}
};

export const actions = {
  ...trelloList.actions,
  ...trelloListItem.actions
};

export const configureReducer = newInitialState => {
  const _initialState = {
    ...initialState,
    ...newInitialState
  };

  return {
    trelloList: useReducer(trelloList.reducer, _initialState),
    trelloListItem: useReducer(trelloListItem.reducer, _initialState)
  };
};
