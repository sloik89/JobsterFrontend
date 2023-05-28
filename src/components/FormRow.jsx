import React from "react";
import Wrapper from "../wrappers/FormRow";
const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className="form-input"
      />
    </Wrapper>
  );
};

export default FormRow;
