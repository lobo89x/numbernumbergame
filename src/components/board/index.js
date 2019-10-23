import React from 'react'
import Grid  from '../grid';
// import Player from '../player';

function Board(props) {
    return (
        <div
        style={{
            position: 'relative',
            width: '800px',
            height: '400px',
            margin: '20px auto'
        }}>
            <Grid />
            {/* <Player /> */}
 
        </div>
    )
}

export default Board