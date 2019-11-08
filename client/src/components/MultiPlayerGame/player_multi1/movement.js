import store from '../../config/store';
import { GRID_X, GRID_y, MAX_col, MAX_rows } from '../../../hooks/constants';
//import store from '../../hooks/store';
//import { useState } from 'react';


export function loadCardList(props) {
    store.dispatch({
        type: 'LOAD_GAME',
        payload: {
            players: [
                {pos: store.getState().GameState.players[0].pos},
                {pos: store.getState().GameState.players[1].pos}
            ]
        }
    })
    // console.log("this is the array1  :"+store.getState().player1.array1);
    // console.log("this is your player1 state 100%  "+store.getState().player1);
}

export function handleMovement(player1, props) {
    // const [evaluate] = useStage.evaluate();
    function select([x, y]) {
        var z = x +(y*6) ;
        return z;
    }
    
    function munch() {
        
        // //use props?
        // array2: props.cardlist,
        // fxn2: props.selectEval
        const currenttSel =  select(store.getState().GameState.players[0].pos);
        const storedArray = this.props.cardlist;
        // console.log(storedArray[currenttSel]);
        // console.log(store.getState().player1.fxn1);
        // const func = () = store.getState().player1.fxn1()
        if (storedArray[currenttSel]!=="") {
            this.props.selectEval(currenttSel, (storedArray[currenttSel]), storedArray);
            // if (evaluate(storedArray[currenttSel])===true) {
            //     console.log("correct!!")
            // }
            // if (evaluate(storedArray[currenttSel])===false) {
            //     console.log("false!!")
            // }
        }
    }
    

    // function boundaries(old, newpos) {
    //     return (newpos[0] >= 0 && newpos[0] <= GRID_X) && (newpos[1] >= 0 && newpos[1] <= GRID_y) ? newpos : old
    // }
    function selboundaries(oldsel, newsel) {
        return (newsel[0] >= 0 && newsel[0] <= MAX_col) && (newsel[1] >= 0 && newsel[1] <= MAX_rows) ? newsel : oldsel
    }

    function moveX(deltasel) {
        // let delta = deltasel * 125;
        // const storedArray = store.getState().player1.array1;
        // const startPos = store.getState().player1.position1;
        const startSel = store.getState().GameState.players[0].pos;
        
        // store.getState().player1.position1
        // console.log(name_con+'  startedd here  '+startPos);
        // console.log("selcted   "+startSel);
        store.dispatch({
            type: 'Move_Player1',
            payload: {
                players: [
                    {pos: selboundaries(startSel, [ (startSel[0] + deltasel), startSel[1] ])},
                    {pos: store.getState().GameState.players[1].pos}
                ]
            }
        })
        };
      
    function moveY(deltasel) {
        let delta = deltasel * 110;
        const storedArray = store.getState().player1.array1;
        const startPos = store.getState().player1.position1;
        const startSel =  store.getState().player1.selection1;
        // console.log(name_con+'  startedd here  '+startPos);
        // console.log("selcted   "+startSel);
        store.dispatch({
            type: 'Move_Player1',
            payload: {
                players: [
                    {pos: selboundaries(startSel, [ startSel[0] ,  (startSel[1] + deltasel) ])},
                    {pos: store.getState().GameState.players[1].pos}
                ]
            }
        })
        };
    
        

    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                    console.log("Left");
                    return moveX(-1);
                    // break
            case 38:
                    console.log("Up");
                 return moveY(-1)
                //break
            case 39:
                    console.log("Right");
                 return moveX(1)
                //break
            case 40:
                    console.log("Down");
                 return moveY(1)
                //break
            case 32:
                    console.log("Munch");
                    munch();
                // return moveY(-1)
                break
            default:
                console.log(e.keyCode);
                break
        }
    }
    // window.addEventListener('keydown', (e) => {
    //     handleKeyDown(e)
    // })

    return handleKeyDown
}

// export default handleMovement