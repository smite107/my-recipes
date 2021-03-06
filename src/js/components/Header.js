import React from "react";
import NavMenu from "./NavMenu";
import Search from "./Search";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";

const Header = ({categories}) => (
  <header>
    <Link to="/" className="header__logo">
      <img src={logo} alt="Мои рецепты" />
    </Link>
    <NavMenu categories={categories} />
    <div className="pull-right">
      <Search theme="transparent" />
    </div>
  </header>
);

export default Header;