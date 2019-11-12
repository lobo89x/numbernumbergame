import React from "react";
import { connect } from 'react-redux';


class Modal extends React.Component {

    render() {
        if (this.props.show) {
            let playerIndex = 0;
            let otherIndex = 1;
            console.log(this.props)
            if (this.props.user === this.props.players[1].name){
                playerIndex = 1;
                otherIndex = 0;
            }

            if (this.props.players[playerIndex].score > this.props.players[otherIndex].score) {
                return  <div
                            style={{
                                display: 'block'
                            }} 
                            className="modal" id="modal">
                            <h2>YOU WIN!</h2>
                            <div className="content">{this.props.players[playerIndex].score} pts</div>
                            <div className="actions">
                            <button className="toggle-button" onClick={() => this.props.closeModal()}>
                                Good Game
                            </button>
                            </div>
                        </div>;
            }
            else {
                return  <div
                            style={{
                                display: 'block'
                            }} 
                            className="modal" id="modal">
                            <h2>YOU LOSE!</h2>
                            <div className="content">{this.props.players[playerIndex].score} pts</div>
                            <div className="actions">
                            <button className="toggle-button" onClick={() => this.props.closeModal()}>
                                Good Game
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

function mapStateToProps(state) {
    return {
      ...state.GameState
    }
  }

  export default connect(mapStateToProps)(Modal);
  