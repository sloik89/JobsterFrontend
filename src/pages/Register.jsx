import React, { useState, useEffect } from "react";
import Wrapper from "../wrappers/Register";
import { FormRow, Logo } from "../components/";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name */}
        <FormRow
          name="name"
          type="text"
          handleChange={handleChange}
          value={values.name}
        />
        {/* email */}
        <FormRow
          name="email"
          type="email"
          handleChange={handleChange}
          value={values.email}
        />
        {/* password */}
        <FormRow
          name="password"
          type="text"
          handleChange={handleChange}
          value={values.password}
        />
        <button type="sumbit" className="btn btn-block">
          submit
        </button>
      </form>
    </Wrapper>
  );
};

export default Register;
