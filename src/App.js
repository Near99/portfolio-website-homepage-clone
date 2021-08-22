import React from "react";
import MainPage from "./components/main";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
