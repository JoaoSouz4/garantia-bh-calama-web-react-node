const fs = require('fs');
const path = require('path');
const { drawText } = require("./utils/drawText");
const { formatStringBR } = require("./utils/formatStringBR");
const { monthCode } = require("./utils/monthCode");
const { pdfLayout } = require("./utils/pdfLayout");
const { drawServices } = require('./helpers/drawServices');
const { drawPayments } = require("./helpers/drawPayments");
const { drawClientDeport } = require('./helpers/drawClientReport');
const { drawSignature } = require('./helpers/drawSignature');
const { loadPdf } = require("./helpers/loadPdf");
const { buildOutputPath } = require("./helpers/buildOutputPath");

async function generatePdf(orderService){

    try {
        const osData = orderService;
        const dataFormatted = formatStringBR(osData.dateIssue);
        const modelPath = path.join(__dirname, "./assets/model.pdf");
        const {pdfDoc, page: firstPage, font: helveticaFont} = await loadPdf(modelPath);
        const outputPath = buildOutputPath(orderService, dataFormatted);

        drawText(firstPage, `${dataFormatted.dd} - ${dataFormatted.mm} - ${dataFormatted.year}`, pdfLayout.date, helveticaFont);
        drawText(firstPage, `${osData.deviceBrand} ${osData.device}`, pdfLayout.device, helveticaFont);
        drawText(firstPage, osData.name, pdfLayout.client.name, helveticaFont);
        drawText(firstPage, osData.techReport, pdfLayout.techReport, helveticaFont);
        drawText(firstPage, osData.totalValue, pdfLayout.totals.totalValue, helveticaFont);

        drawServices(firstPage, osData.services, helveticaFont, 1880, 45);
        drawPayments(firstPage, osData.payments, helveticaFont, 1880, 45);

        if(osData.cpf) drawText(firstPage, osData.cpf, pdfLayout.client.cpf, helveticaFont);
        if(osData.imei) drawText(firstPage, osData.imei, pdfLayout.client.imei, helveticaFont);


        drawClientDeport({
          page: firstPage,
          text: osData.clientDeport,
          font: helveticaFont,
          layout: pdfLayout.clientDeport,
          fontSize: 45
        });

        await drawSignature({
          pdfDoc,
          page: firstPage,
          layout: pdfLayout.signature
        });

        if(osData.code){
            const code = `${monthCode(dataFormatted.mm)}${osData.code}`
            firstPage.drawText(code, { x: 1830, y: 2980, size: 35, font: helveticaFont })
        }

        const pdfBytes = await pdfDoc.save();
        fs.writeFileSync(outputPath, pdfBytes);

    } catch (e){
        console.log(e.message);
        throw Error(e.message);
    }
}

module.exports = {generatePdf}