import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class NavMenuContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("/getAllCategories")
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
  }

  render() {
    return (
      <NavMenu categories={this.state.categories} />
    );
  }
}

const NavMenu = ({categories}) => (
  <nav className="header__menu">
    <ul>
      {categories.map((c) => (
        <li key={c.id}>
          <NavLink to={"/category/" + c.id} activeClassName="active">{c.name}</NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export {NavMenuContainer}
export default NavMenu;