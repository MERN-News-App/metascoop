import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "../pages/home";
import CategoriesPage from "../pages/categoriesPage"
import PublicationsPage from "../pages/publicationsPage"
import LoginPage from "../pages/loginPage"
import SignUpPage from '../pages/signUpPage'
import LatestNews from "../pages/latestPage"

// import CategoryPage from '../pages/category/categoryPage'
// import categories from './categoryRoute'

import MenuBar from '../components/menuBar.jsx'
import ContentCard from '../components/contentCard.jsx'
import NewsApi from '../components/apiCall.jsx'

import ArticlePage from '../pages/articlePage.jsx'
import ReadPage from '../pages/readPage.jsx'



const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/newsApi" component={NewsApi} />

        <Route exact path="/latest-news" component={LatestNews} />

        <Route exact path="/categories" component={CategoriesPage} />
        <Route exact path="/publications" component={PublicationsPage} />
     


        <Route exact path="/topic" component={ArticlePage} />
        <Route exact path="/publication" component={ArticlePage} />
        <Route exact path="/search" component={ArticlePage} />


        <Route exact path="/readinglist" component={ArticlePage} />

        {/* <Route exact path="/search" component={SearchPage} /> */}



        {/* for checking out components */}
        <Route exact path="/menubar" component={MenuBar} />
        <Route exact path="/contentCard" cd component={ContentCard} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router
