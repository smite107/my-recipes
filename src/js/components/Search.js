import React, { Component } from 'react';

class Search extends Component {
  constructor(props) { 
    super(props); 
    this.state = {
      searchText: '',
      active    : false 
    }; 
  }

  componentWillMount() {
    // add event listener for clicks
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    // make sure you remove the listener when the component is destroyed
    document.removeEventListener('mousedown', this.handleClick, false);
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

  setSearchText(e) {
    this.setState({searchText: e.target.value});
  }

  setActive(state) {
    this.setState({active: state});
  }

  render() {
    let searchResults = [];
    const recipes = [
      {name: 'Картошка фри'},
      {name: 'Супер-горох'},
      {name: 'Рисик по-китайски'},
      {name: 'Удон'},
      {name: 'Картофель по-деревенски'}
    ];

    recipes.forEach((recipe) => {
      if (this.state.searchText.length > 2 && recipe.name.toLowerCase().indexOf(this.state.searchText.toLowerCase()) !== -1) {
        searchResults.push(<li key={recipe.name}>{recipe.name}</li>);
      }
    });

    return (
      <div className={'search ' + (this.state.active ? 'active' : '')} 
           onClick={() => this.setActive(true)} 
           ref={node => this.node = node}>
        <input className="search__box" 
               type="text" 
               placeholder="Поиск..." 
               onChange={(e) => this.setSearchText(e)}
               value={this.state.searchText} />
        <button className="search__button"></button>
        <ul class="search__results">
          {searchResults}
        </ul>
      </div>
    );
  }
}

export default Search;