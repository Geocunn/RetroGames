const PLAYER_MOVE_SPEED = 3.0;

let warriorClass = function () {
  this.x = 75;
  this.y = 75;
  this.myWarriorPic;
  this.name = "untitiled warrior";

  this.keyHeld_North = false;
  this.keyHeld_South = false;
  this.keyHeld_West = false;
  this.keyHeld_East = false;

  this.controlKeyUp;
  this.controlKeyRight;
  this.controlKeyDown;
  this.controlKeyLeft;

  this.setupInput = (upKey, rightKey, downKey, leftKey) => {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
  };

  this.reset = (image, warriorName) => {
    this.name = warriorName;
    this.myWarriorPic = image;

    for (let row = 0; row < WORLD_ROWS; row++) {
      for (let col = 0; col < WORLD_COLS; col++) {
        let arrayIndex = rowColToArrayIndex(col, row);
        if (worldGrid[arrayIndex] == WORLD_PLAYERSTART) {
          worldGrid[arrayIndex] = WORLD_ROAD;
          this.x = col * WORLD_W + WORLD_W / 2;
          this.y = row * WORLD_H + WORLD_H / 2;
          return;
        } //end of player start if
      } // end of col for
    } // end of row for
    console.log("NO PLAYER START FOUND");
  }; // end of warriorReset func

  this.move = () => {
    let nextX = this.x;
    let nextY = this.y;

    if (this.keyHeld_North) {
      nextY -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_East) {
      nextX += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_South) {
      nextY += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_West) {
      nextX -= PLAYER_MOVE_SPEED;
    }

    let walkIntoTileIndex = getTileTypeAtPixelCoord(nextX, nextY);

    if (walkIntoTileIndex == WORLD_GOAL) {
      console.log(this.name + " WINS!");
      loadLevel(levelOne);
    } else if (walkIntoTileIndex == WORLD_ROAD) {
      this.x = nextX;
      this.y = nextY;
    }
  };

  this.draw = () => {
    drawBitmapCenteredWithRotation(this.myWarriorPic, this.x, this.y, 0);
  };
};
