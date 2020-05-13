import React from "react";
import { Link } from "react-router-dom";

const SidebarWrapper = () => {
  return (
    <div className="sidebar-wrapper">
      <ul className="nav">
        <p className="head-items">Navigation</p>
        <li className="active">
          <Link to="/">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Home Selected.png"
              />
              <span className="item-text">Dashboard</span>
            </div>
          </Link>
        </li>

        <li>
          <Link to="/staff-list">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Staff"
                src="assets/img/sidebar-icons/Staff.png"
              />
              <span className="item-text">iNutrical Staff</span>
            </div>
          </Link>
        </li>

        <li>
          <Link to="/hospitals-list">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Hospital.png"
              />
              <span className="item-text">Hospitals</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/disease-list">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Disease.png"
              />
              <span className="item-text">Disease</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/formula-list">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Formula.png"
              />
              <span className="item-text">Formula</span>
            </div>
          </Link>
        </li>

        <p className="head-items">Others</p>
        <li>
          <Link to="/website">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Website.png"
              />
              <span className="item-text">Website</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/more-info">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Shortcuts.png"
              />
              <span className="item-text">More Info</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/stmp">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/STMP.png"
              />
              <span className="item-text">STMP</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <div className="itemWrapper">
              <img
                className="item-icon"
                alt="Home"
                src="assets/img/sidebar-icons/Settings.png"
              />
              <span className="item-text">Settings</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarWrapper;
