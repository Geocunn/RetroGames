const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

let keyHeld_Gas = false;
let keyHeld_Reverse = false;
let keyHeld_Right = false;
let keyHeld_Left = false;

let mouseX = 0;
let mouseY = 0;

let setupInput = () => {
  canvas.addEventListener("mousemove", updateMousePos);

  document.addEventListener("keydown", keyPressed);
  document.addEventListener("keyup", keyReleased);
};

let updateMousePos = (evt) => {
  let rect = canvas.getBoundingClientRect();
  let root = document.documentElement;

  mouseX = evt.clientX - rect.left - root.scrollLeft;
  mouseY = evt.clientY - rect.top - root.scrollTop;
};

let keyPressed = (evt) => {
  if (evt.keyCode == KEY_LEFT_ARROW) {
    keyHeld_Left = true;
  }
  if (evt.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_Right = true;
  }
  if (evt.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = true;
  }
  if (evt.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = true;
  }

  evt.preventDefault();
};

let keyReleased = (evt) => {
  if (evt.keyCode == KEY_LEFT_ARROW) {
    keyHeld_Left = false;
  }
  if (evt.keyCode == KEY_RIGHT_ARROW) {
    keyHeld_Right = false;
  }
  if (evt.keyCode == KEY_UP_ARROW) {
    keyHeld_Gas = false;
  }
  if (evt.keyCode == KEY_DOWN_ARROW) {
    keyHeld_Reverse = false;
  }
};
