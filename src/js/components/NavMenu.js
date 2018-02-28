import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class NavMenu extends Component {
  render() {
    return (
      <nav className="header__menu">
        <ul>
          <li>
            <NavLink to="/recipe/1" activeClassName="active">Завтраки</NavLink>
          </li>
          <li>
            <NavLink to="/recipe/2" activeClassName="active">Основные блюда</NavLink>
          </li>
          <li>
            <NavLink to="/recipe/3" activeClassName="active">Полдники</NavLink>
          </li>
          <li>
            <NavLink to="/recipe/4" activeClassName="active">Гарниры</NavLink>
          </li>
          <li>
            <NavLink to="/recipe/5" activeClassName="active">Десерты</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavMenu;