import React, { Component } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"

class Signup extends Component {
    state = {
        userName: "",
        password: ""
      };
    
      handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const value = event.target.value;
        const name = event.target.name;
    
        // Updating the input's state
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        axios.post("/register", {
          username: this.state.userName,
          password: this.state.password
        }).then(res =>{
          console.log(res);
        })
        this.setState({
            userName: "",
            password: ""
        });
      };

    render() {
        return (
          <div className="login-body">
            { props.user !== null ? 
              <Redirect to="/lobby" />: ""
              }
                    
            <div className="card login-form">

              <div className="card-body login-body">

                    <h3>Register:</h3>
                  <form className="form">
                    <input
                      value={this.state.userName}
                      name="userName"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="UserName"
                    />
                    <input
                      value={this.state.password}
                      name="password"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="Password"
                    />
                    <button onClick={this.handleFormSubmit}>Submit</button>
                  </form>
              </div>
            </div>
          </div>
        )
    }

}

export default Signup;
