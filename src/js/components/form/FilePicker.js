import React, { Component } from "react";

class FilePicker extends Component {
  //this.fileInput.files[0].name

  render() {
    return (
      <div className="form__group">
        <label htmlFor={this.props.id} className="form__label">{this.props.label}</label>
        <input 
          type="file"
          id={this.props.id}
          name={this.props.id}
          ref={input => {
            this.fileInput = input;
          }}
          className="form__control" />
      </div>
    );
  }
}

export default FilePicker;