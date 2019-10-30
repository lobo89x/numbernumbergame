import "./index.css";
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Header from "./components/header/header";
import Page404 from "./components/error/Page404";
import Footer from "./components/footer/Footer";
import Game from "./components/Game/Game";
import LandingPage from "./components/LandingPage/LandingPage";
import Register from "./components/Register/Register";
import Login from "./login";

import Lobby from "./lobby";
import socketIOClient from "socket.io-client";

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
      user: null
    };
  }
  componentDidMount() {
    this.updateUserLogin("Anon"+ Math.floor(Math.random()*100000));
    //this.getUser();
  }

  getUser = () => {
    axios.get("/user").then(response => {
      if (response.data.user) {
        this.setState({
          user: response.data.user,
          socket: socketIOClient.connect(socketUrl)
        });
      } else {
        //console.log("Get user: no user");
        if (this.state.loggedIn) {
          this.setState({
            user: null,
            socket: null
          });
        }
      }
    });
  };

  logOut = () => {
    axios.post("/user/logout").then(response => {
      //console.log(response);
      this.setState({
        user: null,
        socket: null
      });
    });
  };

  updateUserLogin = user => {
    this.setState({ user: user, socket: socketIOClient.connect(socketUrl) });
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/register" component={Register} />
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
          <Route exact path="/game" component={Game} />
          <Route path="*" component={Page404} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default App;
