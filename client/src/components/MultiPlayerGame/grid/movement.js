import store from '../../config/store';
import {MAX_col, MAX_rows } from '../../../hooks/constants';

const criteria = [
    {
      desc: "Mutiples of 2",
      criteria: (x) => {
        if ((x % 2) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Mutiples of 3",
      criteria: (x) => {
        if ((x % 3) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Multiples of 5",
      criteria: (x) => {
        if ((x % 5) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Multiples of 7",
      criteria: (x) => {
        if ((x % 7) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Multiples of 13",
      criteria: (x) => {
        if ((x % 13) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Factors of 144",
      criteria: (x) => {
        if ((144 % x) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Factors of 338",
      criteria: (x) => {
        if ((338 % x) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Factors of 385",
      criteria: (x) => {
        if ((385 % x) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    },
    {
      desc: "Factors of 378",
      criteria: (x) => {
        if ((378 % x) === 0) {
          return true;
        }
        else {
          return false;
        }
      },
    }
];

export function handleMovement(socket, currentplayer) {
    // const [evaluate] = useStage.evaluate();
    let playerIndex = 0;
    let otherIndex = 1;
    if (currentplayer === store.getState().GameState.players[1].name){
        playerIndex = 1;
        otherIndex = 0;
    }
    function select([x, y]) {
        var z = x +(y*6) ;
        return z;
    }
    
    function munch() {
        const [currentCriteria] = criteria.filter(c => {
            return c.desc = store.getState().GameState.criteria.desc;
        });
        // currentCriteria.criteria()

        // //use props?
        // array2: props.cardlist,
        // fxn2: props.selectEval
        const currenttSel =  select(store.getState().GameState.players[playerIndex].pos);
        const storedArray = store.getState().GameState.board;
        // console.log(storedArray[currenttSel]);
        // console.log(store.getState().player1.fxn1);
        // const func = () = store.getState().player1.fxn1()
        if (storedArray[currenttSel]!=="!") {
            let addedscore = 0;
            const correctAns = storedArray.filter(d => {
                return d === "!";
            });
            // this.props.selectEval(currenttSel, (storedArray[currenttSel]), storedArray);
            // let correct = true;
            // console.log(this.props.cards.criteria(tf))
            if (currentCriteria.criteria(storedArray[currenttSel])) {
              addedscore = (((correctAns.length)+1) * 25);
              console.log("you got it right");
            }
              
              store.dispatch({
                  type: 'UPDATE_GAME_AND_PLAYER'+playerIndex,
                  payload: {
                      score: store.getState().GameState.players[playerIndex].score + addedscore,
                      board:  storedArray.map((item, index) => {
                        if (index === currenttSel) {
                          item = '!';
                        }
                        return item;
                      })
              }
            })
            socket.emit("boardUpdate", {playerName: currentplayer, boardData: store.getState().GameState.board, score: store.getState().GameState.players[playerIndex].score, count: store.getState().GameState.count})
        }
    // this.props.showModal();
    }    

    // function boundaries(old, newpos) {
    //     return (newpos[0] >= 0 && newpos[0] <= GRID_X) && (newpos[1] >= 0 && newpos[1] <= GRID_y) ? newpos : old
    // }
    function selboundaries(oldsel, newsel, oppsel) {
        return (newsel[0] >= 0 && newsel[0] <= MAX_col) && (newsel[1] >= 0 && newsel[1] <= MAX_rows) && ( newsel[1] !== oppsel[1] || newsel[0] !== oppsel[0]) ? newsel : oldsel
    }

    function moveX(deltasel) {
        // let delta = deltasel * 125;
        // const storedArray = store.getState().player1.array1;
        // const startPos = store.getState().player1.position1;
        const startSel = store.getState().GameState.players[playerIndex].pos;
        const opponent = store.getState().GameState.players[otherIndex].pos;
        console.log(startSel);

        // store.getState().player1.position1
        // console.log(name_con+'  startedd here  '+startPos);
        // console.log("selcted   "+startSel);
        store.dispatch({
            type: 'UPDATE_PLAYER'+playerIndex,
            payload: 
                    selboundaries(startSel, [ (startSel[0] + deltasel), startSel[1] ], opponent)
        })
        socket.emit("playerMove", {playerName: currentplayer, location: store.getState().GameState.players[playerIndex].pos})
        };
      
    function moveY(deltasel) {
        // let delta = deltasel * 110;
        // const storedArray = store.getState().player1.array1;
        // const startPos = store.getState().player1.position1;
        // const startSel =  store.getState().player1.selection1;
        // // console.log(name_con+'  startedd here  '+startPos);
        // // console.log("selcted   "+startSel);
        const startSel = store.getState().GameState.players[playerIndex].pos;
        const opponent = store.getState().GameState.players[otherIndex].pos;

        console.log(startSel);
        

        store.dispatch({
            type: 'UPDATE_PLAYER'+playerIndex,
            payload: 
                selboundaries(startSel, [ startSel[0] ,  (startSel[1] + deltasel) ], opponent)
        })
        socket.emit("playerMove", {playerName: currentplayer, location: store.getState().GameState.players[playerIndex].pos})
        };
    
        

    function handleKeyDown(e) {
        console.log(e.keyCode)
        switch(e.keyCode) {
            case 37:
                    console.log("Left");
                    return moveX(-1);
                    // break
            case 38:
                    console.log("Up");
                 return moveY(-1);
                //break
            case 39:
                    console.log("Right");
                 return moveX(1);
                //break
            case 40:
                    console.log("Down");
                 return moveY(1);
                //break
            case 32:
                    console.log("Munch");
                    return munch();
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