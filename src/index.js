import React from "react";
import ReactDOM from "react-dom";
import HeaderTemplate from "./components/HeaderTemplate";
import ContentTemplate from "./components/ContentTemplate";
import ListBox from "./components/ListBox";

import { TrelloProvider } from "./context/TrelloContext";

import "./styles.scss";

function App() {
  return (
    <TrelloProvider>
      <div className="App">
        <HeaderTemplate>Trello</HeaderTemplate>
        <ContentTemplate>
          <ListBox />
        </ContentTemplate>
      </div>
    </TrelloProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
