import React from "react";


function Login(){
  componentDidMount() {
    window.removeEventListener('keydown', handlekeydown);
  }
  return(
    <div>
      Login
    </div>
  )
}

export default Login;