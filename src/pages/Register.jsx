import React, { useState, useEffect } from "react";
import Wrapper from "../wrappers/Register";
import { FormRow, Logo } from "../components/";
import { toast } from "react-toastify";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, email, password } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
    }
  };
  const toogleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name */}
        {!values.isMember && (
          <FormRow
            name="name"
            type="text"
            handleChange={handleChange}
            value={values.name}
          />
        )}
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
        <p>
          {values.isMember ? "Not a member yer?" : "Already a member?"}
          <button type="button" onClick={toogleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
