let carPic = document.createElement("img");
let carPic2 = document.createElement("img");
let trackPics = [];

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

let loadImageForTrackCode = (trackCode, fileName) => {
  trackPics[trackCode] = document.createElement("img");
  beginLoadingImage(trackPics[trackCode], fileName);
};

let loadImages = () => {
  let imageList = [
    { varName: carPic, theFile: "F1Car.png" },
    { varName: carPic2, theFile: "F1RBCar.png" },

    { trackType: TRACK_ROAD, theFile: "track_road.png" },
    { trackType: TRACK_WALL, theFile: "track_wall.png" },
    { trackType: TRACK_TREE, theFile: "track_tree.png" },
    { trackType: TRACK_GOAL, theFile: "track_goal.png" },
    { trackType: TRACK_CORNER, theFile: "track_wall_corner.png" },
  ];

  picsToLoad = imageList.length;

  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
    }
  }
};
