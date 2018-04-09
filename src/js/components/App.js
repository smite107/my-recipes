import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainLayout from "./MainLayout";
import AdminLayout from "./AdminLayout";
import {RecipeContainer} from "./Recipe";
import AdminRecipe from "./AdminRecipe";
import {RecipesListContainer} from "./RecipesList";
import CategoriesList from "./CategoriesList";
import AdminPanel from "./AdminPanel";

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
        <Switch>
          <Route path="/admin/" component={() => <Admin categories={this.state.categories} />} />
          <Route component={() => <Main categories={this.state.categories} />} />
        </Switch>
      </Router>
    );
  }
}

const Main = ({categories}) => (
  <Router>
    <MainLayout categories={categories}>
      <Route exact path="/" component={() => <CategoriesList categories={categories} columnWidth="3" />} />
      <Route path="/category/:categoryId" component={(props) => <RecipesListContainer categories={categories} {...props} />} />
      <Route path="/recipe/:recipeId" component={RecipeContainer} />
    </MainLayout>
  </Router>
);

const Admin = ({categories}) => (
  <Router>
    <AdminLayout>
      <Route exact path="/admin/" component={AdminPanel} />
      <Route path="/admin/edit/:recipeId" component={(props) => <AdminRecipe categories={categories} {...props} />} />
      <Route path="/admin/add/" component={(props) => <AdminRecipe categories={categories} type="add" {...props} />} />
    </AdminLayout>
  </Router>
);

export default App;