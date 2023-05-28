import React from "react";
import logo from "../assets/logo.svg";
import main from "../assets/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="logo" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            iusto minima natus nisi repellat, explicabo placeat laudantium
            molestiae consectetur quasi.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="main image" className="img main-img" />
      </div>
    </main>
  );
};

export default Landing;
