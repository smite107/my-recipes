import React, { Component } from "react";

class Modal extends Component {  
  hide() {
    this.props.onClose()
  }
  
  handleClick(e) {
    if(e.target == this.overlay) {
      this.hide();
    }
  }

  render() {
    return (
      <div 
        className={"modal " + (this.props.visible ? "modal--open" : "modal--close")}
        onClick={(e) => this.handleClick(e)} 
        ref={overlay => this.overlay = overlay}>
        <div className="modal__body">
          <h1 className="modal__header">{this.props.header}</h1>
          {this.props.children}
          <button 
            type="button"
            className="modal__close btn btn--icon"
            onClick={() => this.hide()}>
            <i className="mi mi-close"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;