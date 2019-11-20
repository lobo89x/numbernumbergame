import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/header";
import Page404 from "./components/error/Page404";
import Footer from "./components/footer/Footer";
import Game from "./components/Game/Game";
import MultiPlayerGame from './components/MultiPlayerGame/Game'
import LandingPage from "./LandingPage/LandingPage";
import Login from "./login";
import Lobby from "./lobby";
import socketIOClient from "socket.io-client";
import SignUp from "./signup";
import Leaderboard from "../src/scores/leaderboard"


// the url used for the connection to the server in development we use localhost on heroku we need to use /
const socketUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "/";
class App extends Component {
  constructor() {
    super();
    this.state = {
      // holds the socket connection
      socket: null,
      // should be set when the user logs in ?
      user: null,
      userData: null
    };
  }
  componentDidMount() {
    // checks to see if the user is logged in on the back end

    // this.getUser();
  
    this.mockUser();
  }

  mockUser = () => {
    if(this.state.user === null){
      this.setState({
        user: "Anon" + Math.floor(Math.random()*99999),
        userData: {
          username: "Anon" + Math.floor(Math.random()*99999),
        },
        socket: socketIOClient.connect(socketUrl)
      })
    }
  }

  getUser = () => {
    axios.get("/loggedin").then(response => {
      if (response.data.username) {
        this.setState({
          user: response.data.username,
          userData:  response.data,
          socket: socketIOClient.connect(socketUrl)
        });
      } else {
        // backend did not find a user
          this.setState({
            socket: null,
            user: null,
            userData: null
          });
      }
    });
  };

  // updates the users login info call from sign in and 
  updateUserLogin = user => {
    this.setState({ userData: user, user: user.username, socket: socketIOClient.connect(socketUrl) });
  }

  render() {
    return (
      <Router>
        <Header user={this.state.user} logout={this.logOut}/>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route 
            exact 
            path="/signup" 
            render={props => 
              (<SignUp 
                {...props}  
                user={this.state.user}
                handle={this.updateUserLogin}
                />
                )}
                />
          <Route
            exact
            path="/login"
            render={props => (
              <Login
                {...props}
                user={this.state.user}
                handle={this.updateUserLogin}
              />
            )}
          />
          <Route
            exact
            path="/lobby"
            render={props => (
              <Lobby
                {...props}
                user={this.state.user}
                socket={this.state.socket}
              />
            )}
          />
            <Route
            exact
            path="/leader"
            render={props => (
              <Leaderboard
                {...props}
                user={this.state.user}
                socket={this.state.socket}
              />
            )}
          />
          <Route
            exact
            path="/game"
            render={props => (
              <Game
                {...props}
                userData={this.state.userData}
              />
            )}
          />
          <Route
            exact
            path="/2pgame"
            render={props => (
              <MultiPlayerGame
                {...props}
                user={this.state.user}
                socket={this.state.socket}
              />
            )}
          />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
