import React, { Component } from "react";
import Search from "./Search";
import {Link, NavLink} from 'react-router-dom';
import logo from "../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/" className="header__logo">
          <img src={logo} alt="Мои рецепты" />
        </Link>
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
        <div className="pull-right">
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;