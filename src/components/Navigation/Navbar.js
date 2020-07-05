import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="nav-link" to="/">
        ToDo APP
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse mx-3" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-link" to="/">
             Tasks
          </NavLink>

          <NavLink className="nav-link" to="/calendar">
            Calendar
          </NavLink>

          <NavLink className="nav-link" to="/done">
            Done
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
