import React, { Component } from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainLayout from "./MainLayout";
import {RecipeContainer} from "./Recipe";
import RecipeEdit from "./RecipeEdit";
import {RecipesListContainer} from "./RecipesList";
import CategoriesList from "./CategoriesList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("/getAllCategories")
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
  }

  render() {
    return (
      <Router>
        <MainLayout categories={this.state.categories}>
          <Route exact path="/" component={() => <CategoriesList categories={this.state.categories} columnWidth="3" />} />
          <Route path="/category/:categoryId" component={(props) => <RecipesListContainer categories={this.state.categories} {...props} />} />
          <Route path="/recipe/:recipeId" component={RecipeContainer} />
          <Route path="/admin/edit/:recipeId" component={RecipeEdit} />
        </MainLayout>
      </Router>
    );
  }
}

export default App;