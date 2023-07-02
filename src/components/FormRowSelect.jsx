import React from "react";
import Wrapper from "../wrappers/ForRowSelect";
const FormRowSelect = ({ name, value, handleJobInput, statusOptions }) => {
  return (
    <Wrapper className="form-row">
      <label htmlFor="status" className="form-label">
        status
      </label>
      <select name={name} id={name} value={value} onChange={handleJobInput}>
        {statusOptions.map((item, idx) => {
          return (
            <option value={item} key={idx}>
              {item}
            </option>
          );
        })}
      </select>
    </Wrapper>
  );
};

export default FormRowSelect;
