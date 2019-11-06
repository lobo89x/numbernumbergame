import React, { useState } from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";
// import browserHistory from "react-router";
function logout() {

    const submitLogout = e => {
      e.preventDefault();
      axios
        .post("/logout",{
        })
        .then(
          <Redirect to="/LandingPage"/>
        )
          .catch(err => console.log(err));
      };
      return(
        
        <button onClick={submitLogout} style={{color:"#00ff58"}} href="logout">Logout</button>
        )
      }

    export default logout;
  