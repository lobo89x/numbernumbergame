import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
      <Navbar bg="light" variant="light">
          <Navbar.Brand href="#landingPage"></Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#Register">Sign Up</Nav.Link>
            <Nav.Link href="#Login">Login</Nav.Link>
            <Nav.Link href="#Game">Play Now</Nav.Link>
          </Nav>
          </Navbar>
          )
  }

export default Header;