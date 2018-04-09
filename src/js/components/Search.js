import React, { Component } from "react";
import {Link} from "react-router-dom";

const SearchItem = ({id, name, onClick}) => (
  <li onClick={() => onClick(name)}>
    <Link to={"/recipe/" + id}>{name}</Link>
  </li>
);

class Search extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      searchText: "",
      recipes   : [],
      active    : false 
    }; 

    this.handleSelect = this.handleSelect.bind(this);
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
    if(!this.searchWrap.contains(e.target)) {
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

  handleChange(e) {
    this.setSearchText(e.target.value);

    if (e.target.value.length > 2) {
      fetch("/getRecipeByName", {
        method: "POST",
        body: JSON.stringify({name: e.target.value})
      }).then(res => res.json())
        .then(recipes => this.setState({ recipes }))
    } else {
      this.setState({recipes: []});
    }
  }

  handleSelect(name) {
    this.setActive(false); 
    this.setSearchText(name);

    // handle this situation.
  }

  render() {
    return (
      <div 
        className={"search " + (this.state.active ? "search--active " : "") + (this.props.theme == "transparent" ? "search--theme-transparent" : "")}
        ref={searchWrap => this.searchWrap = searchWrap}>
          <input 
            className="search__input" 
            type="text" 
            placeholder="Поиск..." 
            onChange={(e) => this.handleChange(e)}
            value={this.state.searchText}  
            onClick={() => this.setActive(true)} />
          <button className="search__button" onClick={() => this.setActive(true)}>
            <i className="mi mi-search mi-24"></i>
          </button>
          <ul className="search__results">
            {this.state.recipes.map((recipe) => (
              <SearchItem 
                key={recipe.id} 
                name={recipe.name} 
                id={recipe.id} 
                onClick={this.handleSelect} />
            ))}
          </ul>
      </div>
    );
  }
}

export default Search;