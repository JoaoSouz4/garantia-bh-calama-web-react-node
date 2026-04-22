const { Router } = require("express");
const express = require("express");
const path = require('path');
const {getDate, getOsData}  = require('./middleware/getDate.js');
const {GenPdf} = require('./controller/genPdf.controller.js');
const {sendToDesktop } = require('./websocket.js');
const { setSignature } = require('./data/signatureStore.js');

const routes = Router();

const reactPath = path.join(__dirname, '../../app/vite-project/dist');

routes.use('/app', express.static(reactPath));

routes.get('/app', (req, res) => {
  res.sendFile(path.join(reactPath, 'index.html'));
});

routes.post('/genpdf', getOsData, GenPdf);

routes.get("/signature", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

routes.post("/signature", (req, res) => {
    console.log('to aq')
    const { signature } = req.body;

    if (!signature) {
        return res.status(400).json({ error: "Assinatura inválida" });
    }
  
    setSignature(signature);

    sendToDesktop({
        type: 'SIGNATURE_UPDATED',
        payload: signature
    });

    console.log('dei o post')

    res.json({ ok: true });
});


module.exports = {routes};