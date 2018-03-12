import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/fontawesome-free-regular";
import { faPlus } from "@fortawesome/fontawesome-free-solid";

const IngredientSelector = ({ingredient, index, onChange, onRemove}) => (
  <div className="ingredients__item-wrap">
    <input
      className="ingredients__item-name"
      value={ingredient.name}
      onChange={(e) => (onChange(e, index, "name"))} />
    <input
      className="ingredients__item-count"
      value={ingredient.count}
      onChange={(e) => (onChange(e, index, "count"))} />
    <button 
      type="button" 
      className="ingredients__item-remove btn btn--icon color--danger"
      onClick={() => (onRemove(index))}>
        <FontAwesomeIcon icon={faTrashAlt} />
    </button>
  </div>
);

const IngredientsPicker = ({label, ingredients, onAdd, onChange, onRemove}) => (
  <div className="form__group ingredients">
    <label className="form__label">{label}</label>
    {ingredients.map((ingredient, index) => (
      <IngredientSelector 
        key={index}
        ingredient={ingredient} 
        index={index} 
        onChange={onChange} 
        onRemove={onRemove} />
    ))}
    <button 
      type="button" 
      className="ingredients__add btn btn--with-icon"
      onClick={onAdd}>
        <FontAwesomeIcon icon={faPlus} /> Добавить
    </button>
  </div>
);

export default IngredientsPicker;