import React from "react";

const IngredientSelector = ({ingredient, index, onChange, onRemove}) => (
  <div className="ingredients-picker__wrap">
    <input
      className="form-group__control ingredients-picker__name"
      value={ingredient.name}
      onChange={(e) => (onChange(e, index, "name"))} />
    <input
      className="form-group__control ingredients-picker__count"
      value={ingredient.count}
      onChange={(e) => (onChange(e, index, "count"))} />
    <button 
      type="button" 
      className="ingredients-picker__remove btn btn--icon"
      onClick={() => (onRemove(index))}>
        <i className="mi mi-close mi-18 color--danger"></i>
    </button>
  </div>
);

const IngredientsPicker = ({label, ingredients, onAdd, onChange, onRemove}) => (
  <div className="form-group ingredients-picker">
    <label className="form-group__label">{label}</label>
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
      className="ingredients-picker__add btn btn--with-icon"
      onClick={onAdd}>
        <i className="mi mi-add mi-18"></i><span>Добавить</span>
    </button>
  </div>
);

export default IngredientsPicker;