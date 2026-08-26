const { clearSignature } = require("../data/signatureStore");
const { generatePdf } = require("../generatePdf");

async function GenPdf(req, res) {
  try {
    const result = await generatePdf(req.body);

    return res.status(200).json({
      success: true,
      message: "PDF gerado com sucesso",
      ...result,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      errorMessage: error.message || "Erro interno no servidor",
    });
  }
}

module.exports = { GenPdf };
