import React, { Component } from "react";
import AdminHeader from "./AdminHeader";

class AdminLayout extends Component {
  render() {
    return (
      <div className="app">
        <AdminHeader />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default AdminLayout;