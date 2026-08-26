const fs = require("fs");
const path = require("path");
const os = require("os");
const { monthCode } = require("../utils/monthCode");

function sanitizeFileName(name) {
  return name
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\\/:*?"<>|]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function buildOutputPath(orderService, dateFormatted) {
  const year = dateFormatted.year;
  const month = monthCode(dateFormatted.mm);

  const baseDir = path.join(
    os.homedir(),
    "Desktop",
    `Garantias ${year}`,
    month,
  );

  if (!fs.existsSync(baseDir)) {
    fs.mkdirSync(baseDir, { recursive: true });
  }

  const fileName = sanitizeFileName(
    `garantia ${orderService.name} ${orderService.device} ` +
      `${dateFormatted.dd}-${dateFormatted.mm}-${dateFormatted.year}.pdf`,
  );

  return path.join(baseDir, fileName);
}

module.exports = { buildOutputPath };
