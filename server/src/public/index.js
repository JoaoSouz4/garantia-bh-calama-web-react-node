const canvas = document.querySelector("#signature");
const signaturePad = new SignaturePad(canvas);

const buttonClear = document.getElementById("clear");
const buttonSubmit = document.getElementById("submit");

window.addEventListener("resize", resizeCanvas);

resizeCanvas();

buttonClear.addEventListener("click", () => {
  signaturePad.clear();
});

buttonSubmit.addEventListener("click", () => {

  try {
    const res = signaturePad.toDataURL();
    //mudar o ip aqui para o do pc da loja
    fetch("http://192.168.1.8:5001/signature", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        signature: res
      })
    }).then(() => {
      alert("assinatura enviada");
    });

    signaturePad.clear();
  }
    catch(error){
      console.log(error.message)
      alert("erro ao enviar a assinatura")
  }
});
 

function resizeCanvas() {
  const ratio = Math.max(window.devicePixelRatio || 1, 1);

  canvas.width = canvas.offsetWidth * ratio;
  canvas.height = canvas.offsetHeight * ratio;

  canvas.getContext("2d").scale(ratio, ratio);
  signaturePad.clear();
}





