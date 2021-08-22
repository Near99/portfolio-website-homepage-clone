import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    *, ::before, ::after {
      box-sizing: border-box;
    }
  }

  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: 'Encode Sans Expanded';
    line-height: 1.3;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
