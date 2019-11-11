import React from "react";

export default class Modal extends React.Component {

    render() {
        if (this.props.show) {
                return  <div
                            style={{
                                display: 'block'
                            }} 
                            className="modal" id="modal">
                            <h2>YOU WIN!</h2>
                            <div className="content">{this.props.score} pts</div>
                            <div className="actions">
                            <button className="toggle-button" onClick={() => this.props.closeModal()}>
                                Good Game
                            </button>
                            </div>
                        </div>;
        }
        else
        {
            return null;
        }
  }
}