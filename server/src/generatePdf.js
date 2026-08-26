const fs = require("fs");
const path = require("path");
const fontkit = require("@pdf-lib/fontkit");

const { drawText } = require("./utils/drawText");
const { formatStringBR } = require("./utils/formatStringBR");
const { monthCode } = require("./utils/monthCode");
const { pdfLayout } = require("./utils/pdfLayout");
const { drawServices } = require("./helpers/drawServices");
const { drawPayments } = require("./helpers/drawPayments");
const { drawClientDeport } = require("./helpers/drawClientReport");
const { drawSignature } = require("./helpers/drawSignature");
const { loadPdf } = require("./helpers/loadPdf");
const { buildOutputPath } = require("./helpers/buildOutputPath");
const { clearSignature, getSignature } = require("./data/signatureStore");

async function generatePdf(orderService) {
  const osData = orderService;
  const dataFormatted = formatStringBR(osData.dateIssue);
  const modelPath = path.join(__dirname, "./assets/model.pdf");

  const { pdfDoc, page: firstPage } = await loadPdf(modelPath);

  pdfDoc.registerFontkit(fontkit);

  const fontBytes = fs.readFileSync(
    path.join(__dirname, "./assets/fonts/arial.ttf"),
  );
  const customFont = await pdfDoc.embedFont(fontBytes);

  const outputPath = buildOutputPath(orderService, dataFormatted);

  drawText(
    firstPage,
    `${dataFormatted.dd} - ${dataFormatted.mm} - ${dataFormatted.year}`,
    pdfLayout.date,
    customFont,
  );
  drawText(
    firstPage,
    `${osData.deviceBrand} ${osData.device}`,
    pdfLayout.device,
    customFont,
  );
  drawText(firstPage, osData.name, pdfLayout.client.name, customFont);
  drawText(firstPage, osData.techReport, pdfLayout.techReport, customFont);
  drawText(
    firstPage,
    osData.totalValue,
    pdfLayout.totals.totalValue,
    customFont,
  );

<<<<<<< HEAD
  drawServices(firstPage, osData.services, customFont, 1880, 45);
  drawPayments(firstPage, osData.payments, customFont, 1880, 45);
=======
	drawServices(firstPage, osData.services, customFont, 1880 + 106, 45);
	drawPayments(firstPage, osData.payments, customFont, 1880 + 106, 45);
>>>>>>> 30b2abbcf00b35ecf1443be7d19ff90ea5383d6c

  drawText(firstPage, osData.cpf, pdfLayout.client.cpf, customFont);

  drawText(firstPage, osData.imei, pdfLayout.client.imei, customFont);

<<<<<<< HEAD
  if (osData.code) {
    const code = `${monthCode(dataFormatted.mm)}${osData.code}`;
    firstPage.drawText(code, {
      x: 1830,
      y: 2980,
      size: 35,
      font: customFont,
    });
  }
=======
	if(osData.code){
			const code = `${monthCode(dataFormatted.mm)}${osData.code}`;
			firstPage.drawText(code, {
					x: 1830,
					y: 2980 + 30,
					size: 35,
					font: customFont
			});
	}
>>>>>>> 30b2abbcf00b35ecf1443be7d19ff90ea5383d6c

  drawClientDeport({
    page: firstPage,
    text: osData.clientDeport,
    font: customFont,
    layout: pdfLayout.clientDeport,
    fontSize: 45,
  });

  const signatureResult = await drawSignature({
    pdfDoc,
    page: firstPage,
    layout: pdfLayout.signature,
  });

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);

  clearSignature();

  return { outputPath: outputPath, signatureResult };
}

module.exports = { generatePdf };
