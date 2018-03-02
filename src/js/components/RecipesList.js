import React, { Component } from "react";
import {Link} from "react-router-dom";

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
      }, {
        id: "3",
        name: "Крылышки Буффало"
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
        <RecipePreview id={r.id} name={r.name} />
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