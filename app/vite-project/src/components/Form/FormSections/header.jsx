import { MdEditDocument } from "react-icons/md";

export function Header() {
  return (
    <div className="pb-2">
      <h1 className="text-2xl text-gray-200 font-bold flex items-center gap-2">
        <MdEditDocument className="text-blue-500" />
        Formulário de garantia
      </h1>
      <p className=" text-gray-400 rounded-md text-sm">
        Saída do arquivo em: C:\Users\usuario\Desktop\Garantias
      </p>
    </div>
  );
}
