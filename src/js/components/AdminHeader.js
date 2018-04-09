import React from "react";
import AdminNavMenu from "./AdminNavMenu";
import Search from "./Search";
import {Link} from "react-router-dom";
import logo from "../../images/logo.png";

const AdminHeader = () => (
  <header>
    <Link to="/admin" className="header__logo">
      <img src={logo} alt="Мои рецепты" />
    </Link>
    <AdminNavMenu />
    <div className="pull-right">
      <Search theme="transparent" />
    </div>
  </header>
);

export default AdminHeader;