import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <>
      <Navbar className="navbar">
        <Nav.Link as={NavLink} to="/list" className="link">
          Todo List
        </Nav.Link>
        <Nav.Link as={NavLink} to="/unchecked" className="link">
          Active
        </Nav.Link>
        <Nav.Link as={NavLink} to="/checked" className="link">
          Completed
        </Nav.Link>
      </Navbar>
      
    </>
  );
}

export default NavBar;
