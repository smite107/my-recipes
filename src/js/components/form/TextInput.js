import React from "react";

const TextInput = ({id, label, value, onChange}) => (
  <div className="form__group">
    <label htmlFor={id} className="form__label">{label}</label>
    <input 
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e)}
      className="form__control" />
  </div>
);

export default TextInput;