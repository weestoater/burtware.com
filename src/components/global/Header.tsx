import React from "react";
interface HeaderProps {
  site: string;
}

export default function Header(props: HeaderProps) {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="top">      
      <div className="navbar-brand">
      <i className="bi bi-journal-code mx-2" />
        {props.site}
      </div>
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
          <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
          <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
          <li className="nav-item"><a className="nav-link" href="/a11y">A11y</a></li>
          <li className="nav-item"><a className="nav-link" href="/agile">Agile</a></li>
          <li className="nav-item"><a className="nav-link" href="/biking">Biking</a></li>
          <li className="nav-item"><a className="nav-link" href="/football">Football</a></li>
          <li className="nav-item"><a className="nav-link" href="/react">React</a></li>
        </ul>
      </div>
    </nav>
  );
}
