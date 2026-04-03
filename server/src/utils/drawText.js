function drawText(page, text, position, font, size = 45) {
  if (!text) return;

  page.drawText(String(text), {
    x: position.x,
    y: position.y,
    size,
    font
  });
}

module.exports = {drawText}
