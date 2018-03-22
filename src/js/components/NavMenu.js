import React, { Component } from "react";
import {NavLink} from "react-router-dom";

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

export default NavMenu;