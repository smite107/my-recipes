import React, { Component } from "react";
import Header from "./Header";

class MainLayout extends Component {
  render() {
    return (
      <div className="app">
        <Header categories={this.props.categories} />
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

export default MainLayout;