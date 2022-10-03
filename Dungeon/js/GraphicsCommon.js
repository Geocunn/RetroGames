let drawBitmapCenteredWithRotation = (useBitmap, atX, atY, withAng) => {
  canvasContext.save();
  canvasContext.translate(atX, atY);
  canvasContext.rotate(withAng);
  canvasContext.drawImage(
    useBitmap,
    -useBitmap.width / 2,
    -useBitmap.height / 2
  );
  canvasContext.restore();
};

let colorRect = (topLeftX, topLeftY, boxWidth, boxHeight, fillColor) => {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
};

let colorCircle = (centerX, centerY, radius, fillColor) => {
  canvasContext.fillStyle = fillColor;
  canvasContext.beginPath();
  canvasContext.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
  canvasContext.fill();
};

let colorText = (words, textX, textY, fillColor) => {
  canvasContext.fillStyle = fillColor;
  canvasContext.fillText(words, textX, textY);
};
