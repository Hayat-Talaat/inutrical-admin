import React from "react";
import Logo from './Logo/Logo';
import SidebarWrapper from './SidebarWrapper/SidebarWrapper';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar" data-color="white" data-active-color="danger">
          <Logo />
          <SidebarWrapper/>
    </div>
  );
};

export default Sidebar;
