import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";
import { Input } from "../../Input";
import { FaTools } from "react-icons/fa";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { ChangeQuantity } from "../../changeQuantity";
import { TotalValue } from "./TotalValue";

export function Services() {
  const { register, unregister, formState: { errors }, control } = useFormContext();
  const [count, setCount] = useState(1);
  const maxCount = 4;
  const minCount = 1;

  const addService = () => {
    if (count < maxCount) setCount(prev => prev + 1);
  };

  const removeService = () => {
  if (count > minCount) {
    unregister(`services[${count - 1}].name`, { keepValue: false });
    unregister(`services[${count - 1}].price`, { keepValue: false });
    setCount(prev => prev - 1);
  }
};

  return (
    <div className="border rounded-md overflow-hidden border-blue-500">
      <div className = 'bg-blue-600 p-2 px-4 flex items-center justify-between'>
        <h2 className = 'text-white font-bold'>Lista de serviços</h2>
        <div className="flex items-center justify-end gap-2 overflow-hidden">
          <ChangeQuantity label = {'incluir'}func={addService} char="+" />
          <ChangeQuantity label = {'remover'} func={removeService} char="-" />
        </div>
      </div>

      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="flex gap-4 p-4">
          {/* Serviço */}
          <Input.Root>
            <Input.Label icon={FaTools} label={`Serviço/Produto ${index + 1}`} />
            <Input.Wrapper>
              <Input.Content error = {errors?.services?.[index]?.name}>
                <Input.Field
                  {...register(`services[${index}].name`, { required: "Campo obrigatório" })}
                />
              </Input.Content>
            </Input.Wrapper>
            {errors.services?.[index]?.name && (
              <Input.Error message={errors.services[index].name.message} />
              )}
          </Input.Root>

          {/* Valor */}
          <Input.Root>
            <Input.Label icon={RiMoneyDollarCircleLine} label="Valor unitário" />
            <Input.Wrapper>
              <Input.Content error = {errors?.services?.[index]?.price}>
                <Controller
                  name={`services[${index}].price`}
                  control={control}
                  defaultValue=""
                  rules={{ required: "Campo obrigatório" }}
                  render={({ field }) => (
                    <Input.Field
                      type="text"
                      value={field.value}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, "");
                        const formatted = (Number(val) / 100).toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        });
                        field.onChange(formatted);
                      }}
                    />
                  )}
                />
              </Input.Content>
            </Input.Wrapper>
            {errors.services?.[index]?.price && (
                <Input.Error message={errors.services[index].price.message} />
              )}
          </Input.Root>
        </div>
      ))}
      <TotalValue />
    </div>

  );
}
