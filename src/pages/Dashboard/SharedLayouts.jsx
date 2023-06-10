import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, BigSidebar, SmallSidebar } from "../../components";
import Wrapper from "../../wrappers/SharedLayouts";
const SharedLayouts = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayouts;
