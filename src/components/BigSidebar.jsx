import React from "react";
import Wrapper from "../wrappers/BigSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import Logo from "./Logo";
import { NavLinks } from "./";
import { useSelector, useDispatch } from "react-redux";
const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
    <Wrapper>
      <div
        className={`${
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }`}
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
