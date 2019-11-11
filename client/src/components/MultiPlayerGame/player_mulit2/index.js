import React, { useEffect } from "react";
import { connect } from 'react-redux'
import walkSprite from './player_2.png'
import {loadCardList} from './movement'



function Player2(props) {
    // const [correctAns, setCorrectAns] = useState(0);
    // class Player extends Component {
    // componentDidMount() {
    //     loadCardList();
    //   };
// render () {

    let x = 68 + ((props.players[1].pos[0])*125); 
    let y = (props.players[1].pos[1])*110;

    // useEffect(() => {
    //     // console.log(props)
    //     loadCardList(props);
    //     // console.log(props);
    // });

    return (
        <div className='player'
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