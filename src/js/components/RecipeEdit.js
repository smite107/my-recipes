import React, { Component } from "react";
import TextInput from "./form/TextInput";
import Textarea from "./form/Textarea";
import Select from "./form/Select";
import IngredientsPicker from "./form/IngredientsPicker";
import FilePicker from "./form/FilePicker";
import RecipesPicker from "./form/RecipesPicker";

class RecipeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      name          : "",
      category      : "",
      description   : "",
      ingredients   : [],
      recommended   : []
    }
    this.handleChange           = this.handleChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleIngredientAdd    = this.handleIngredientAdd.bind(this);
    this.handleIngredientRemove = this.handleIngredientRemove.bind(this);
    this.handleRecipeRemove     = this.handleRecipeRemove.bind(this);
    this.handleRecipeAdd        = this.handleRecipeAdd.bind(this);
  }

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    //get recipe
    fetch("/getRecipe/" + recipeId)
      .then(res => res.json())
      .then(recipe => this.setState({ ...recipe }));
    //get categories list
    fetch("/getAllCategories")
      .then(res => res.json())
      .then(categoriesList => this.setState({ categoriesList }));
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  }

  handleIngredientChange(e, index, type) {
    const ingredients = this.state.ingredients;
    ingredients[index][type] = e.target.value;
    this.setState({ingredients: ingredients});
  }

  handleIngredientAdd() {
    const ingredients = this.state.ingredients;
    ingredients.push({name: "", count: ""});
    this.setState({ingredients: ingredients});
  }

  handleIngredientRemove(index) {
    const ingredients = this.state.ingredients;
    ingredients.splice(index, 1);
    this.setState({ingredients: ingredients});
  }

  handleRecipeAdd() {
    
  }

  handleRecipeRemove(index) {
    const recipes = this.state.recommended;
    recipes.splice(index, 1);
    this.setState({recommended: recipes});
  }

  render() {
    return (
      <form>
        <TextInput
          value={this.state.name}
          id="name" 
          label="Название"
          onChange={this.handleChange} />
        <Select
          value={this.state.category.id}
          id="category"
          label="Категория"
          options={this.state.categoriesList}
          onChange={this.handleChange} />
        <IngredientsPicker
          label="Ингредиенты"
          ingredients={this.state.ingredients}
          onChange={this.handleIngredientChange}
          onAdd={this.handleIngredientAdd}
          onRemove={this.handleIngredientRemove} />
        <Textarea 
          value={this.state.description}
          id="description"
          label="Рецепт"
          onChange={this.handleChange}
          width="600"
          height="150" />
        <FilePicker
          id="photo" 
          label="Фото" />
        <RecipesPicker
          id="name" 
          label="Связанные рецепты"
          recipes={this.state.recommended}
          onAdd={this.handleRecipeAdd}
          onRemove={this.handleRecipeRemove} />
      </form>
    );
  }
}

export default RecipeEdit;