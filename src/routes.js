import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
      </Switch>
    </Router>
  );
};

export default Routes;
