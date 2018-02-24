import React, { Component } from 'react';
import Search from './Search';
import logo from '../../images/logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <a href="logo.com" className="logo">
          <img src={logo} alt="Мои рецепты" />
        </a>
        <div class="pull-right">
          <Search />
        </div>
      </header>
    );
  }
}

export default Header;