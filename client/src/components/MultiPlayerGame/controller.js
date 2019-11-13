let interval;

// Mapping button index to each button
// Each joycon contains 16 buttons indexed
const buttonMapping = {
    0: 32,
    1: 32,
    2: 32,
    3: 'Y',
    4: 'RSL',
    5: 'RSR',
    9: 'PLUS',
    11: 'RA',
    12: 38,
    13: 40,
    14: 37,
    15: 39,
    16: 'LEFT',
    17: 'DOWN',
    18: 'UP',
    19: 'RIGHT',
    20: 'LSL',
    21: 'LSR',
    24: 'MINUS',
    26: 'LA',
    29: 'CAPTURE',
    30: 'L',
    31: 'LT'  
}

export function listenForGamePad(fx){
  if (!('ongamepadconnected' in window)) {
    // No gamepad events available, poll instead.
    interval = setInterval(()=>pollGamepads(fx), 100);
    return interval
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
  // orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (R)') > -1));
  // orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Joy-Con (L)') > -1));
  orderedGamepads.push(gamepadArray.find(g => g.id.indexOf('Xbox 360 Controller (XInput STANDARD GAMEPAD)') > -1));
  let pressed = [];

    for (let g = 0; g < orderedGamepads.length; g++) {
        const gp = orderedGamepads[g];
        if (!!gp) {
            
            for(let i = 0; i < gp.buttons.length; i++) {
                if(gp.buttons[i].pressed) {
                    const id = (g * 15) + i + g;
                    const button = buttonMapping[id] || id;
                    pressed.push(id);
                }

            }

            
        }
    }
    if(pressed.length === 0) {
       //console.log('No button pressed at the moment...');
    } else {
       console.log(pressed.join(' + '));
       fx({keyCode: buttonMapping[pressed[0]]});
    }
}