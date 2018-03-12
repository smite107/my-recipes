import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/fontawesome-free-solid";

const RecipeSelector = ({recipe, index, onRemove}) => (
  <div className="col--3 mb--30">
    <div className="recipes-picker__item-wrap">
      <div className="recipes-picker__item-image-wrap">
        <img src={"../../images/uploads/" + recipe.id + ".jpg"} className="recipes-picker__item-image" alt={recipe.name} />
        <button 
          type="button" 
          className="recipes-picker__item-remove"
          onClick={() => (onRemove(index))}>
            <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
      <div className="recipes-picker__item-name">{recipe.name}</div>
    </div>
  </div>
);

const RecipesPicker = ({label, recipes, onAdd, onRemove}) => (
  <div className="form__group recipes-picker">
    <label className="form__label">{label}</label>
    <div className="row">
      {recipes.map((recipe, index) => (
        <RecipeSelector
          key={index}
          recipe={recipe}
          index={index}
          onRemove={onRemove} />
      ))}
    </div>
    <button 
      type="button" 
      className="recipes-picker__add btn btn--with-icon"
      onClick={onAdd()}>
        <FontAwesomeIcon icon={faPlus} /> Добавить
    </button>
  </div>
);

export default RecipesPicker;