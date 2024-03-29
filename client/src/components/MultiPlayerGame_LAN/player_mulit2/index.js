import React, { useEffect } from "react";
import { connect } from 'react-redux'
import walkSprite from '../../../../src/images/player_2.png'
import {loadCardList} from './movement'



function Player2(props) {
    // const [correctAns, setCorrectAns] = useState(0);
    // class Player extends Component {
    // componentDidMount() {
    //     loadCardList();
    //   };
// render () {

    

    useEffect(() => {
        // console.log(props)
        loadCardList(props);
        // console.log(props);
    });

    return (
        <div className='player2'
            style={{
                position: 'absolute',
                top: props.position2[1],
                left: props.position2[0],
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
        ...state.player2
    }
}


export default connect(mapStateToProps)(Player2)