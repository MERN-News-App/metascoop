import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/home";
import Categories from "../pages/categories"
import Publications from "../pages/publications"


export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/categories" exact component={Categories} />
      <Route exact path="/publications" exact component={Publications} />
      </Switch>
    </Router>
  );
}
