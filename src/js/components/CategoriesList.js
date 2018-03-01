import React, { Component } from "react";
import CategoryPreview from "./CategoryPreview";

class CategoriesListContainer extends Component {
  render() {
    const categories = [
      {
        id: "1",
        name: "Завтраки"
      }, {
        id: "2",
        name: "Полдники"
      }, {
        id: "3",
        name: "Основные блюда"
      }, {
        id: "4",
        name: "Гарниры"
      }, {
        id: "5",
        name: "Десерты"
      }
    ];
    return (
      <div className="categories-list">
        <h1>Категории</h1>
        <CategoriesList categories={categories} columnWidth="3" />
      </div>
    );
  }
}

const CategoriesList = ({categories, columnWidth}) => (
  <div className="row">
    {categories.map((c) => (
      <div className={"col--" + columnWidth} key={c.id}>
        <CategoryPreview id={c.id} name={c.name} />
      </div>
    ))}
  </div>
);

export {CategoriesListContainer}
export default CategoriesList;