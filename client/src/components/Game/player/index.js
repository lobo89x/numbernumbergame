import React, { useEffect } from "react";
import { connect } from 'react-redux'
import {loadCardList} from './movement'



function Player(props) {
    useEffect(() => {
        loadCardList(props);
    });

    return (
        <div className='player'
            style={{
                top: props.position[1],
                left: props.position[0],
            }}
        />
    )
// }
}

function mapStateToProps(state) {
    return {
        ...state.player
    }
}


export default connect(mapStateToProps)(Player)