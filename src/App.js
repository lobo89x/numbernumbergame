import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from "./components/header/header";
import Page404 from "./components/error/Page404";
import Footer from "./components/footer/Footer";



// function Register(){
//   return(
//     <div>SignUp</div>
//   )
// }
// function Game(){
//   return(
//     <div>Game</div>
//   )
// }
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