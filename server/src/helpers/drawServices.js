function drawServices(page, services, font, startY, size) {
  const LINE_HEIGHT = 119;

  for (const service of services) {
    page.drawText(service.name, { x: 350, y: startY, size, font });
    page.drawText(service.price, { x: 1100, y: startY, size, font });
    startY -= LINE_HEIGHT;
  }
}

module.exports = { drawServices };
