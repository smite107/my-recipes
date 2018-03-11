import React, { Component } from "react";
import TextInput from "./form/TextInput";
import Textarea from "./form/Textarea";
import Select from "./form/Select";
import IngredientsPicker from "./form/IngredientsPicker";

class RecipeEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoriesList: [],
      name          : "",
      category      : "",
      description   : "",
      ingredients   : []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleIngredientsAdd = this.handleIngredientsAdd.bind(this);
    this.handleIngredientsRemove = this.handleIngredientsRemove.bind(this);
  }

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    //get recipe
    fetch('/getRecipe/' + recipeId)
      .then(res => res.json())
      .then(recipe => this.setState({ ...recipe }));
    //get categories list
    fetch('/getAllCategories')
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
    return (
      <form>
        <TextInput
          value={this.state.name}
          id="name" label="Название"
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
          onChange={this.handleIngredientsChange}
          onAdd={this.handleIngredientsAdd}
          onRemove={this.handleIngredientsRemove} />
        <Textarea 
          value={this.state.description}
          id="description"
          label="Рецепт"
          onChange={this.handleChange}
          width="600"
          height="150" />
      </form>
    );
  }
}

export default RecipeEdit;