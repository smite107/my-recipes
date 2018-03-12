import React, { Component } from "react";
import {Link} from "react-router-dom";
import RecipesList from "./RecipesList";

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {
        id         : this.props.match.params.recipeId,
        name       : "",
        description: "",
        category   : {},
        ingredients: [],
        recommended: []
      }
    }
  }

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    fetch("/getRecipe/" + recipeId)
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }));
  }

  render() {
    return (
      <Recipe recipe={this.state.recipe} />
    );
  }
}

const Ingredient = ({ingredient}) => (
  <li>{ingredient.name + ((ingredient.count != "") ? " — " + ingredient.count : "")}</li>
);

const Recipe = ({recipe}) => (
  <div className="recipe">
    <h1 className="recipe__header">{recipe.name}</h1>
    <Link to={"/category/" + recipe.category.id} className="recipe__category mb--30">{recipe.category.name}</Link>
    <div className="row mb--30">
      <div className="col--6">
        <img src={"../../images/uploads/" + recipe.id + "_big.jpg"} alt={recipe.name} className="recipe__photo" />
      </div>
      <div className="col--6">
        <h2>Ингредиенты</h2>
        <ul className="marked">
          {recipe.ingredients.map((ingredient, index) => (
            <Ingredient ingredient={ingredient} key={index} />
          ))}
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

export {RecipeContainer}
export default Recipe;