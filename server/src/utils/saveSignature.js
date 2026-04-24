const { getSignature } = require("../data/signatureStore");

async function saveSignature(pdfDoc, page) {
  const signature = getSignature();
  if (!signature) return;

  const base64 = signature.replace(/^data:image\/\w+;base64,/, '');
  const imageBytes = Buffer.from(base64, 'base64');

  const image = await pdfDoc.embedPng(imageBytes);

  page.drawImage(image, {
    x: 850,
    y: 240,
    width: 500,
    height: 200
  });
}

module.exports = {saveSignature}