import store from "../../config/store";
import { GRID_X, GRID_y, MAX_col, MAX_rows } from "../../../hooks/constants";

export function loadCardList(props) {
  store.dispatch({
    type: "Load_cards",
    payload: {
      position: store.getState().player.position,
      selection: store.getState().player.selection,
      selected: store.getState().player.selected,
      array: props.cardlist,
      fxn: props.selectEval
    }
  });
}

export function handleMovement(player, props) {
  function select([x, y]) {
    var z = x + y * 6;
    return z;
  }

  function munch() {
    const currenttSel = store.getState().player.selected;
    const storedArray = store.getState().player.array;
    if (storedArray[currenttSel] !== "!") {
      store
        .getState()
        .player.fxn(currenttSel, storedArray[currenttSel], storedArray);
    }
  }

  function boundaries(old, newpos) {
    return newpos[0] >= 0 &&
      newpos[0] <= GRID_X &&
      (newpos[1] >= 0 && newpos[1] <= GRID_y)
      ? newpos
      : old;
  }
  function selboundaries(oldsel, newsel) {
    return newsel[0] >= 0 &&
      newsel[0] <= MAX_col &&
      (newsel[1] >= 0 && newsel[1] <= MAX_rows)
      ? newsel
      : oldsel;
  }

  function moveX(delta, deltasel) {
    const storedArray = store.getState().player.array;
    const startPos = store.getState().player.position;
    const startSel = store.getState().player.selection;

    store.dispatch({
      type: "Move_Player",
      payload: {
        position: boundaries(startPos, [startPos[0] + delta, startPos[1]]),
        selection: selboundaries(startSel, [
          startSel[0] + deltasel,
          startSel[1]
        ]),
        selected: select(
          selboundaries(startSel, [startSel[0] + deltasel, startSel[1]])
        ),
        array: storedArray,
        fxn: store.getState().player.fxn
      }
    });
  }

  function moveY(delta, deltasel) {
    const storedArray = store.getState().player.array;
    const startPos = store.getState().player.position;
    const startSel = store.getState().player.selection;

    store.dispatch({
      type: "Move_Player",
      payload: {
        position: boundaries(startPos, [startPos[0], startPos[1] + delta]),
        selection: selboundaries(startSel, [
          startSel[0],
          startSel[1] + deltasel
        ]),
        selected: select(
          selboundaries(startSel, [startSel[0], startSel[1] + deltasel])
        ),
        array: storedArray,
        fxn: store.getState().player.fxn
      }
    });
  }

  function handleKeyDown(e) {
    e.preventDefault();
    switch (e.keyCode) {
      case 37:
        return moveX(-125, -1);

      case 38:
        return moveY(-110, -1);

      case 39:
        return moveX(125, 1);
      case 40:
        return moveY(110, 1);

      case 32:
        munch();
        break;
      default:
        break;
    }
  }

  return handleKeyDown;
}
