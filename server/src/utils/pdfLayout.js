// pdfLayout.js
const BASE_FONT = 45;

const pdfLayout = {
  fontSize: BASE_FONT,

  date: {
    x: 1750, 
    y: 3070 + 23
  },

  client: {
    name:   { x: 350, y: 2719 + 110 },
    cpf:    { x: 1450, y: 2700 + 110},
    device: { x: 350, y: 2490 + 300},
    imei:   { x: 350, y: 2295 + 100}
  },

  device: {
    x: 350,
    y: 2490 + 110
  },

  techReport: {
    x: 350, y: 2090 + 110
  },

  clientDeport: {
    x: 1150,
    startY: 2490 + 110,
    maxWidth: 990,
    lineHeight: 22,
    lineGap: 25
  },

  signature: {
    x: 850 + 650,
    y: 240,
    width: 500,
    height: 200
  },

  totals: {
    totalValue: { x: 1700, y: 1520 + 110 }
  }
};

module.exports = {pdfLayout}

