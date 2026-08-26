const { getSignature } = require("../data/signatureStore");

async function drawSignature({ pdfDoc, page, layout }) {
  const signature = getSignature();

  if (!signature) {
    return {
      sucess: false,
      message: "no has signature save in memory",
    };
  }

  const base64Clean = signature.replace(/^data:image\/\w+;base64,/, "");

  const imageBytes = Buffer.from(base64Clean, "base64");
  const signatureImage = await pdfDoc.embedPng(imageBytes);

  page.drawImage(signatureImage, {
    x: layout.x,
    y: layout.y,
    width: layout.width,
    height: layout.height,
  });

  return {
    sucess: true,
    message: "signature draw with sucess",
  };
}

module.exports = { drawSignature };
