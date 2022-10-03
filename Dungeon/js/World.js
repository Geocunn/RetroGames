const WORLD_W = 40;
const WORLD_H = 40;
const WORLD_GAP = 0;
const WORLD_COLS = 20;
const WORLD_ROWS = 15;
//prettier-ignore
let levelOne = [4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4,
                4, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 4,
                4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1,
                1, 0, 0, 0, 1, 1, 1, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 0, 0, 1,
                1, 0, 0, 1, 1, 0, 0, 1, 4, 4, 4, 1, 0, 0, 0, 0, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 1, 4, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 5, 0, 0, 0, 5, 0, 0, 5, 0, 0, 1, 0, 0, 1,
                1, 2, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1,
                1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 5, 0, 0, 1,
                1, 1, 5, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
                1, 0, 3, 0, 0, 0, 1, 4, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1,
                1, 0, 3, 0, 0, 0, 1, 4, 4, 1, 1, 1, 4, 4, 1, 0, 0, 0, 1, 4,
                1, 1, 5, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 4, 4];
let worldGrid = [];
const WORLD_ROAD = 0;
const WORLD_WALL = 1;
const WORLD_PLAYERSTART = 2;
const WORLD_GOAL = 3;
const WORLD_TREE = 4;
const WORLD_CORNER = 5;

let returnTileTypeAtColRow = (col, row) => {
  if (col >= 0 && col < WORLD_COLS && row >= 0 && row < WORLD_ROWS) {
    let worldIndexUnderCoord = rowColToArrayIndex(col, row);
    return worldGrid[worldIndexUnderCoord];
  } else {
    return WORLD_WALL;
  }
};

let getTileTypeAtPixelCoord = (atX, atY) => {
  let warriorWorldCol = Math.floor(atX / WORLD_W);
  let warriorWorldRow = Math.floor(atY / WORLD_H);
  let worldIndexUnderWarrior = rowColToArrayIndex(
    warriorWorldCol,
    warriorWorldRow
  );

  if (
    warriorWorldCol >= 0 &&
    warriorWorldCol < WORLD_COLS &&
    warriorWorldRow >= 0 &&
    warriorWorldRow < WORLD_ROWS
  ) {
    let tileHere = returnTileTypeAtColRow(warriorWorldCol, warriorWorldRow);

    return tileHere;
  } // end of valid col and row

  return WORLD_WALL;
};

let rowColToArrayIndex = (col, row) => {
  return col + WORLD_COLS * row;
};

let drawWorld = () => {
  let arrayIndex = 0;
  let drawTileX = 0;
  let drawTileY = 0;
  for (let row = 0; row < WORLD_ROWS; row++) {
    for (let col = 0; col < WORLD_COLS; col++) {
      let tileKind = worldGrid[arrayIndex];
      let useImg = worldPics[tileKind];
      canvasContext.drawImage(useImg, drawTileX, drawTileY);

      drawTileX += WORLD_W;
      arrayIndex++;
    } // end of for each co
    drawTileX = 0;
    drawTileY += WORLD_H;
  } // end of for each row
}; // end of func
