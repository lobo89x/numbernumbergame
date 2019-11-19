import Mapping from "./mapping";

let interval;
let handleModals = null;

export function listenForGamePad(fx, modal) {
  handleModals = modal;
  if (!('ongamepadconnected' in window)) {
    // No gamepad events available, poll instead.
    interval = setInterval(() => pollGamepads(fx), 100);
    return interval;
  }
  return null;
}

export function stopListenforGamePad() {
  handleModals = null;
  clearInterval(interval);
}


function pollGamepads(fx) {
  let gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
  let gamepadArray = [];
  let pressed = [];
  let oneGamepad = null;
  let controllerID = '';
  console.log("test", gamepadArray)
  for (let i = 0; i < gamepads.length; i++) {
    if (gamepads[i] !== null) {
      gamepadArray.push(gamepads[i]);
    }
  }

  if (gamepadArray.length <= 0) {
    return null;
  }

  let mappedIds = Object.keys(Mapping);

  mappedIds.forEach(id => {
    if (gamepadArray.find(g => g.id.indexOf(id) > -1)) {
      oneGamepad = gamepadArray.find(g => g.id.indexOf(id) > -1);
    }
  });

  const gp = oneGamepad;
  if (!!gp) {
    controllerID = gp.id;

    if (!handleModals) {
      for (let f = 0; f <= 1; f++) {
        if (gp.axes[f] > .75) {
          fx({ keyCode: f % 2 === 0 ? 39 : 40 });
        } else if (gp.axes[f] < -0.75) {
          fx({ keyCode: f % 2 === 0 ? 37 : 38 });
        }
      }
    }

    for (let i = 0; i < gp.buttons.length; i++) {
      if (gp.buttons[i].pressed) {
        const id = i;
        pressed.push(id);
      }
    }
  }

  if (handleModals && pressed.length > 0) {
    // call whatever function needs to be called and stop listening
    stopListenforGamePad();
    fx();
  }
  else if (pressed.length === 0 || controllerID === '') {
    //console.log('No button pressed at the moment...');
    return 0;
  } else {
    //console.log(pressed.join(' + '));
    console.log(controllerID)
    console.log(Mapping[controllerID].buttons[pressed[0]])
    fx({ keyCode: Mapping[controllerID].buttons[pressed[0]] });
  }
}