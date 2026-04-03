const { wrapText } = require("../utils/wrapText");

function drawClientDeport({
  page,
  text,
  font,
  layout,
  fontSize = 45
}) {
  if (!text) return;

  const {
    x,
    startY,
    maxWidth,
    lineHeight,
    lineGap = 0
  } = layout;

  const lines = wrapText({
    text,
    font,
    fontSize,
    maxWidth
  });

  let currentY = startY;

  for (const line of lines) {
    page.drawText(line, {
      x,
      y: currentY,
      size: fontSize,
      font
    });

    currentY -= lineHeight + lineGap;
  }
}

module.exports = { drawClientDeport };
