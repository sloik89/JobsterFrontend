import React, { useEffect } from "react";
import Wrapper from "../wrappers/BigSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import Logo from "./Logo";
import { NavLinks } from "./";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { clearValues } from "../features/jobs/JobsSlice";
const BigSidebar = () => {
  const { isEditing } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/add-jobs") {
      dispatch(clearValues());
    }
  }, [location]);
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
