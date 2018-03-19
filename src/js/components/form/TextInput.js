import React from "react";

const TextInput = ({id, label, value, onChange}) => (
  <div className="form-group">
    <label htmlFor={id} className="form-group__label">{label}</label>
    <input 
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e)}
      className="form-group__control" />
  </div>
);

export default TextInput;