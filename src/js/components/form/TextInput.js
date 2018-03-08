import React, { Component } from "react";

class TextInput extends Component {
  render() {
    return (
      <div className="form__group">
        <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
        <input 
          id={this.props.id}
          name={this.props.id}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
          className="form__control" />
      </div>
    );
  }
}

export default TextInput;