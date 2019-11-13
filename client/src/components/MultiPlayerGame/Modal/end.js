import React from "react";

export default class Modal extends React.Component {
    constructor() {
        super();
        this.button = React.createRef();
    }

    componentDidMount() {
        if (this.props.show) this.button.current.focus();
    }

    render() {
        if (this.props.show) {
            return <div
                className="modal" id="modal">
                <h2>YOU WIN!</h2>
                <div className="content">{this.props.score} pts</div>
                <div className="actions">
                    <button ref={this.button} className="toggle-button" onClick={() => this.props.closeModal()} onKeyDown={this.props.closeModal}>
                        Good Game
                            </button>
                </div>
            </div>;
        }
        else {
            return null;
        }
    }
}