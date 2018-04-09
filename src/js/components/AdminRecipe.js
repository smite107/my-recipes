import React, { Component } from "react";
import TextInput from "./form/TextInput";
import Textarea from "./form/Textarea";
import Select from "./form/Select";
import IngredientsPicker from "./form/IngredientsPicker";
import FilePicker from "./form/FilePicker";
import RecipesPicker from "./form/RecipesPicker";

const cleanState = {
  id          : "",
  name        : "",
  description : "",
  categoryId  : "",
  ingredients : [],
  recommended : [],
  categoriesList: []
}

class AdminRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = cleanState;

    this.handleChange           = this.handleChange.bind(this);
    this.handleIngredientChange = this.handleIngredientChange.bind(this);
    this.handleIngredientAdd    = this.handleIngredientAdd.bind(this);
    this.handleIngredientRemove = this.handleIngredientRemove.bind(this);
    this.handleRecipeRemove     = this.handleRecipeRemove.bind(this);
    this.handleRecipeAdd        = this.handleRecipeAdd.bind(this);
    this.handleSubmit           = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const recipeId = this.props.match.params.recipeId;
    
    if (recipeId) {
      //get recipe
      fetch("/getRecipe/" + recipeId)
        .then(res => res.json())
        .then(recipe => this.setState({ ...recipe }));
    }

    //get categories list
    this.setState({categoriesList: this.props.categories});

    //if (recipeId) {
    //  //get recommended recipes
    //  fetch("/getRecommendedRecipesList/" + recipeId)
    //    .then(res => res.json())
    //    .then(recommended => this.setState({ recommended }));
    //}
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

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      id: this.state.id,
      recipe: {
        name: this.state.name,
        category: this.state.categoryId ? this.state.categoryId : this.state.categoriesList[0].id,
        description: this.state.description,
        ingredients: this.state.ingredients
      }
    }

    if (this.props.type === "add") {
      fetch("/addRecipe", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(res => res.json())
        .then(resultId => this.props.history.push("/admin/edit/" + resultId));
    } else {
      fetch("/updateRecipe", {
        method: "POST",
        body: JSON.stringify(data)
      }).then(alert('Saved!'));
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <TextInput
          value={this.state.name}
          id="name" 
          label="Название"
          onChange={this.handleChange} />
        <Select
          value={this.state.categoryId}
          id="categoryId"
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
          onRemove={this.handleRecipeRemove}
          categories={this.state.categoriesList} />
        <button type="submit" className="btn">Сохранить</button>
      </form>
    );
  }
}

export default AdminRecipe;