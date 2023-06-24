import React from "react";
import Wrapper from "../wrappers/Navbar";
import { FaHome, FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../components/Logo";
import {
  toggleSidebar,
  toggleDropdown,
  logoutUser,
} from "../features/user/userSlice";
const Navbar = () => {
  const { user, isDropdown } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };
  const dropdown = () => {
    dispatch(toggleDropdown());
  };
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button className="btn" type="button" onClick={dropdown}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={`dropdown ${isDropdown ? "show-dropdown" : ""}`}>
            <button
              type="button"
              className={`dropdown-btn`}
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
