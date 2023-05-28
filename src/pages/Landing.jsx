import React from "react";
import { Logo } from "../components";
import main from "../assets/main.svg";
import Wrapper from "../wrappers/Testing";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <Wrapper>
      <nav className="flex-align">
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p className="text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            iusto minima natus nisi repellat, explicabo placeat laudantium
            molestiae consectetur quasi.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="main-image" className="img main-img" />
      </div>
    </Wrapper>
  );
};
// const Wrapper = styled.main`
//   nav {
//     width: var(--fluid-width);
//     max-width: var(--max-width);
//     margin: 0 auto;
//     height: var(--nav-height);
//     display: flex;
//     align-items: center;
//   }
//   .page {
//     display: grid;
//     align-items: center;
//     justify-content: center;
//   }
//   h1 {
//     text-transform: capitalize;
//     font-weight: bold;
//     font-size: 3rem;
//     margin: 0;
//     span {
//       color: #5454a1;
//     }
//   }
//   .main-img {
//     display: none;
//   }
//   @media screen and (min-width: 992px) {
//     .main-img {
//       display: block;
//     }
//     .page {
//       grid-template-columns: 1fr 1fr;
//       column-gap: 2rem;
//     }
//   }
// `;
export default Landing;
