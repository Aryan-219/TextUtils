// import React from 'react'

// export default function Navbar() {
//   return (
//     <div>

//     </div>
//   )
// }
// all the above code came from a snippet : "rfc"
// import {
//   Link
// } from "react-router-dom";
import PropTypes from "prop-types"; //impt snippet

import React from "react";

export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={props.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" to="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="">
              {/* <a className="nav-link active" aria-current="page" href="/Textform"> */}
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
              {/* <a className="nav-link" href="/About"> */}
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}
          <div className="form-check form-switch">
            <input onClick={props.toggleMode}
              className="form-check-input "
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">
              Enable {props.mode === 'light' ? 'dark' : 'light'} Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Enter title here",
  aboutText: "About",
};
