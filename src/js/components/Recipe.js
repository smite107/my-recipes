import React, { Component } from "react";
import {Link} from "react-router-dom";
import RecipesList from "./RecipesList";

const cleanState = {
  recipe: {
    id          : "",
    name        : "",
    description : "",
    categoryId  : {},
    categoryName: "",
    ingredients : []
  },
  recommended : []
}

class RecipeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = cleanState;
  }

  componentDidMount() {
    this.updateRecipe(this.props.match.params.recipeId);
  }

  componentWillReceiveProps(nextProps) {
    this.updateRecipe(nextProps.match.params.recipeId);
  }

  updateRecipe(recipeId) {
    this.setState(cleanState);
    
    fetch("/getRecipe/" + recipeId)
      .then(res => res.json())
      .then(recipe => this.setState({ recipe }));

    fetch("/getRecommendedRecipesList/" + recipeId)
      .then(res => res.json())
      .then(recommended => this.setState({ recommended }));
  }

  render() {
    return (
      <Recipe recipe={this.state.recipe} recommended={this.state.recommended} />
    );
  }
}

const Ingredient = ({ingredient}) => (
  <li>{ingredient.name + ((ingredient.count != "") ? " — " + ingredient.count : "")}</li>
);

const Recipe = ({recipe, recommended}) => (
  <div className="recipe">
    <h1 className="recipe__header">{recipe.name}</h1>
    <Link to={"/category/" + recipe.categoryId} className="recipe__category mb--30">{recipe.categoryName}</Link>
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
    {recommended.length > 0 &&
      <div>
        <h2>Попробуйте вместе с</h2>
        <RecipesList recipes={recommended} columnWidth="3" />
      </div>
    }
  </div>
);

export {RecipeContainer}
export default Recipe;