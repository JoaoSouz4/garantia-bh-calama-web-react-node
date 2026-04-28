import { useFormContext, useWatch } from "react-hook-form";

export function TotalValue() {
  const { control, setValue } = useFormContext();
  const services = useWatch({ control, name: "services", defaultValue: [] });

  const total = (services || []).reduce((acc, s) => {
    if (!s?.price) return acc;

    // pega só números
    const digits = s.price.replace(/\D/g, ""); 
    // transforma em número com duas casas
    const value = acc + Number(digits) / 100;

    // formata no padrão BR
    const formatted = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    setValue("totalValue", formatted);

    return value;
  }, 0);

  return (
    <label className="flex justify-end font-bold text-gray-400 text-xs p-2">
      Valor Total:{" "}
      {total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
    </label>
  );
}

