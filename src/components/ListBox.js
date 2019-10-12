import React from "react";

import { useTrelloContext } from "../context/TrelloContext";

import Box from "./Box";
import List from "./List";
import AddList from "./AddList";

function ListBox() {
  const {
    trelloList: [state]
  } = useTrelloContext();
  const { lists } = state;

  return (
    <Box type="list-wrap">
      {(Object.keys(lists) || []).map(key => (
        <List key={key}>{lists[key].name}</List>
      ))}
      <AddList />
    </Box>
  );
}

export default ListBox;
