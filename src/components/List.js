import React from "react";
import ListItem from "./ListItem";

import "./List.scss";

function List({ children }) {
  return (
    <div className="list">
      <ListItem />
    </div>
  );
}

export default List;
