import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import ApiCaller from "./ApiCaller";

class NavMenu extends Component {
  render() {
    const categories = ApiCaller.getAllCategories();
    return (
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
  }
}

export default NavMenu;