import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utilis/links";
import { toggleSidebar } from "../features/user/userSlice";
import Wrapper from "../wrappers/NavLinks";
import { useDispatch } from "react-redux";
const NavLinks = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={() => dispatch(toggleSidebar())}
            className={({ isActive }) => {
              return isActive ? "nav-link active" : "nav-link";
            }}
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </Wrapper>
  );
};

export default NavLinks;
