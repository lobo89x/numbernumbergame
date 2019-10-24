import store from '../config/store';
import { GRID_X, GRID_y, name_con } from '../../hooks/constants';
//import store from '../../hooks/store';

function handleMovement(player) {
    function boundaries(old, newpos) {
        return (newpos[0] >= 0 && newpos[0] <= GRID_X) && (newpos[1] >= 0 && newpos[1] <= GRID_y) ? newpos : old
    }

    function moveX(delta) {
        const startPos = store.getState().player.position
        // store.getState().player.position
        console.log(name_con+'  startedd here  '+startPos);
        store.dispatch({
            type: 'Move_Player',
            payload: {
                position: boundaries(startPos, [ (startPos[0] + delta), startPos[1] ])
            }
        })
        };
      
    function moveY(delta) {
        const startPos = store.getState().player.position
        console.log(startPos);
        store.dispatch({
            type: 'Move_Player',
            payload: {
                position: boundaries(startPos, [ startPos[0] ,  (startPos[1] + delta) ])
            }
        })
        };
    
        

    function handleKeyDown(e) {
        e.preventDefault()
        switch(e.keyCode) {
            case 37:
                    console.log("Left");
                    return moveX(-125);
                    // break
            case 38:
                    console.log("Up");
                 return moveY(-85)
                //break
            case 39:
                    console.log("Right");
                 return moveX(125)
                //break
            case 40:
                    console.log("Down");
                 return moveY(85)
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