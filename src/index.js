import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainLayout from "./js/components/MainLayout";
import Recipe from "./js/components/Recipe";
import RecipeEdit from "./js/components/RecipeEdit";
import {RecipesListContainer} from "./js/components/RecipesList";
import {CategoriesListContainer} from "./js/components/CategoriesList";
import registerServiceWorker from "./js/registerServiceWorker";

ReactDOM.render((
    <Router>
      <MainLayout>
        <Route exact path="/" component={CategoriesListContainer} />
        <Route path="/category/:categoryId" component={RecipesListContainer}/>
        <Route path="/recipe/:recipeId" component={Recipe}/>
        <Route path="/admin/edit/:recipeId" component={RecipeEdit}/>
      </MainLayout>
    </Router>
), document.getElementById("root"));
registerServiceWorker();