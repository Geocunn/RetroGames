const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 0;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

//prettier-ignore
let levelOne = [
    4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
    4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
    4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 5, 0, 0, 1, 0, 0, 1,
    1, 2, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
    1, 1, 5, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 1, 4, 4, 1, 1, 1, 4, 4, 1, 0, 0, 0, 1, 4,
    1, 1, 5, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4,  
  ];

let trackGrid = [];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_CORNER = 5;

let returnTileTypeAtColRow = (col, row) => {
  if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
    let trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return trackGrid[trackIndexUnderCoord];
  } else {
    return TRACK_WALL;
  }
};

let carTrackHandling = (car) => {
  let carTrackCol = Math.floor(car.x / TRACK_W);
  let carTrackRow = Math.floor(car.y / TRACK_H);

  if (
    carTrackCol >= 0 &&
    carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 &&
    carTrackRow < TRACK_ROWS
  ) {
    let tileHere = returnTileTypeAtColRow(carTrackCol, carTrackRow);
    if (tileHere == TRACK_GOAL) {
      console.log(car.name + " Wins!");
      loadLevel(levelOne);
    } else if (tileHere != TRACK_ROAD) {
      car.x -= Math.cos(car.ang) * car.v;
      car.y -= Math.sin(car.ang) * car.v;
      car.v *= -0.5;
    }
  }
};

let rowColToArrayIndex = (col, row) => {
  return col + TRACK_COLS * row;
};

let drawTracks = () => {
  let arrayIndex = 0;
  let drawTileX = 0;
  let drawTileY = 0;
  for (let row = 0; row < TRACK_ROWS; row++) {
    for (let col = 0; col < TRACK_COLS; col++) {
      let tileKind = trackGrid[arrayIndex];
      let useImg = trackPics[tileKind];
      canvasContext.drawImage(useImg, drawTileX, drawTileY);

      drawTileX += TRACK_W;
      arrayIndex++;
    } // end of for each co
    drawTileX = 0;
    drawTileY += TRACK_H;
  } // end of for each row
}; // end of func
