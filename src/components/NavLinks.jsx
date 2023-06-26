import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utilis/links";
import { toggleSidebar } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
const NavLinks = () => {
  const dispatch = useDispatch();
  return (
    <div className="nav-links">
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
    </div>
  );
};

export default NavLinks;
