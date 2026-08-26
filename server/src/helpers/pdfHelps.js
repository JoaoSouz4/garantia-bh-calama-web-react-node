const fs = require("fs");
const path = require("path");
const os = require("os");
const { PDFDocument, StandardFonts } = require("pdf-lib");

async function loadPdf(modelPath) {
  const bytes = fs.readFileSync(modelPath);
  const pdfDoc = await PDFDocument.load(bytes);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  return { pdfDoc, page: pdfDoc.getPages()[0], font };
}

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

module.exports = { loadPdf, ensureDir };
