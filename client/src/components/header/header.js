<<<<<<< HEAD:src/components/header/header.js
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <h4 className="text-white">NumberNauts</h4>
          <Navbar.Brand href="#landingPage"></Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="Register">Sign Up</Nav.Link>
            <Nav.Link href="Login">Login</Nav.Link>
            <Nav.Link href="Game">Play Now</Nav.Link>
          </Nav>
          </Navbar>
          )
  }

=======
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

>>>>>>> 0131bcf51e73c34097866a417618e2e1e8a136b9:client/src/components/header/header.js
export default Header;