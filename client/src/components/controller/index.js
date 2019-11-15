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
  for(let i = 0; i < gamepads.length; i++) {
    gamepadArray.push(gamepads[i]);
  }
  if(gamepadArray.every(pad => pad === null)){
    return null;
  }
  let orderedGamepads = [];
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (R)') > -1));
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (L)') > -1));
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Xbox 360 Controller (XInput STANDARD GAMEPAD)') > -1));
  let pressed = 0;
  let controllerID = '';
    for (let g = 0; g < orderedGamepads.length; g++) {
        const gp = orderedGamepads[g];
        if (!!gp) {
            controllerID = gp.id;
            for(let i = 0; i < gp.buttons.length; i++) {
                if(gp.buttons[i].pressed) {
                    const id = (g * 15) + i + g;
                    // overides all buttons and takes the last button pressed
                    pressed = id;
                }
            }
        }
    }
    if(pressed.length === 0) {
       //console.log('No button pressed at the moment...');
    } else {
       console.log(pressed.join(' + '));
       fx({keyCode: Mapping[controllerID][pressed]});
    }
}