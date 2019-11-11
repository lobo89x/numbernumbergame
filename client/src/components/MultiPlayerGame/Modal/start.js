import React from "react";

function startComponent(props) {

  return (
    <React.Fragment >
    {props.show ? 
    <div
      style={{
        display: "block"
      }}
      className="modal"
      id="modal"
    >
      
      <div className="content">GET READY</div>
    </div>
    :
    ""
    }
    </React.Fragment>
  );
}

export default startComponent;