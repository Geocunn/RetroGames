let warriorPic = document.createElement("img");
let worldPics = [];

var picsToLoad = 0;

let countLoadedImagesAndLuanch = () => {
  picsToLoad--;
  if (picsToLoad === 0) {
    imageLoadingDone();
  }
};

let beginLoadingImage = (imgVar, fileName) => {
  imgVar.onload = countLoadedImagesAndLuanch;
  imgVar.src = "images/" + fileName;
};

let loadImageForWorldCode = (worldCode, fileName) => {
  worldPics[worldCode] = document.createElement("img");
  beginLoadingImage(worldPics[worldCode], fileName);
};

let loadImages = () => {
  let imageList = [
    { varName: warriorPic, theFile: "warrior.png" },

    { worldType: WORLD_ROAD, theFile: "world_road.png" },
    { worldType: WORLD_WALL, theFile: "world_wall.png" },
    { worldType: WORLD_GOAL, theFile: "world_goal.png" },
    { worldType: WORLD_TREE, theFile: "world_tree.png" },
    { worldType: WORLD_CORNER, theFile: "world_wall_corner.png" },
  ];

  picsToLoad = imageList.length;

  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForWorldCode(imageList[i].worldType, imageList[i].theFile);
    }
  }
};
