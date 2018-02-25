import React, { Component } from 'react';
import Search from './Search';
import logo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <a href="logo.com" className="header__logo">
          <img src={logo} alt="Мои рецепты" />
        </a>
        <nav class="header__menu">
          <ul>
            <li>
              <a href="#">Завтраки</a>
            </li>
            <li>
              <a href="#">Основные блюда</a>
            </li>
            <li>
              <a href="#">Полдники</a>
            </li>
            <li>
              <a href="#">Гарниры</a>
            </li>
            <li>
              <a href="#">Десерты</a>
            </li>
          </ul>
        </nav>
        <div class="pull-right">
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;