function drawPayments(page, payments, font, startY, size) {
  const LINE_HEIGHT = 119;

  for (const payment of payments) {
    page.drawText(payment.mode, { x: 1550, y: startY, size, font });

    if (payment.mode === 'Crédito') {
      page.drawText(payment.installments, { x: 1710, y: startY, size, font });
    }

    page.drawText(payment.value, { x: 1800, y: startY, size, font });
    startY -= LINE_HEIGHT;
  }
}

module.exports = { drawPayments };
