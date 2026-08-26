const { Router } = require("express");
const express = require("express");
const path = require("path");
const { getDate, getOsData } = require("./middleware/getDate.js");
const { GenPdf } = require("./controller/genPdf.controller.js");
const { sendToDesktop } = require("./websocket.js");
const { setSignature } = require("./data/signatureStore.js");
const { generateQrCode } = require("./utils/generateQrCode.js");

const routes = Router();

const reactPath = path.join(__dirname, "../../app/vite-project/dist");

routes.use("/app", express.static(reactPath));

routes.get("/app", (req, res) => {
  res.sendFile(path.join(reactPath, "index.html"));
});

routes.post("/genpdf", getOsData, GenPdf);

routes.get("/signature", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

routes.post("/signature", (req, res) => {
  const { signature } = req.body;

  if (!signature) {
    return res.status(400).json({ error: "Assinatura inválida" });
  }

  setSignature(signature);

  sendToDesktop({
    type: "SIGNATURE_UPDATED",
    payload: signature,
  });

  res.json({ ok: true });
});

routes.get("/qrcode", async (req, res) => {
  try {
    const data = await generateQrCode();

    res.json(data);
  } catch (error) {
    res.status(500).json({
      error: "Não foi possível obter os dados de conexão.",
    });
  }
});

module.exports = { routes };
