import React from "react";

const Textarea = ({id, label, value, width, height, onChange}) => {
  const styles = {
    width: width ? width + "px" : "200px",
    height: height ? height + "px" : "100px",
  };

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-group__label">{label}</label>
      <textarea id={id}
                name={id}
                value={value}
                onChange={(e) => onChange(e)}
                className="form-group__control"
                style={styles} />
    </div>
  );
}

export default Textarea;