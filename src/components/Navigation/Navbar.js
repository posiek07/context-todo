import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const  [isDropdown, setIsDropdown] = useState("collapse navbar-collapse mx-3")

  const setDropdown = () => {
    (isDropdown === "collapse navbar-collapse mx-3") ? setIsDropdown("collapse show navbar-collapse mx-3") : setIsDropdown("collapse navbar-collapse mx-3")
  }

  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink exact className="navbar-brand" to="/" style={{color: "#dc3545"}}>
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
        onClick={setDropdown}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={isDropdown} id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink onClick={setDropdown} exact className="nav-link" to="/">
            Tasks
          </NavLink>

          <NavLink onClick={setDropdown} className="nav-link" to="/calendar">
            Calendar
          </NavLink>

          <NavLink onClick={setDropdown} className="nav-link" to="/done">
            Done
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
