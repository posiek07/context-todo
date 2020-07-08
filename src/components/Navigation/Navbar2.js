import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
const Navbar2 = () => {
  return (
  <Navbar bg="light" expand="lg">
  <Navbar.Brand style={{color: "#dc3545"}}>ToDo APP</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink exact className="nav-link" to="/">
            Tasks
          </NavLink>

          <NavLink className="nav-link" to="/calendar">
            Calendar
          </NavLink>

          <NavLink className="nav-link" to="/done">
            Done
          </NavLink>

    </Nav>
  </Navbar.Collapse>
</Navbar>
  );
};

export default Navbar2;
