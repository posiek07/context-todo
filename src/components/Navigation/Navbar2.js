import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Navbar2 = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} bg="light" expand="lg">
      <Navbar.Brand style={{ color: "#dc3545" }}>ToDo APP</Navbar.Brand>
      <Navbar.Toggle
        onClick={() => setExpanded(expanded ? false : "expanded")}
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            exact
            className="nav-link"
            to="/"
            onClick={() => setExpanded(false)}
          >
            Tasks
          </NavLink>

          <NavLink
            className="nav-link"
            to="/calendar"
            onClick={() => setExpanded(false)}
          >
            Calendar
          </NavLink>

          <NavLink
            className="nav-link"
            to="/done"
            onClick={() => setExpanded(false)}
          >
            Done
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navbar2;
