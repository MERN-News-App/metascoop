import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/home";


export default function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
    </Router>
  );
}
