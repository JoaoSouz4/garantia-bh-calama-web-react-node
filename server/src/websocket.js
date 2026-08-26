const { WebSocketServer } = require("ws");

let wss;
let signatureClient = null;
let desktopClient = null;

function init(server) {
  wss = new WebSocketServer({ server });

  wss.on("connection", (ws, req) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const type = url.searchParams.get("type");

    if (type === "signature") {
      if (signatureClient) {
        ws.send(
          JSON.stringify({
            type: "ERROR",
            message: "Já existe uma assinatura ativa",
          }),
        );
        ws.close();
        return;
      }

      signatureClient = ws;
      console.log("HTML conectou");

      sendToDesktop({ type: "SIGNATURE_OPENED" });

      ws.on("close", () => {
        console.log("HTML fechou");
        signatureClient = null;

        sendToDesktop({ type: "SIGNATURE_CLOSED" });
      });
    }

    if (type === "desktop") {
      desktopClient = ws;
      console.log("Electron conectou");

      ws.on("close", () => {
        console.log("Electron fechou");
        desktopClient = null;
      });
    }

    ws.on("message", (msg) => {
      console.log("Mensagem:", msg.toString());
    });
  });
}

function sendToDesktop(data) {
  try {
    if (desktopClient && desktopClient.readyState === 1) {
      desktopClient.send(JSON.stringify(data));
      console.log("evento foi disparado");
    }
  } catch (error) {
    console.log("erro ao disparar evento", error.message);
  }
}

function sendToSignature(data) {
  if (signatureClient && signatureClient.readyState === 1) {
    signatureClient.send(JSON.stringify(data));
  }
}

module.exports = { init, sendToDesktop, sendToSignature };
