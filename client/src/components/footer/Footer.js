<<<<<<< HEAD:src/components/footer/Footer.js
import React from "react";

function Footer(){
    return (
      <footer className="fixed-bottom"> 
       <p className="text-center bg-dark text-white p-3 m-0">NumberNauts &copy; 2019</p>
      </footer>
  )
  }

=======
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

>>>>>>> 0131bcf51e73c34097866a417618e2e1e8a136b9:client/src/components/footer/Footer.js
  export default Footer;