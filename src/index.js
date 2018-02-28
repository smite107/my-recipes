import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainLayout from "./js/components/MainLayout";
import Recipe from "./js/components/Recipe";
import RecipesList from "./js/components/RecipesList";
import registerServiceWorker from "./js/registerServiceWorker";

ReactDOM.render((
    <Router>
      <MainLayout>
        <Route exact path="/" component={RecipesList} />
        <Route path="/recipe/:recipeId" component={Recipe}/>
      </MainLayout>
    </Router>
), document.getElementById("root"));
registerServiceWorker();