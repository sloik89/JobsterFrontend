import React, { useState, useEffect } from "react";
import Wrapper from "../wrappers/Register";
import { FormRow, Logo } from "../components/";
import { toast } from "react-toastify";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, isLoading } = useSelector((store) => store.user);
  const [values, setValues] = useState(initialState);
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [navigate, user]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error("Please fill out all fields");
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
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
        <button type="sumbit" className="btn btn-block" disabled={isLoading}>
          {isLoading ? "loading" : "submit"}
        </button>
        {values.isMember && (
          <button
            className="btn btn-block"
            onClick={() => {
              setValues({
                ...values,
                email: "testUser@test.com",
                password: "secret",
              });
            }}
          >
            Demo
          </button>
        )}
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
