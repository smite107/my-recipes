import React, { Component } from "react";
import SmallRecipe from "./SmallRecipe";

class RecipesListContainer extends Component {
  render() {
    const categoryId = this.props.match.params.categoryId;
    const categories = {
      "1": "Завтраки",
      "2": "Полдники",
      "3": "Основные блюда",
      "4": "Гарниры",
      "5": "Десерты"
    };
    const recipes = [
      {
        id: "1",
        name: "Картошка фри"
      }, {
        id: "2",
        name: "Супер-горох"
      }
    ];
    return (
      <div className="recipes-list">
        <h1>{categories[categoryId]}</h1>
        <RecipesList recipes={recipes} columnWidth="3" />
      </div>
    );
  }
}

const RecipesList = ({recipes, columnWidth}) => (
  <div className="row">
    {recipes.map((r) => (
      <div className={"col--" + columnWidth} key={r.id}>
        <SmallRecipe id={r.id} name={r.name} />
      </div>
    ))}
  </div>
);

export {RecipesListContainer}
export default RecipesList;