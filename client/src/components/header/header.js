import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import "./header.css";
// import Button from "react-bootstrap/Button";




class Header extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username: ""
    }
  }

 componentDidMount(){
   axios.get("/loggedin")
   .then(res=> 
    this.setState({
      username: res.data.username
    }))
 }

   // call to log user out of backend
  // logOut =
  //   axios.post("/logout").then(response => {
  //     console.log(response);
  //     this.setState({
  //       user: null,
  //       socket: null
  //     });
  //   });
  // };

  logOut = () => {
    axios.post('/logout')
  }

  render(){
    return (
      <Navbar bg="dark" variant="dark">
        <img src= "/astro2.png" style={{height:"45px", width:"45px", background:"hidden"}} alt="logo"></img>
        <h2 style={{color:"#00ff58"}} className="ml-3 mt-2">NumberNauts</h2>
          <Navbar.Brand href="#landingPage"></Navbar.Brand>
          <Nav className="ml-auto font-weight-bold">
        
          {/* <audio className="ml-4" src="numberGameSong.mp3" controls className="mr-4">
          <p>If you are reading this, it is because your browser does not support the audio element.</p>
          </audio> */}
      
            <Nav.Link style={{color:"#00ff58"}} href="signup">Sign Up</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="Login">{this.props.user === null ? "Login": "Logged in as "}{this.props.user}</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="Game">Play Now</Nav.Link>
            <Nav.Link style={{color:"#00ff58"}} href="leaderboard">Leaderboard</Nav.Link>
            {this.props.user !== null? 
            <Nav.Link onClick={this.logOut} style={{color:"#00ff58"}} href="Login">Logout</Nav.Link> : ''            
          }
          </Nav>
          </Navbar>
          )
  }
    
  }
  
export default Header;