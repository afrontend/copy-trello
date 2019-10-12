import React from "react";

import "./Box.scss";

function Box({ children, type }) {
  return <div className={`box-${type}`}>{children}</div>;
}

export default Box;
