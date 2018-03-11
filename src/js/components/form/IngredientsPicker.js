import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { faTrashAlt } from "@fortawesome/fontawesome-free-regular"
import { faPlus } from "@fortawesome/fontawesome-free-solid"

class IngredientsPicker extends Component {
  
  createSelector(ingredient, index) {
    return (
      <div className="ingredients__item-wrap" key={index}>
        <input
          className="ingredients__item-name"
          value={ingredient.name}
          onChange={(e) => (this.props.onChange(e, index, "name"))} />
        <input
          className="ingredients__item-count"
          value={ingredient.count}
          onChange={(e) => (this.props.onChange(e, index, "count"))} />
        <button 
          type="button" 
          className="ingredients__item-remove btn btn--icon color--danger"
          onClick={() => (this.props.onRemove(index))}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form__group ingredients">
        <label className="form__label">{this.props.label}</label>
        {this.props.ingredients.map((i, index) => (
          this.createSelector(i, index)
        ))}
        <button 
          type="button" 
          className="ingredients__add btn btn--with-icon"
          onClick={this.props.onAdd}>
            <FontAwesomeIcon icon={faPlus} /> Добавить
        </button>
      </div>
    );
  }
}

export default IngredientsPicker;