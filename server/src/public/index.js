const canvas = document.querySelector("#signature");
const signaturePad = new SignaturePad(canvas);

const buttonClear = document.getElementById("clear");
const buttonSubmit = document.getElementById("submit");

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

buttonClear.addEventListener("click", () => {
  signaturePad.clear();
});

const params = new URLSearchParams(window.location.search);
const ip = params.get("ip");

buttonSubmit.addEventListener("click", async () => {
  try {
    const res = signaturePad.toDataURL();
    const result = await fetch(`http://${ip}:5001/signature`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signature: res,
      }),
    });

    console.log(result);

    alert("Assinatura enviada com sucesso");

    signaturePad.clear();
  } catch (error) {
    console.log(error.message);
    alert("erro ao enviar a assinatura");
  }
});

function resizeCanvas() {
  const ratio = Math.max(window.devicePixelRatio || 1, 1);

  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;

  canvas.getContext("2d").scale(ratio, ratio);
  signaturePad.clear();
}
