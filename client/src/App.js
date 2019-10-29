import React, { Component } from 'react';
import './App.css';
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
function Lobby({socket, user}){
  return(
    // needs user and socket passed to it
    <Lobby user={user} socket={socket}/>
  )
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      // holds the socket connection
      socket: null,
      user: null
    }
  }
  componentDidMount(){
    // if user is logged in then do connection
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
        <Route exact path = "/lobby" component ={()=> Lobby(this.state)} />
        <Route exact path = "/game" component ={Game} />
        <Route path = "*" component = {Page404} />
      </Switch>
      <Footer/>
    </Router>
    );
  }
}

export default App;