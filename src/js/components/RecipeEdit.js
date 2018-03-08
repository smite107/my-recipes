import React, { Component } from "react";
import TextInput from "./form/TextInput";
import Textarea from "./form/Textarea";
import Select from "./form/Select";
import IngredientsPicker from "./form/IngredientsPicker";
import ApiCaller from "./ApiCaller";

class RecipeEdit extends Component {
  constructor(props) {
    super(props);
    const recipeId = props.match.params.recipeId;
    const recipe = ApiCaller.getRecipe(recipeId);
    this.state = {
      name       : recipe.name,
      category   : recipe.category.id,
      description: recipe.description,
      ingredients: recipe.ingredients
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleIngredientsAdd = this.handleIngredientsAdd.bind(this);
    this.handleIngredientsRemove = this.handleIngredientsRemove.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleIngredientsChange(e, index, type) {
    const ingredients = this.state.ingredients;
    ingredients[index][type] = e.target.value;
    this.setState({ingredients: ingredients});
  }

  handleIngredientsAdd() {
    const ingredients = this.state.ingredients;
    ingredients.push({name: "", count: ""});
    this.setState({ingredients: ingredients});
  }

  handleIngredientsRemove(index) {
    const ingredients = this.state.ingredients;
    ingredients.splice(index, 1);
    this.setState({ingredients: ingredients});
    
  }

  render() {
    //{(e) => (this.handleChange(e))} ????  why not this.handleChange
    const categories = ApiCaller.getAllCategories();
    return (
      <form>
        <TextInput 
          value={this.state.name} 
          id="name" label="Название" 
          onChange={this.handleChange} /> 
        <Select 
          value={this.state.category} 
          id="category" 
          label="Категория" 
          options={categories} 
          onChange={this.handleChange} />
        <IngredientsPicker 
          label="Ингредиенты" 
          ingredients={this.state.ingredients}
          onChange={this.handleIngredientsChange}
          onAdd={this.handleIngredientsAdd}
          onRemove={this.handleIngredientsRemove} />
        <Textarea 
          value={this.state.description} 
          id="description" 
          label="Рецепт" 
          onChange={this.handleChange} />
      </form>
    );
  }
}

export default RecipeEdit;