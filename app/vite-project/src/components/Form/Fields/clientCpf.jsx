import { Input } from "../../Input";
import { Controller, useFormContext } from "react-hook-form";

export function ClientCpf(){

    const { formState: {errors}, control} = useFormContext();

    return (

        <Controller
            name = "cpf"
            control={control}
            rules={
                {
                    require: false, 
                    minLength: {
                        value: 11,
                        message: "CPF inválido"
                    },
                }
  
            }
            render={({field, fieldState}) => (
                <Input.Root>
                    <div className = 'flex gap-2 items-center'>
                        <Input.Label label={"cpf(opcional)"}/>
                        {fieldState.error && <Input.Error message={fieldState.error.message}/>}
                    </div>
                    <Input.Field
                         value={field.value ?? ""}
                        onChange = {(e) => {
                            const value = e.target.value;
                            const formatted = maskCPF(value);
                            field.onChange(formatted);
                        }}
                        placeholder = {"000-000-000-00"}
                    />
                    <Input.Row />
                </Input.Root>     
            )}
        />

    )
}

function maskCPF(value) {
  return value
    .replace(/\D/g, "")              // só números
    .slice(0, 11)                    // limita 11 dígitos
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}