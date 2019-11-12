import React from "react";

function startComponent(props) {

  return (
    <React.Fragment >
    {props.show ? 
    <div
      
      className="modal"
      id="modal"
    >
      
      <div className="modal-content">
        <h2 className="slow-blink">WARNING</h2>
        <h2 className="slow-blink">A CHALLENGER APPROACHES</h2>
      </div>
    </div>
    :
    ""
    }
    </React.Fragment>
  );
}

export default startComponent;