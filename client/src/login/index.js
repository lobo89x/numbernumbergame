import React, { useState } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import "./login.css";

function Login(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");

  const updateUserName = e => {
    setUserName(e.target.value);
  };

  const updatePassWord = e => {
    setPassWord(e.target.value);
  };

  const submitLogin = e => {
    e.preventDefault();
    axios
      .post("/user", {
        username: userName,
        password: passWord
      })
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          setError("");
          // handle redirecting
          props.handle(response.data);
        } else {
          setError("Username or Password Incorrect");
        }
      });
  };

  return (
    
    <div className="login-body">
      { props.user !== null ? 
      <Redirect to="/lobby" />: ""
      }
      <div className="card login-form">
        <div className="card-body login-body">
          <h3>Login:</h3>
          <label htmlFor="userName">User name:</label>
          <input
            id="userName"
            value={userName}
            onChange={updateUserName}
          ></input>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={passWord}
            onChange={updatePassWord}
          ></input>
          {error ? <p className="login-error">{error}</p> : ""}
          <button className="btn btn-primary mt-1 flat btn-block" onClick={submitLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
