import React from "react";
import "./HeaderTemplate.scss";

function HeaderTemplate({ children }) {
  return <div className="header-wrap">{children}</div>;
}

export default HeaderTemplate;
