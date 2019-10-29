import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


function Footer(){
    return (
      <footer className="fixed-bottom"> 
      <Navbar bg="light" variant="light">
      <Navbar.Brand href="/login">login</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Text>NumberNauts</Nav.Text>
      </Nav>
      </Navbar>
      </footer>
  )
  }

  export default Footer;