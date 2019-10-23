import React from 'react'
import Player from '../player';

function Grid(props) {
    return (
        <div 
            style={{
                backgroundColor: 'navy',
                border: '9px solid green',
                margin: '10px auto',
                width: '100%',
                height: '100%'
            }}
        >
            <Player />
        </div>
    )
}

export default Grid