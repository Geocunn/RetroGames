let canvas, canvasContext;

let p1Warrior = new warriorClass();

window.onload = () => {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext("2d");

  colorRect(0, 0, canvas.clientWidth, canvas.height, "black");
  colorText("Loading", canvas.width / 2, canvas.height / 2, "white");

  loadImages();
};

let imageLoadingDone = () => {
  let fps = 30;
  setInterval(updateAll, 1000 / fps);

  setupInput();
  loadLevel(levelOne);
};

let loadLevel = (whichlevel) => {
  worldGrid = whichlevel.slice();
  p1Warrior.reset(warriorPic, "Warrior");
};

let updateAll = () => {
  moveAll();
  drawAll();
};

let moveAll = () => {
  p1Warrior.move();
};

let drawAll = () => {
  drawWorld();
  p1Warrior.draw();
};
