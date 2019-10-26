import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';


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
function SignUp(){
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
        <Route exact path = "/" component ={Login} />
        <Route exact path = "/ component ={LandingPage} />
        <Route exact path = "/register" component ={SignUp} />
        <Route exact path = "/game" component ={Game} />
        <Route path = "*" component = {Page404} />
      </Switch>
      <Footer/>
    </Router>
    );
  }
}

export default App;