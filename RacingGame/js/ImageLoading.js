let roadPic = document.createElement("img");
let wallPic = document.createElement("img");
let carPic = document.createElement("img");
let treePic = document.createElement("img");
let goalPic = document.createElement("img");
let cornerPic = document.createElement("img");

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

let loadImages = () => {
  let imageList = [
    { varName: carPic, theFile: "player1Car.png" },
    { varName: roadPic, theFile: "track_road.png" },
    { varName: wallPic, theFile: "track_wall.png" },
    { varName: treePic, theFile: "track_tree.png" },
    { varName: goalPic, theFile: "track_goal.png" },
    { varName: cornerPic, theFile: "track_wall_corner.png" },
  ];

  picsToLoad = imageList.length;

  for (let i = 0; i < imageList.length; i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  }
};
