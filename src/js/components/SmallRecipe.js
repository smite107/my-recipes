import React from "react";
import {Link} from "react-router-dom";

const SmallRecipe = ({id, name}) => (
  <div className="small-recipe">
    <Link to={"/recipe/" + id}>
      <img src={"../../images/uploads/" + id + ".jpg"} className="small-recipe__image" alt={name} />
      <span>{name}</span>
    </Link>
  </div>
);

export default SmallRecipe;