import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/not-found.svg";
import Wrapper from "../wrappers/Errors";
const Error = () => {
  return (
    <Wrapper className="full-page">
      <img src={img} alt="error" />
      <h3>Ohh no page not found</h3>
      <p>We cant't seem to find the page you're looking for</p>
      <Link to="/" className="link">
        back home
      </Link>
    </Wrapper>
  );
};

export default Error;
