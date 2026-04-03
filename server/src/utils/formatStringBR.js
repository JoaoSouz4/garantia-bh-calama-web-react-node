function formatStringBR(dateString) {
  const [year, month, day] = dateString.split('-');
  return {
    dd: day.padStart(2, '0'),
    mm: month.padStart(2, '0'),
    year
  };
}

module.exports = {formatStringBR}
