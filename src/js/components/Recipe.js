import React, { Component } from "react";

class Recipe extends Component {
  render() {
    const recipe = {
      name        : "Крылышки Буффало",
      categoryName: "Основные блюда",
      categoryLink: "cat.com",
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
                    ]
    };
    let ingredients = recipe.ingredients.map((i) => {
      return <li key={i}>{i}</li>;
    });
    return (
      <div className="recipe">
        <h1>{recipe.name}</h1>
        <a href={recipe.categoryLink} className="recipe__category">{recipe.categoryName}</a>
        <div class="row mb-20">
          <div class="col-6">
            <img src={"../../images/" + recipe.image} alt={recipe.name} className="recipe__photo" />
          </div>
          <div class="col-6">
            <h2>Ингредиенты</h2>
            <ul className="marked-ul">{ingredients}</ul>
          </div>
        </div>
        <h2>Рецепт</h2>
        <div className="recipe__description">
          {recipe.description}
        </div>
      </div>
    );
  }
}

export default Recipe;