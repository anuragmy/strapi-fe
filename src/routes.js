import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Checkout from "./components/Checkout";

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact component={Home} path="/" />
        <Route exact component={Checkout} path="/checkout" />
      </Switch>
    </Router>
  );
};

export default Routes;
