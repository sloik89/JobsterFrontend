import React from "react";
import Wrapper from "../wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/user/userSlice";
import { NavLinks } from "../components";
const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className={`sidebar-container ${isSidebarOpen && "show-sidebar"}`}>
        <div className="content">
          <button
            className="close-btn"
            onClick={() => dispatch(toggleSidebar())}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
