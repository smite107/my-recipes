import React from "react";
import {Link} from "react-router-dom";

const CategoryPreview = ({id, name}) => (
  <div className="category-preview">
    <Link to={"/category/" + id}>
      <img src={"../../images/categories/" + id + ".jpg"} className="category-preview__image" alt={name} />
      <span>{name}</span>
    </Link>
  </div>
);

export default CategoryPreview;