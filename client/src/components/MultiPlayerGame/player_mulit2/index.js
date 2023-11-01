import React from "react";
import { connect } from 'react-redux'
import walkSprite from '../../../../src/images/player_2.png'



function Player2(props) {

    let x = 68 + ((props.players[1].pos[0])*125); 
    let y = (props.players[1].pos[1])*110;

    return (
        <div className='player-2'
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
// }
}

function mapStateToProps(state) {
    return {
        ...state.GameState
    }
}


export default connect(mapStateToProps)(Player2)