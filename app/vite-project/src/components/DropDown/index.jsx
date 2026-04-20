import { Input } from "../Input"
import { List } from "./list"
import { Option } from "./option"
import { DropDownButton } from "./button"
import { useEffect, useState } from "react"
import { useFormContext, Controller} from "react-hook-form"

export function DropDown({ label, options, indexx }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCredit, setIsCredit] = useState(false)

  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext();


  function handleChoose() {
    setIsOpen((prev) => !prev)
  }

  const paymentMode = watch(`payments[${indexx}].mode`)

  useEffect(() => {
    setIsCredit(paymentMode === "Crédito")
  }, [paymentMode])

  return (
    <Input.Root>
      <Input.Label label={label} />
      <Input.Wrapper>
        <DropDownButton func={handleChoose} />

        <div className="flex gap-2">
          {/* Mode */}
          <div className="w-1/3 flex-none">
            <Input.Content error={errors?.payments?.[indexx]?.mode}>
              <Input.Field
                {...register(`payments[${indexx}].mode`, {
                  required: "Campo obrigatório",
                })}
                readOnly
              />
            </Input.Content>
          </div>

          {/* Value */}
          <div className="w-24 flex-none">
            <Input.Content error={errors?.payments?.[indexx]?.value}>
              <Controller
                name={`payments[${indexx}].value`}
                control={control}
                defaultValue=""
                rules={{ required: "Campo obrigatório" }}
                render={({ field }) => (
                  <Input.Field
                    type="text"
                    value={field.value}
                    placeholder="valor"
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, "")
                      const formatted = (Number(val) / 100).toLocaleString(
                        "pt-BR",
                        {
                          style: "currency",
                          currency: "BRL",
                        }
                      )
                      field.onChange(formatted)
                    }}
                  />
                )}
              />
            </Input.Content>
          </div>

          {isCredit && (
  <div className="w-16">
    <Input.Content error={errors?.payments?.[indexx]?.installments}>
      <Controller
        name={`payments[${indexx}].installments`}
        control={control}
        rules={{ required: "Campo obrigatório" }}
        render={({ field }) => (
          <Input.Field
            type="text"
            value={field.value ?? ""}
            onChange={(e) => {
              // Remove qualquer caractere não numérico e adiciona "x"
              let val = e.target.value.replace(/\D/g, "");
              field.onChange(val ? `${val}x` : "");
            }}
            onKeyDown={(e) => {
              if (e.key === "Backspace" || e.key === "Delete") {
                e.preventDefault(); // evita comportamento padrão
                field.onChange(""); // limpa o input
              }
            }}
          />
        )}
      />
    </Input.Content>
  </div>
)}      
        </div>
      </Input.Wrapper>

      <List isOpen={isOpen}>
        {options.map((element, index) => (
          <Option
            key={`${element}-${index}`}
            value={element}
            func={handleChoose}
            index={indexx}
          />
        ))}
      </List>
    </Input.Root>
  )
}