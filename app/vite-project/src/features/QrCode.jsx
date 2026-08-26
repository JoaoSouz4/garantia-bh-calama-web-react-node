import { useEffect, useState } from "react";
import { LuTriangleAlert } from "react-icons/lu";

export function QrCode() {
  const [path, setPath] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/qrcode")
      .then((res) => res.json())
      .then((res) => setPath(res.qrCode));
  });
  return (
    <div className="flex items-start flex-col justify-start w-75 ml-8">
      <div className="flex flex-col items-center w-full text-gray-50 border border-gray-500 bg-gray-700 rounded-2xl gap-1 p-4">
        <div className="">
          {path ? <img src={path} className="rounded-2xl " /> : <div>...</div>}
        </div>

        <div className="">
          <div className="text-md mt-4 text-center">
            Escaneie o QR code acima para acessar a página de assinatura da
            garantia.
          </div>
        </div>
      </div>

      <div className="mt-6 border border-gray-500 text-gray-300 rounded-2xl  p-4">
        <div className="font-bold flex gap-2 items-center mb-2">
          <LuTriangleAlert />
          Atenção
        </div>
        <div className="h-px w-full bg-gray-600 mb-4" />
        Certifique-se desta maquina estar conectada na mesma rede do celular.
      </div>
    </div>
  );
}
