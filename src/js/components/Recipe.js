import React, { Component } from "react";
import {Link} from "react-router-dom";
import RecipesList from "./RecipesList";

class Recipe extends Component {

  render() {
    //const recipeId = this.props.match.params.recipeId;
    const recipe = {
      name        : "Крылышки Буффало",
      categoryName: "Основные блюда",
      categoryId  : "3",
      description : "Традиционно крылышки Буффало жарят во фритюре. Встречаются как варианты без панировки, так с ней. Я использовала такую: 0,5 стакана муки смешать с 1 ч. л. кайенского перца, 1 ч. л. соли и 1-2 ч. л. паприки. Крылышки обвалять в панировке (удобно это делать в пакете) и обжарить до готовности во фритюре. Готовые крылышки откинуть на сито или выложить на бумажные полотенца. Пока крылышки запекаются, приготовьте сырный соус. Для этого все ингредиенты нужно измельчить в блендере. Соус необязательно должен быть однородным, пусть останется слегка комковатым.",
      image       : "buffalo.jpg",
      ingredients : [
        "Крылья куриные (1,2 - 1,5 кг) — 1,2 кг", 
        "Соль — 1 ч. л.", 
        "Масло сливочное — 60 г", 
        "Сахар коричневый — 2 ст. л.", 
        "Томатная паста — 3 ст. л.", 
        "Чеснок — 2 зуб.", 
        "Перец черный", 
        "Соус чили"
      ],
      recommended : [
        {
          id: "1",
          name: "Картошка фри"
        }, {
          id: "2",
          name: "Супер-горох"
        }
      ]
    };
    let ingredients = recipe.ingredients.map((i) => (
      <li key={i}>{i}</li>
    ));
    return (
      <div className="recipe">
        <h1>{recipe.name}</h1>
        <Link to={"/category/" + recipe.categoryId} className="recipe__category mb--30">{recipe.categoryName}</Link>
        <div className="row mb--30">
          <div className="col--6">
            <img src={"../../images/" + recipe.image} alt={recipe.name} className="recipe__photo" />
          </div>
          <div className="col--6">
            <h2>Ингредиенты</h2>
            <ul className="marked">{ingredients}</ul>
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