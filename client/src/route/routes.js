import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/home";
import CategoriesPage from "../pages/categoriesPage"
import PublicationsPage from "../pages/publicationsPage"
import LoginPage from "../pages/loginPage"
import SigninPage from "../pages/signinPage"

import MenuBar from '../components/menuBar.jsx'
import ContentCard from '../components/contentCard.jsx'


export default function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" exact component={Home} />
      <Route exact path="/categories" exact component={CategoriesPage} />
      <Route exact path="/publications" exact component={PublicationsPage} />
      <Route exact path="/signin" exact component={SigninPage} />

      {/* for checking out components */}
      <Route exact path="/menubar" exact component={MenuBar} />
      <Route exact path="/contentCard" exact component={ContentCard} />
      </Switch>
    </Router>
  );
}
