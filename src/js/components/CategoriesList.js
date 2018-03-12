import React, { Component } from "react";
import {Link} from "react-router-dom";

class CategoriesListContainer extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    fetch("/getAllCategories")
      .then(res => res.json())
      .then(categories => this.setState({ categories }));
  }

  render() {
    return (
      <div className="categories-list">
        <CategoriesList categories={this.state.categories} columnWidth="3" />
      </div>
    );
  }
}

const CategoriesList = ({categories, columnWidth}) => (
  <div className="row">
    {categories.map((c) => (
      <div className={"col--" + columnWidth + " mb--30"} key={c.id}>
        <CategoryPreview id={c.id} name={c.name} />
      </div>
    ))}
  </div>
);


const CategoryPreview = ({id, name}) => (
  <div className="preview">
    <Link to={"/category/" + id} className="preview__image-wrap">
      <img src={"../../images/categories/" + id + ".jpg"} alt={name} />
    </Link>
    <Link to={"/category/" + id} className="preview__name preview__name--category">
      {name}
    </Link>
  </div>
);

export {CategoriesListContainer, CategoryPreview}
export default CategoriesList;