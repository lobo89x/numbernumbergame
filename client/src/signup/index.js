import React, { useState } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
import "./signup.css";
import {Card, Button} from "react-bootstrap";

function SignUp(props) {
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [error, setError] = useState("");

  const updateUserName = e => {
    setUserName(e.target.value);
  };

  const updatePassWord = e => {
    setPassWord(e.target.value);
  };

  const submitSignUp = e => {
    e.preventDefault();
    axios
      .post("/signup", {
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
      .catch(err => {
        setError("UserName Already in use");
      });
  };

  return (
    
    // <div className="signUp-body">
    //   { props.user !== null ? 
    //   <Redirect to="/lobby" />: ""
    //   }
    //   <div className="card signUp-form">
    //     <div className="card-body signUp-body">
    //       <h3>Register:</h3>
    //       <label htmlFor="userName">Username:</label>
    //       <input
    //         id="userName"
    //         value={userName}
    //         onChange={updateUserName}
    //       ></input>
    //       <label htmlFor="password">Password:</label>
    //       <input
    //         id="password"
    //         type="password"
    //         value={passWord}
    //         onChange={updatePassWord}
    //       ></input>
    //       {error ? <p className="signUp-error">{error}</p> : ""}
    //       <button className="btn btn-primary mt-1 flat btn-block" onClick={submitSignUp}>
    //         Submit
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <Card style={{width:"40rem"}} className="mx-auto mt-4 border border-success">
 { props.user !== null ? <Redirect to="/lobby"/>: ""  }
<Card.Header className="text-center bg-success"><h1> Register</h1></Card.Header>
<Card.Body className="bg-dark">
  <Card.Text className="text-white">

  <label className="mr-2" htmlFor="userName">Username:</label> <input id="userName" value={userName} onChange={updateUserName} ></input>
  <label className="mr-2" htmlFor="password">Password:</label> <input id="password" type="password" value={passWord} onChange={updatePassWord} ></input>

  {error ? <p className="signUp-error">{error}</p> : ""} 
  <Button className="btn btn-success mt-4 flat btn-block"
   onClick={submitSignUp}>Submit</Button>

  </Card.Text>
</Card.Body>
</Card>
  );
}

export default SignUp;
