import React from "react";
import {NavLink} from "react-router-dom";

const AdminNavMenu = () => (
  <nav className="header__menu">
    <ul>
      <li>
        <NavLink to="/admin/add/">Добавить рецепт</NavLink>
      </li>
    </ul>
  </nav>
);

export default AdminNavMenu;