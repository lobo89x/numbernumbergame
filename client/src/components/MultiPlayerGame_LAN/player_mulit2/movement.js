import store from '../../config/store';
import { GRID_X, GRID_y, MAX_col, MAX_rows } from '../../../hooks/constants';
//import store from '../../hooks/store';
//import { useState } from 'react';


export function loadCardList(props) {
    console.log(store.getState())
    store.dispatch({
        type: 'Load_cards2',
        payload: {
            position2: store.getState().player2.position2,
            selection2: store.getState().player2.selection2,
            selected2: store.getState().player2.selected2,
            array2: props.cardlist,
            fxn: props.selectEval
        }
    })
    // console.log("this is the array2  :"+store.getState().player2.array2);
    // console.log("this is your player2 state 100%  "+store.getState().player2);
}

export function handleMovementp2(player2, props) {
    // const [evaluate] = useStage.evaluate();
    function select([x, y]) {
        var z = x +(y*6) ;
        return z;
    }
    
    function munch() {
        const currenttSel =  store.getState().player2.selected2;
        const storedArray = store.getState().player2.array2;
        // console.log(storedArray[currenttSel]);
        // console.log(store.getState().player2.fxn);
        // const func = () = store.getState().player2.fxn()
        if (storedArray[currenttSel]!=="") {
            store.getState().player2.fxn(currenttSel, (storedArray[currenttSel]), storedArray);
            // if (evaluate(storedArray[currenttSel])===true) {
            //     console.log("correct!!")
            // }
            // if (evaluate(storedArray[currenttSel])===false) {
            //     console.log("false!!")
            // }
        }
    }
    

    function boundaries(old, newpos) {
        return (newpos[0] >= 0 && newpos[0] <= GRID_X) && (newpos[1] >= 0 && newpos[1] <= GRID_y) ? newpos : old
    }
    function selboundaries(oldsel, newsel) {
        return (newsel[0] >= 0 && newsel[0] <= MAX_col) && (newsel[1] >= 0 && newsel[1] <= MAX_rows) ? newsel : oldsel
    }

    function moveX(deltasel) {
        let delta = deltasel * 125;
        console.log("move X");
        const storedArray = store.getState().player2.array2;
        const startPos = store.getState().player2.position2;
        const startSel =  store.getState().player2.selection2;
        
        // store.getState().player2.position2
        // console.log(name_con+'  startedd here  '+startPos);
        // console.log("selcted   "+startSel);
        console.log(store.getState())
        store.dispatch({
            type: 'Move_Player2',
            payload: {
                position2: boundaries(startPos, [ (startPos[0] + delta), startPos[1] ]),
                selection2: selboundaries(startSel, [ (startSel[0] + deltasel), startSel[1] ]),
                selected2: select(selboundaries(startSel, [ (startSel[0] + deltasel), startSel[1] ])),
                array2: storedArray,
                fxn: store.getState().player2.fxn
            }
        })
        };
      
    function moveY(deltasel) {
        let delta = deltasel * 110;
        console.log("move Y");
        const storedArray = store.getState().player2.array2;
        const startPos = store.getState().player2.position2;
        const startSel =  store.getState().player2.selection2;
        console.log('  startedd here  '+startPos);
        console.log("selcted   "+startSel);
        store.dispatch({
            type: 'Move_Player2',
            payload: {
                position2: boundaries(startPos, [ startPos[0] ,  (startPos[1] + delta) ]),
                selection2: selboundaries(startSel, [ startSel[0] ,  (startSel[1] + deltasel) ]),
                selected2: select(selboundaries(startSel, [ startSel[0] ,  (startSel[1] + deltasel) ])),
                array2: storedArray,
                fxn: store.getState().player2.fxn
            }
        })
        };
    
        

    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 65:
                    console.log("Left");
                    return moveX(-1);
                    // break
            case 87:
                    console.log("Up");
                 return moveY(-1)
                //break
            case 68:
                    console.log("Right");
                 return moveX(1)
                //break
            case 83:
                    console.log("Down");
                 return moveY(1)
                //break
            case 82:
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