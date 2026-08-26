const os = require("node:os");
const QRCode = require("qrcode");

async function generateQrCode() {
  const interfaces = os.networkInterfaces();

  let ip;

  for (const network of Object.values(interfaces)) {
    for (const address of network ?? []) {
      if (address.family === "IPv4" && !address.internal) {
        ip = address.address;
        break;
      }
    }

    if (ip) break;
  }

  if (!ip) {
    throw new Error("Não foi possível encontrar o IP da máquina.");
  }

  const url = `http://${ip}:5001/signature?type=signature&ip=${ip}`;

  const qrCode = await QRCode.toDataURL(url);

  return {
    ip,
    port: 5001,
    url,
    qrCode,
  };
}

module.exports = { generateQrCode };
