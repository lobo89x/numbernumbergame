import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";






function Header() {
    return (
      <Navbar bg="dark" variant="dark">
        <h4 style={{color:"#00ff58"}} className="">NumberNauts</h4>
          <Navbar.Brand href="#landingPage"></Navbar.Brand>
          <Nav className="ml-auto font-weight-bold">

          <audio className="ml-4" src="numberGameSong.mp3" controls className="mr-4">
          <p>If you are reading this, it is because your browser does not support the audio element.</p>
          </audio>

      {/* <audio id="player" src = "numberGameSong.mp3"></audio>
      <div>
      <button className='bg-success' onclick = "document.getElementById('player').play()">Play</button>
      <button className='bg-success' onclick = "document.getElementById('player').pause()">Pause</button>
      <button onclick = "document.getElementById('player').volume += 0.2">Vol+</button>
      <button onclick = "document.getElementById('player').volume -= 0.2">Vol-</button>
      </div> */}

      
            <Nav.Link style={{color:"#00ff58"}} href="signup">Sign Up</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="Login">Login</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="Game">Play Now</Nav.Link>
          </Nav>
          </Navbar>
          )
  }
  
export default Header;