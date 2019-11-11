import React from "react";

export default class Modal extends React.Component {

    render() {
        if (this.props.show) {
            if (this.props.correctAns===15){
                console.log("Finish!");
                return  <div
                            style={{
                                display: 'block'
                            }} 
                            className="modal" id="modal">
                            <h2>YOU WIN!</h2>
                            <div className="content">{this.props.score} pts</div>
                            <div className="actions">
                            <button className="toggle-button" onClick={() => this.props.closeModal()}>
                                NEXT LEVEL
                            </button>
                            </div>
                        </div>;
            }
        }
        else
        {
            return null;
        }
  }
}