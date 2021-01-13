import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "../pages/home";
import CategoriesPage from "../pages/categoriesPage";
import PublicationsPage from "../pages/publicationsPage";
import LoginPage from "../pages/loginPage";

// take notice of signup vs signin

import SignUpPage from "../pages/signupPage";
import ArchivesPage from "../pages/archivesPage";

import MenuBar from "../components/menuBar.jsx";
import ContentCard from "../components/contentCard.jsx";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" exact component={Home} />
        <Route exact path="/categories" exact component={CategoriesPage} />
        <Route exact path="/publications" exact component={PublicationsPage} />
        <Route exact path="/signup" exact component={SignUpPage} />
        <Route exact path="/login" exact component={LoginPage} />
        <Route exact path="/archives" exact component={ArchivesPage} />

        {/* for checking out components */}
        <Route exact path="/menubar" exact component={MenuBar} />
        <Route exact path="/contentCard" exact component={ContentCard} />
      </Switch>
    </Router>
  );
}
