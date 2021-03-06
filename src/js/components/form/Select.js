import React from "react";

const Select = ({id, label, value, options, onChange}) => (
  <div className="form-group">
    <label htmlFor={id} className="form-group__label">{label}</label>
    <select 
      id={id}
      name={id}
      value={value}
      onChange={(e) => onChange(e)}
      className="form-group__control">
      {options.map((o) => (
        <option key={o.id} value={o.id}>{o.name}</option>
      ))}
    </select>
  </div>
);

export default Select;