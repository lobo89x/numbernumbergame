import store from '../config/store';
import { GRID_X, GRID_y, name_con, MAX_col, MAX_rows } from '../../hooks/constants';
//import store from '../../hooks/store';
import { useStage } from '../../hooks/useStage'
const [evaluate] = useStage(b);



function handleMovement(player) {
    function munch(b) {
        if (evaluate(b)===true) {
            console.log("correct!!")
        }
        if (evaluate(b)===false) {
            console.log("false!!")
        }
    }
    

    function boundaries(old, newpos) {
        return (newpos[0] >= 0 && newpos[0] <= GRID_X) && (newpos[1] >= 0 && newpos[1] <= GRID_y) ? newpos : old
    }
    function selboundaries(oldsel, newsel) {
        return (newsel[0] >= 0 && newsel[0] <= MAX_col) && (newsel[1] >= 0 && newsel[1] <= MAX_rows) ? newsel : oldsel
    }

    function moveX(delta, deltasel) {
        const startPos = store.getState().player.position;
        const startSel =  store.getState().player.selection;

        // store.getState().player.position
        console.log(name_con+'  startedd here  '+startPos);
        console.log("selcted   "+startSel);
        store.dispatch({
            type: 'Move_Player',
            payload: {
                position: boundaries(startPos, [ (startPos[0] + delta), startPos[1] ]),
                selection: selboundaries(startSel, [ (startSel[0] + deltasel), startSel[1] ])
            }
        })
        };
      
    function moveY(delta, deltasel) {
        const startPos = store.getState().player.position;
        const startSel =  store.getState().player.selection;
        console.log(name_con+'  startedd here  '+startPos);
        console.log("selcted   "+startSel);
        store.dispatch({
            type: 'Move_Player',
            payload: {
                position: boundaries(startPos, [ startPos[0] ,  (startPos[1] + delta) ]),
                selection: selboundaries(startSel, [ startSel[0] ,  (startSel[1] + deltasel) ])
            }
        })
        };
    
        

    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                    console.log("Left");
                    return moveX(-125, -1);
                    // break
            case 38:
                    console.log("Up");
                 return moveY(-85, -1)
                //break
            case 39:
                    console.log("Right");
                 return moveX(125, 1)
                //break
            case 40:
                    console.log("Down");
                 return moveY(85, 1)
                //break
            case 32:
                    console.log("Munch");
                // return moveY(-1)
                break
            default:
                console.log(e.keyCode);
                break
        }
    }
    window.addEventListener('keydown', (e) => {
        handleKeyDown(e)
    })

    return player
}

export default handleMovement