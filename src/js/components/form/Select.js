import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <div className="form__group">
        <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
        <select 
          id={this.props.id}
          name={this.props.id}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
          className="form__control">
          {this.props.options.map((v) => (
            <option key={v.id} value={v.id}>{v.name}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default Select;