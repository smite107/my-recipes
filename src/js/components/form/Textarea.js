import React, { Component } from "react";

class Textarea extends Component {
  render() {
    return (
      <div className="form__group">
        <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
        <textarea id={this.props.id}
                  name={this.props.id}
                  value={this.props.value}
                  onChange={(e) => this.props.onChange(e)}
                  className="form__control" />
      </div>
    );
  }
}

export default Textarea;