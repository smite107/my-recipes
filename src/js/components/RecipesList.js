import React, { Component } from "react";
import {Link} from "react-router-dom";

class RecipesListContainer extends Component {
  constructor() {
    super();
    this.state = {
      category: {},
      recipes: []
    }
  }

  componentDidMount() {
    const categoryId = this.props.match.params.categoryId;
    //get category name
    fetch("/getCategory/" + categoryId)
      .then(res => res.json())
      .then(category => this.setState({ category }));

    //get recipes
    fetch("/getRecipesList/" + categoryId)
      .then(res => res.json())
      .then(recipes => this.setState({ recipes }));
  }

  render() {
    return (
      <div className="recipes-list">
        <h1>{this.state.category.name}</h1>
        <RecipesList recipes={this.state.recipes} columnWidth="3" />
      </div>
    );
  }
}

const RecipesList = ({recipes, columnWidth}) => (
  <div className="row">
    {recipes.map((recipe) => (
      <div className={"col--" + columnWidth + " mb--30"} key={recipe.id}>
        <RecipePreview id={recipe.id} name={recipe.name} />
      </div>
    ))}
  </div>
);

const RecipePreview = ({id, name}) => (
  <div className="preview">
    <Link to={"/recipe/" + id} className="preview__image-wrap">
      <img src={"../../images/uploads/" + id + ".jpg"} alt={name} />
    </Link>
    <Link to={"/recipe/" + id} className="preview__name">
      {name}
    </Link>
  </div>
);

export {RecipesListContainer, RecipePreview}
export default RecipesList;