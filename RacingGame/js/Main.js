let canvas, canvasContext;

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
  carReset();
};

let updateAll = () => {
  moveAll();
  drawAll();
};

let moveAll = () => {
  carMove();
  carTrackHandling();
};

let drawAll = () => {
  drawTracks();
  carDraw();
};
