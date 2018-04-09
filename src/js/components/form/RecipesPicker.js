import React, { Component } from "react";
import Modal from "../Modal";
import Search from "../Search";
import Select from "./Select";

const RecipeSelector = ({recipe, index, onRemove}) => (
  <div className="col--3 mb--30">
    <div className="recipes-picker__image-wrap">
      <img src={"../../images/uploads/" + recipe.id + ".jpg"} className="recipes-picker__item-image" alt={recipe.name} />
      <button 
        type="button" 
        className="recipes-picker__remove"
        onClick={() => (onRemove(index))}>
          <i className="mi mi-close mi-18"></i>
      </button>
    </div>
    <div className="recipes-picker__name">{recipe.name}</div>
  </div>
);

class RecipesPicker extends Component {
  constructor() {
    super();
    this.state = {
      dialogVisible: false
    }
    this.closeRecipeChoosing = this.closeRecipeChoosing.bind(this);
  }

  closeRecipeChoosing() {
    this.setState({dialogVisible: false});
  }

  openRecipeChoosing() {
    this.setState({dialogVisible: true});
  }

  render() {
    return (
      <div className="form-group recipes-picker">
        <label className="form-group__label">{this.props.label}</label>
        <div className="row">
          {this.props.recipes.map((recipe, index) => (
            <RecipeSelector
              key={index}
              recipe={recipe}
              index={index}
              onRemove={this.props.onRemove} />
          ))}
        </div>
        <button 
          type="button" 
          className="recipes-picker__add btn btn--with-icon"
          onClick={() => this.openRecipeChoosing()}>
            <i className="mi mi-add mi-18"></i><span>Добавить</span>
        </button>
        <ChooseRecipeModal 
          visible={this.state.dialogVisible}
          onClose={this.closeRecipeChoosing}
          categories={this.props.categories} />
      </div>
    );
  }
}

class ChooseRecipeModal extends Component {
  constructor(props) {
    super(props);
  }

  handleChange() {
    alert("f");
  }

  render() {
    return (
      <Modal 
        header="Выберите рецепт" 
        visible={this.props.visible}
        onClose={() => this.props.onClose()}>
          <Select
            label="Категория"
            options={this.props.categories}
            onChange={(e) => this.handleChange(e)} />
          <Search />
      </Modal>
    );
  }
}

export default RecipesPicker;