import React, { useState } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import {Card, Button, Spinner} from "react-bootstrap";
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
      .post("/login", {
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
      })
      .catch(error => {
        setError("Username or Password Incorrect");
    });
  };

  return (
    
  //   <div className="login-body">
  //     { props.user !== null ? 
  //     <Redirect to="/lobby" />: ""
  //     }
  //     <div className="card login-form">
  //       <div className="card-body login-body">
  //         <h3>Login:</h3>
  //         <label htmlFor="userName">User name:</label>
  //         <input
  //           id="userName"
  //           value={userName}
  //           onChange={updateUserName}
  //         ></input>
  //         <label htmlFor="password">Password:</label>
  //         <input
  //           id="password"
  //           type="password"
  //           value={passWord}
  //           onChange={updatePassWord}
  //         ></input>
  //         {error ? <p className="login-error">{error}</p> : ""}
  //         <button className="btn btn-success mt-1 flat btn-block" onClick={submitLogin}>
  //           Login
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );



<Card style={{width:"40rem"}} className="mx-auto mt-4 border border-success">
{ props.user !== null ?  <Redirect to="/lobby" />: "" }
<Card.Header className="text-center bg-success"><h1> <Spinner animation="grow" variant="dark" /> Login Here <Spinner animation="grow" variant="dark" />  </h1></Card.Header>
<Card.Body className="bg-dark">
  <Card.Text className="text-white">

           <label className="mr-2 ml-4" htmlFor="userName">Username:</label>
          <input id="userName" value={userName} onChange={updateUserName} ></input>
          <label className="mr-2 ml-4" htmlFor="password">Password: </label>
          <input id="password" type="password" value={passWord} onChange={updatePassWord} ></input>
             {error ? <p className="login-error">{error}</p> : ""}
          <button className="btn btn-success mt-4 flat btn-block" onClick={submitLogin}> Login </button>
  </Card.Text>
</Card.Body>
</Card>
  )
    }

export default Login;
