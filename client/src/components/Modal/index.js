import React from "react";

export default class Modal extends React.Component {

    render() {
        if (this.props.show) {
            if (this.props.correctAns===15){
                console.log("WIN");
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
            if (this.props.lives<1){
                console.log("LOSE");
                return <div 
                            style={{
                                display: 'block'
                            }} 
                            className="modal" id="modal">
                            <h2>GAME OVER</h2>
                            <div className="content">{this.props.score} pts</div>
                            <div className="actions">
                            <button className="toggle-button" onClick={() => this.props.gameOverModal()}>
                                PLAY AGAIN?
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