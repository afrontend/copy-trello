import React from "react";
import ListItem from "./ListItem";

import Add from "./Add";
import { ADD_TYPE } from "./hooks/AddListHooks";
import "./List.scss";

function List({ title, id }) {
  console.log(title);
  return (
    <div className="list">
      <Add type={ADD_TYPE.EDIT_LIST} buttonText={title} id={id} />
      {/* <h4 className="list__title">{children}</h4> */}

      {/* <ListItem /> */}
    </div>
  );
}

export default List;
