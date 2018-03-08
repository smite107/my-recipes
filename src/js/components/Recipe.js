import React, { Component } from "react";
import {Link} from "react-router-dom";
import RecipesList from "./RecipesList";
import ApiCaller from "./ApiCaller";

class Recipe extends Component {
  createIngredient(i) {
    return (
      <li key={i.name}>{i.name + ((i.count != "") ? " — " + i.count : "")}</li>
    );
  }

  render() {
    const recipeId = this.props.match.params.recipeId;
    const recipe = ApiCaller.getRecipe(recipeId);
    return (
      <div className="recipe">
        <h1 className="recipe__header">{recipe.name}</h1>
        <Link to={"/category/" + recipe.category.id} className="recipe__category mb--30">{recipe.category.name}</Link>
        <div className="row mb--30">
          <div className="col--6">
            <img src={"../../images/uploads/" + recipeId + "_big.jpg"} alt={recipe.name} className="recipe__photo" />
          </div>
          <div className="col--6">
            <h2>Ингредиенты</h2>
            <ul className="marked">
              {recipe.ingredients.map((i) => (this.createIngredient(i)))}
            </ul>
          </div>
        </div>
        <div className="recipe__description mb--30">
          <h2>Рецепт</h2>
          {recipe.description}
        </div>
        <h2>Попробуйте вместе с</h2>
        <RecipesList recipes={recipe.recommended} columnWidth="3" />
      </div>
    );
  }
}

export default Recipe;