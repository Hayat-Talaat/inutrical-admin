import React from "react";
import "../mainPanel.css";

const NavBars = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
      <div className="container-fluid">
        <div className="navbar-wrapper">
          <div className="navbar-toggle">
            <button type="button" className="navbar-toggler">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <a className="navbar-brand" href="javascript:;">
            Dashboard
          </a>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navigation"
          aria-controls="navigation-index"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
          <span className="navbar-toggler-bar navbar-kebab"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navigation"
        >
          <form>
            <div className="input-group no-border">
              <input
                type="text"
                value=""
                className="form-control"
                placeholder="Search..."
              />
              <div className="input-group-append">
                <div className="input-group-text">
                  <i className="nc-icon nc-zoom-split"></i>
                </div>
              </div>
            </div>
          </form>
          <ul className="navbar-nav">
            <li className="nav-item btn-rotate dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="nc-icon nc-bell-55"></i>
                <p>
                  <span className="d-lg-none d-md-block">Some Actions</span>
                </p>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item" href="#">
                  Notification 1
                </a>
                <a className="dropdown-item" href="#">
                  Notification 2
                </a>
                <a className="dropdown-item" href="#">
                  Notification 3
                </a>
              </div>
            </li>

            <li className="nav-item btn-rotate dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="http://example.com"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="user-img"
                  alt="user-img"
                  src="assets/img/logo/iNutrical Logo@2x.png"
                />
                <p>
                  <span className="d-lg-none d-md-block">Some Actions</span>
                </p>
              </a>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a className="dropdown-item">
                  <div className="row">
                    <div className="col-5">
                      <img
                        className=""
                        alt="user-img"
                        src="assets/img/logo/iNutrical Logo@2x.png"
                      />
                    </div>
                    <div className="col-7">
                      <p>Hayat Talaat</p>
                      {/* <span>Admin</span> */}
                    </div>
                  </div>
                </a>

                <hr className="divider" />
                <a className="dropdown-item">
                  <div className="row">
                    <div className="col-4">
                      <img
                        className=""
                        alt="user-img"
                        src="assets/img/navbar/Logout.png"
                      />
                    </div>
                    <div className="col-8">
                      <span>Logout</span>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBars;
