// pdfLayout.js
const BASE_FONT = 45;

const pdfLayout = {
  fontSize: BASE_FONT,

  date: {
    x: 1750, 
    y: 3070 
  },

  client: {
    name:   { x: 350, y: 2719 },
    cpf:    { x: 1450, y: 2700 },
    device: { x: 350, y: 2490 },
    imei:   { x: 350, y: 2295 }
  },

  device: {
    x: 350,
    y: 2490
  },

  techReport: {
    x: 350, y: 2090
  },

  clientDeport: {
    x: 1150,
    startY: 2490,
    maxWidth: 990,
    lineHeight: 22,
    lineGap: 25
  },

  signature: {
    x: 850,
    y: 240,
    width: 500,
    height: 200
  },

  totals: {
    totalValue: { x: 1700, y: 1520 }
  }
};

module.exports = {pdfLayout}

