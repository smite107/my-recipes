import React, { Component } from "react";
import {Link} from "react-router-dom";

const CategoriesList = ({categories, columnWidth}) => (
  <div className="categories-list">
    <div className="row">
      {categories.map((c) => (
        <div className={"col--" + columnWidth + " mb--30"} key={c.id}>
          <CategoryPreview id={c.id} name={c.name} />
        </div>
      ))}
    </div>
  </div>
);


const CategoryPreview = ({id, name}) => (
  <div className="preview">
    <Link to={"/category/" + id} className="preview__image-wrap">
      <img src={"../../images/categories/" + id + ".jpg"} alt={name} />
    </Link>
    <Link to={"/category/" + id} className="preview__name preview__name--category">
      {name}
    </Link>
  </div>
);

export {CategoryPreview}
export default CategoriesList;