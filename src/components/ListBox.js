import React from "react";

import { useTrelloContext } from "../context/TrelloContext";
import { ADD_TYPE, LIST_STATUS } from "./hooks/AddListHooks";

import Box from "./Box";
import List from "./List";
import Add from "./Add";

function ListBox() {
  const {
    trelloList: [state]
  } = useTrelloContext();
  const { lists } = state;
  const listsKeys = Object.keys(lists);
  const status =
    listsKeys.length === 0 ? LIST_STATUS.HAS_NOT_LIST : LIST_STATUS.HAS_LIST;
  console.log(lists);
  return (
    <Box type="list-wrap">
      {listsKeys.map(key => (
        <List key={key} id={key} title={lists[key].name} />
      ))}
      <Add type={ADD_TYPE.LIST} status={status}>
        Add a list
      </Add>
    </Box>
  );
}

export default ListBox;
