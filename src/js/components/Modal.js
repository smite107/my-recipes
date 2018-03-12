import React, { Component } from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/fontawesome-free-solid";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      visible: true
    }
  }

  show() {
    this.setState({visible: true});
  }

  hide() {
    this.setState({visible: false});
  }

  handleClick(e) {
    if(e.target == this.overlay) {
      this.hide();
    }
  }

  render() {
    return (
      <div 
        className={"modal " + (this.state.visible ? "open" : "close")}
        onClick={(e) => this.handleClick(e)} 
        ref={overlay => this.overlay = overlay}>
        <div className="modal__body">
          Something
          <button 
            type="button"
            className="modal__close btn btn--icon"
            onClick={() => this.hide()}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    )
  }
}

export default Modal;