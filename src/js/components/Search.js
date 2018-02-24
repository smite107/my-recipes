import React, { Component } from 'react';

class Search extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
      active: false 
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

  setActive(state) {
    this.setState({active: state});
  }

  render() {
    return (
      <div className={'search ' + (this.state.active ? 'active' : '')} ref={node => this.node = node}>
        <input className="search__box" type="text" placeholder="Search..." />
        <button className="search__button" onClick={() => this.setActive(true)}></button>
      </div>
    );
  }
}

export default Search;