import React, { Component } from "react";

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
        this.setState({
            userName: "",
            password: ""
        });
      };

    render() {
        return (
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
        )
    }

}

export default Signup;
