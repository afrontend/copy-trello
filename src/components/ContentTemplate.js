import React from "react";

import "./ContentTemplate.scss";

function ContentTemplate({ children }) {
  return <div className="content-wrap">{children}</div>;
}

export default ContentTemplate;
