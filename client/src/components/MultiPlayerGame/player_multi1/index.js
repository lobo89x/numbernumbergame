import React from "react";
import { connect } from 'react-redux'
import walkSprite from './player_1.png'



function Player1(props) {

    let x = (props.players[0].pos[0])*125; 
    let y = (props.players[0].pos[1])*110;

    return (
        <div className='player1'
            style={{
                position: 'absolute',
                top: y,
                left: x,
                backgroundImage: `url('${walkSprite}')`,
                width: '52px',
                height: '65px'
            }}
        />
    )
}

function mapStateToProps(state) {
    return {
        ...state.GameState
    }
}


export default connect(mapStateToProps)(Player1)