let carX = 75;
let carY = 75;
let carAng = 90;
let carV = 0;

const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.05;

let carReset = () => {
  for (let row = 0; row < TRACK_ROWS; row++) {
    for (let col = 0; col < TRACK_COLS; col++) {
      let arrayIndex = rowColToArrayIndex(col, row);
      if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
        trackGrid[arrayIndex] = TRACK_ROAD;
        carAng = -Math.PI / 2;
        carX = col * TRACK_W + TRACK_W / 2;
        carY = row * TRACK_H + TRACK_H / 2;
      }
    }
  }
};

let carMove = () => {
  carV *= GROUNDSPEED_DECAY_MULT;
  if (keyHeld_Gas) {
    carV += DRIVE_POWER;
  }
  if (keyHeld_Reverse) {
    carV -= REVERSE_POWER;
  }
  if (keyHeld_Left) {
    carAng -= TURN_RATE;
  }
  if (keyHeld_Right) {
    carAng += TURN_RATE;
  }

  carX += Math.cos(carAng) * carV;
  carY += Math.sin(carAng) * carV;
};

let carDraw = () => {
  drawBitmapCenteredWithRotation(carPic, carX, carY, carAng);
};
