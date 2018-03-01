import React, { Component } from "react";
import {NavLink} from "react-router-dom";

class NavMenu extends Component {
  render() {
    const categories = [
      {
        id: "1",
        name: "Завтраки"
      }, {
        id: "2",
        name: "Полдники"
      }, {
        id: "3",
        name: "Основные блюда"
      }, {
        id: "4",
        name: "Гарниры"
      }, {
        id: "5",
        name: "Десерты"
      }
    ];
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