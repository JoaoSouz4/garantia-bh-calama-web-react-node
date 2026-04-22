const { generatePdf } = require("../generatePdf");

async function GenPdf(req, res){

    try {
        await generatePdf(req.body);
        return res.status(200).json({
            isSucess: true,
            message: 'PDF gerado com sucesso'
        });
    } catch (error) {

        return res.status(500).json({
            isSucess: false,
            message: error.message
        })
    }
};

module.exports = {GenPdf}