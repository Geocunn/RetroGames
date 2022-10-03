const GROUNDSPEED_DECAY_MULT = 0.94;
const DRIVE_POWER = 0.5;
const REVERSE_POWER = 0.2;
const TURN_RATE = 0.05;
const MIN_TURN_SPEED = 0.5;

let carClass = function () {
  this.x = 75;
  this.y = 75;
  this.ang = 0;
  this.v = 0;
  this.myCarPic;
  this.name = "untitiled car";

  this.keyHeld_Gas = false;
  this.keyHeld_Reverse = false;
  this.keyHeld_Right = false;
  this.keyHeld_Left = false;

  this.controlUp;
  this.controlRight;
  this.controlDown;
  this.controlLeft;

  this.setupInput = (upKey, rightKey, downKey, leftKey) => {
    this.controlUp = upKey;
    this.controlRight = rightKey;
    this.controlDown = downKey;
    this.controlLeft = leftKey;
  };

  this.reset = (image, carName) => {
    this.name = carName;
    this.myCarPic = image;
    this.v = 0;

    for (let row = 0; row < TRACK_ROWS; row++) {
      for (let col = 0; col < TRACK_COLS; col++) {
        let arrayIndex = rowColToArrayIndex(col, row);
        if (trackGrid[arrayIndex] == TRACK_PLAYERSTART) {
          trackGrid[arrayIndex] = TRACK_ROAD;
          this.ang = -Math.PI / 2;
          this.x = col * TRACK_W + TRACK_W / 2;
          this.y = row * TRACK_H + TRACK_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // end of row for
    console.log("NO PLAYER START FOUND");
  }; // end of carReset func

  this.move = () => {
    this.v *= GROUNDSPEED_DECAY_MULT;
    if (this.keyHeld_Gas) {
      this.v += DRIVE_POWER;
    }
    if (this.keyHeld_Reverse) {
      this.v -= REVERSE_POWER;
    }
    if (Math.abs(this.v) > MIN_TURN_SPEED) {
      if (this.keyHeld_Left) {
        this.ang -= TURN_RATE;
      }
      if (this.keyHeld_Right) {
        this.ang += TURN_RATE;
      }
    }

    this.x += Math.cos(this.ang) * this.v;
    this.y += Math.sin(this.ang) * this.v;

    carTrackHandling(this);
  };

  this.draw = () => {
    drawBitmapCenteredWithRotation(this.myCarPic, this.x, this.y, this.ang);
  };
};
