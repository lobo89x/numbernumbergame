import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { Navbar, Nav} from 'react-bootstrap'


function Header() {
  // const Top = (props) => (
  //  <Navbar className="topbar p-4 border-bottom" bg="dark" fixed="top" variant="dark">
  //  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
  //  <Nav className="mr-auto">
  //    <Nav.Link href="#home">Home</Nav.Link>
  //    <Nav.Link href="#features">Features</Nav.Link>
  //    <Nav.Link href="#pricing">Pricing</Nav.Link>
  //  </Nav>
  // }
}

function Footer(){
  return(
    <footer>
      <p>WE MADE THIS GAME</p>
    </footer>
  )
}
function Login(){
  return(
    <div>
      Login
    </div>
  )
}
function LandingPage(){
  return(
    <div>
      LandingPage
    </div>
  )
}
function Register(){
  return(
    <div>SignUp</div>
  )
}
function Game(){
  return(
    <div>Game</div>
  )
}
class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
      <Switch>
        <Route exact path = "/" component ={LandingPage} />
        <Route exact path = "/register" component ={Register} />
        <Route exact path = "/login" component ={Login} />
        <Route exact path = "/game" component ={Game} />
        <Route path = "*" component = {Page404} />
      </Switch>
      <Footer/>
    </Router>
    );
  }
}

export default App;