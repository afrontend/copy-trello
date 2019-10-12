import React from "react";
import ListItem from "./ListItem";

import "./List.scss";

function Controller({ children }) {
  return (
    <div className="list">
      <ListItem />
    </div>
  );
}

export default Controller;
