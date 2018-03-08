import React, { Component } from "react";
import {Link} from "react-router-dom";
import ApiCaller from "./ApiCaller";

class CategoriesListContainer extends Component {
  render() {
    const categories = ApiCaller.getAllCategories();
    return (
      <div className="categories-list">
        <CategoriesList categories={categories} columnWidth="3" />
      </div>
    );
  }
}

const CategoriesList = ({categories, columnWidth}) => (
  <div className="row">
    {categories.map((c) => (
      <div className={"col--" + columnWidth + " mb--30"} key={c.id}>
        <CategoryPreview id={c.id} name={c.name} />
      </div>
    ))}
  </div>
);


const CategoryPreview = ({id, name}) => (
  <div className="preview">
    <Link to={"/category/" + id} className="preview__image-wrap">
      <img src={"../../images/categories/" + id + ".jpg"} alt={name} />
    </Link>
    <Link to={"/category/" + id} className="preview__name--category">
      {name}
    </Link>
  </div>
);

export {CategoriesListContainer, CategoryPreview}
export default CategoriesList;