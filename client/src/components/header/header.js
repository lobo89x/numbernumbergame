import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <h4 style={{color:"#00ff58"}} className="">NumberNauts</h4>
          <Navbar.Brand href="#landingPage"></Navbar.Brand>
          <Nav className="ml-auto font-weight-bold" >
            <Nav.Link style={{color:"#00ff58"}} href="signup">Register</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="Login">Login</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="Game">Play Now</Nav.Link>
          </Nav>
          </Navbar>
          )
  }

export default Header;