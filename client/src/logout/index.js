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
         
        )
          .catch(err => console.log(err));
      };

      }

    export default logout;
  