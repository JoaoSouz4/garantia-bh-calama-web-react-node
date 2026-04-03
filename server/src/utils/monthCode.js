function monthCode(month) {
  let code;

  switch (month) {
    case "01": code = "JAN"; break;
    case "02": code = "FEV"; break;
    case "03": code = "MAR"; break;
    case "04": code = "ABR"; break;
    case "05": code = "MAI"; break;
    case "06": code = "JUN"; break;
    case "07": code = "JUL"; break;
    case "08": code = "AGO"; break;
    case "09": code = "SET"; break;
    case "10": code = "OUT"; break;
    case "11": code = "NOV"; break;
    case "12": code = "DEZ"; break;
    default:
      throw new Error("Mês inválido");
  }

  return code;
}

module.exports = {monthCode}