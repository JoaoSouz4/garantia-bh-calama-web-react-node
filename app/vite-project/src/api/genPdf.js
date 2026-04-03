export async function genPdf(osData) {
  const response = await fetch("http://localhost:5001/genpdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(osData),
  });

  let data;

  try {
    data = await response.json();
  } catch {
    data = null; // caso não venha JSON válido
  }

  if (!response.ok) {
    throw new Error(data?.message || "Erro ao gerar PDF");
  }

  return data;
}