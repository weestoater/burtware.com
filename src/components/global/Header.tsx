import React from "react";
import { NavLink } from "react-router-dom";
interface HeaderProps {
  site: string;
}

export default function Header(props: HeaderProps) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="top">
      <i className="bi bi-journal-code mx-2" aria-label="code" />
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
            <NavLink className="nav-link" to="/a11y" activeClassName="active">
              A11y
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/football" activeClassName="active">
              Football
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/react" activeClassName="active">
              React
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
