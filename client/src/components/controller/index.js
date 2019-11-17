import Mapping from "./mapping";

let interval;

export function listenForGamePad(fx){
  if (!('ongamepadconnected' in window)) {
    // No gamepad events available, poll instead.
    interval = setInterval(()=>pollGamepads(fx), 100);
    return interval;
  }
  return null;
}

export function stopListenforGamePad(){
  clearInterval(interval);
}

function pollGamepads(fx) {
  let gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  let gamepadArray = [];
  let pressed = [];
  let orderedGamepads = [];
  let controllerID = '';
  for(let i = 0; i < gamepads.length; i++) {
    gamepadArray.push(gamepads[i]);
  }
  if(gamepadArray.every(pad => pad === null)){
    return null;
  }
  // orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (R)') > -1));
  // orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (L)') > -1));
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Xbox 360 Controller (XInput STANDARD GAMEPAD)') > -1));
    for (let g = 0; g < orderedGamepads.length; g++) {
        const gp = orderedGamepads[g];
        if (!!gp) {
            controllerID = gp.id;
            for(let i = 0; i < gp.buttons.length; i++) {
                if(gp.buttons[i].pressed) {
                    const id = (g * 15) + i + g;
                    pressed.push(id);
                }

            }

            
        }
    }
    
    if(pressed === 0 || controllerID === '') {
       //console.log('No button pressed at the moment...');
        return 0;
    } else {
       //console.log(pressed.join(' + '));
       console.log(controllerID)
       console.log(Mapping[controllerID][pressed[0]])
       fx({keyCode: Mapping[controllerID][pressed[0]]});
    }
}