import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    const Name = "user";
  
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div
            className="container-fluid"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ flex: 2 }}>
              <ul
                className="navbar-nav"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "100%",
                }}
              >
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "nav-link active current" : "nav-link")}
                    style={{ fontSize: "20px" }}
                    aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/schools"
                    className={({ isActive }) => (isActive ? "nav-link active current" : "nav-link")}
                    style={{ fontSize: "20px" }}
                  >
                    Schools
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/notifications"
                    className={({ isActive }) => (isActive ? "nav-link active current" : "nav-link")}
                    style={{ fontSize: "20px" }}
                  >
                    Notifications
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ fontSize: "20px" }}
                  >
                    <i className="fa-solid fa-user"></i> {Name}
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" style={{ fontSize: "20px" }} href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" style={{ fontSize: "20px" }} href="#">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div style={{ flex: 1 }}></div>
          </div>
          <img
            style={{ marginRight: "50px" }}
            height={"70px"}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS8RFoQYw8LcmoQC8R61of9JH-tddwxSdEoQ&s"
            alt=""
          />
        </nav>
      </>
    );
};

export default Navbar;
