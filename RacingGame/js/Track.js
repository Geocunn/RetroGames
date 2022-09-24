const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_GAP = 0;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

//prettier-ignore
let trackGrid = [
    4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
    4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
    4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
    1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1,
    1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 5, 0, 0, 1, 0, 0, 1,
    1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
    1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
    1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
    1, 0, 3, 0, 0, 0, 1, 4, 4, 1, 1, 1, 4, 4, 1, 0, 0, 0, 1, 4,
    1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4,
    
    ];
const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_CORNER = 5;

let isObstacleAtColRow = (col, row) => {
  if (col >= 0 && col < TRACK_COLS && row >= 0 && row < TRACK_ROWS) {
    let trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return trackGrid[trackIndexUnderCoord] != TRACK_ROAD;
  } else {
    return false;
  }
};

let carTrackHandling = () => {
  let carTrackCol = Math.floor(carX / TRACK_W);
  let carTrackRow = Math.floor(carY / TRACK_H);

  if (
    carTrackCol >= 0 &&
    carTrackCol < TRACK_COLS &&
    carTrackRow >= 0 &&
    carTrackRow < TRACK_ROWS
  ) {
    if (isObstacleAtColRow(carTrackCol, carTrackRow)) {
      carX -= Math.cos(carAng) * carV;
      carY -= Math.sin(carAng) * carV;
      carV *= -0.5;
    }
  }
};

let rowColToArrayIndex = (col, row) => {
  return col + TRACK_COLS * row;
};

let drawTracks = () => {
  for (let row = 0; row < TRACK_ROWS; row++) {
    for (let col = 0; col < TRACK_COLS; col++) {
      let arrayIndex = rowColToArrayIndex(col, row);
      let tileKind = trackGrid[arrayIndex];
      let useImg;

      switch (tileKind) {
        case TRACK_ROAD:
          useImg = roadPic;
          break;
        case TRACK_WALL:
          useImg = wallPic;
          break;
        case TRACK_TREE:
          useImg = treePic;
          break;
        case TRACK_GOAL:
          useImg = goalPic;
          break;
        case TRACK_CORNER:
          useImg = cornerPic;
          break;
      }

      canvasContext.drawImage(useImg, TRACK_W * col, TRACK_H * row);
    } // end of for each co
  } // end of for each row
}; // end of func
