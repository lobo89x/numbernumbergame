import React, { useEffect } from "react";
import { connect } from 'react-redux'
import walkSprite from './player_walk.png'
import {handleMovement, loadCardList} from './movement'



function Player(props) {
    // const [correctAns, setCorrectAns] = useState(0);
    // class Player extends Component {
    // componentDidMount() {
    //     loadCardList();
    //   };
// render () {

    

    useEffect(() => {
        loadCardList(props);
        // console.log(props);
    });

    return (
        <div
            style={{
                position: 'absolute',
                top: props.position[1],
                left: props.position[0],
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
        ...state.player
    }
}


export default connect(mapStateToProps)(handleMovement(Player))