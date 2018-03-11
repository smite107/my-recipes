import React, { Component } from "react";
import {Link} from "react-router-dom";
import FontAwesomeIcon from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/fontawesome-free-solid"

class Search extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      searchText: "",
      active    : false 
    }; 
  }

  componentWillMount() {
    // add event listener for clicks
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    // make sure you remove the listener when the component is destroyed
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    //https://medium.com/@pitipatdop/little-neat-trick-to-capture-click-outside-react-component-5604830beb7f
    //other solution
    //https://www.jamestease.co.uk/blether/detect-clicks-outside-element-with-react-components
    if(!this.node.contains(e.target)) {
      this.setActive(false);
      // the click was outside your component
    }
  }

  //handleSearch = (e) => {
  //  const value = e.target.value.toLowerCase();
///
  //  data.filter(user => {
   //   return user.name.toLowerCase().includes(value);
   // });

   // this.setState({active: state});
  //};

  setSearchText(text) {
    this.setState({searchText: text});
  }

  setActive(state) {
    this.setState({active: state});
  }

  createListItem(recipe) {
    return (
      <li key={recipe.id} onClick={() => { 
                                      this.setActive(false); 
                                      this.setSearchText(recipe.name); } 
                                  }>
        <Link to={"/recipe/" + recipe.id}>{recipe.name}</Link>
      </li>
    );
  }

  render() {
    let searchResults = [];
    const recipes = [
      {name: "Картошка фри", id: "1"},
      {name: "Супер-горох", id: "2"},
      {name: "Рисик по-китайски", id: "3"},
      {name: "Удон", id: "4"},
      {name: "Картофель по-деревенски", id: "5"}
    ];

    recipes.forEach((recipe) => {
      if (this.state.searchText.length > 2 && recipe.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
        searchResults.push(this.createListItem(recipe));
      }
    });

    return (
      <div 
          className={"search " + (this.state.active ? "active" : "")}
          ref={node => this.node = node}>
        <input 
          className="search__box" 
          type="text" 
          placeholder="Поиск..." 
          onChange={(e) => this.setSearchText(e.target.value)}
          value={this.state.searchText}  
          onClick={() => this.setActive(true)} />
        <button className="search__button" onClick={() => this.setActive(true)}>
          <FontAwesomeIcon icon={faSearch} size="2x" />
        </button>
        <ul className="search__results">
          {searchResults}
        </ul>
      </div>
    );
  }
}

export default Search;