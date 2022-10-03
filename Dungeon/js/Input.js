const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

let mouseX = 0;
let mouseY = 0;

let setupInput = () => {
  canvas.addEventListener("mousemove", updateMousePos);

  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
  p1Warrior.setupInput(
    KEY_UP_ARROW,
    KEY_RIGHT_ARROW,
    KEY_DOWN_ARROW,
    KEY_LEFT_ARROW
  );
};

let updateMousePos = (evt) => {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
};

let keySet = (keyEvent, setTo) => {
  if (keyEvent.keyCode == p1Warrior.controlKeyLeft) {
    p1Warrior.keyHeld_West = setTo;
  }
  if (keyEvent.keyCode == p1Warrior.controlKeyRight) {
    p1Warrior.keyHeld_East = setTo;
  }
  if (keyEvent.keyCode == p1Warrior.controlKeyUp) {
    p1Warrior.keyHeld_North = setTo;
  }
  if (keyEvent.keyCode == p1Warrior.controlKeyDown) {
    p1Warrior.keyHeld_South = setTo;
  }
};

let keyPressed = (evt) => {
  keySet(evt, true);

  evt.preventDefault();
};

let keyReleased = (evt) => {
  keySet(evt, false);
};
