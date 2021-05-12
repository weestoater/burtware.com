import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/burt.png";

interface HeaderProps {
  site: string;
}

export default function Header(props: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <img src={logo} alt="" className="header-logo" />
      <NavLink className="navbar-brand" to="/">
        {props.site}
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topNavBar"
        data-toggle="collapse"
        data-target="#topNavBar"
        aria-controls="topNavBar"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="topNavBar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/"
              activeClassName="active"
              exact={true}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about" activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/charts" activeClassName="active">
              Charts
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
