const fs = require("fs");
const { PDFDocument, StandardFonts } = require("pdf-lib");

async function loadPdf(modelPath) {
  if (!fs.existsSync(modelPath)) {
    throw new Error(`PDF modelo não encontrado: ${modelPath}`);
  }

  const pdfBytes = fs.readFileSync(modelPath);
  const pdfDoc = await PDFDocument.load(pdfBytes);

  const page = pdfDoc.getPages()[0];
  if (!page) {
    throw new Error("PDF não contém páginas");
  }

  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);

  return {
    pdfDoc,
    page,
    font
  };
}

module.exports = { loadPdf };
