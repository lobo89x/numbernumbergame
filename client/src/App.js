import "./index.css";
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/header";
import Page404 from "./components/error/Page404";
import Footer from "./components/footer/Footer";
import Game from "./components/Game/Game";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import Lobby from './lobby';
import Socket from 'socket.io-client';

// the url used for the connection to the server in development we use localhost on heroku we need to use /
const socketUrl = (process.env.NODE_ENV === "development") ? "http://localhost:3001" : "/" 

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
  constructor(){
    super();
    this.state = {
      // holds the socket connection
      socket: null,
      // should be set when the user logs in ?
      user: null
    }
  }
  componentDidMount(){
    // if user is logged in then do connection ?
    if(this.state.user){
      this.setState({socket: socketIOClient.connect(socketUrl)});
    }
  }
  render() {
    return (
      <Router>
        <Header/>
      <Switch>
        <Route exact path = "/" component ={LandingPage} />
        <Route exact path = "/register" component ={Register} />
        <Route exact path = "/login" component ={Login} />
        <Route exact path = "/lobby" render ={(props)=> <Lobby {...props} user={this.state.user} socket={this.state.socket}/>} />
        <Route exact path = "/game" component ={Game} />
        <Route path = "*" component = {Page404} />
      </Switch>
      <Footer/>
    </Router>
    );
  }
}

export default App;