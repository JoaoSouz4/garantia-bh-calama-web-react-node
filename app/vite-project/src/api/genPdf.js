export async function genPdf(osData) {
  const response = await fetch("http://localhost:5001/genpdf", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(osData),
  });

  const data = await response.json();
  console.log(data);

  if (!response.ok) {
    throw new Error(data?.message || "Erro ao gerar PDF" );
  }

  return data;
}