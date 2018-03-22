import React, { Component } from "react";
import NavMenu from "./NavMenu";
import Search from "./Search";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/" className="header__logo">
          <img src={logo} alt="Мои рецепты" />
        </Link>
        <NavMenu categories={this.props.categories} />
        <div className="pull-right">
          <Search theme="transparent" />
        </div>
      </header>
    );
  }
}

export default Header;