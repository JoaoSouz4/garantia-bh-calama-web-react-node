import { Input } from "../../Input";
import { Controller, useFormContext } from "react-hook-form";

export function DeviceImei(){

    const { formState: {errors}, control} = useFormContext();

    return (

        <Controller
            name = "imei"
            control={control}
            rules={
                {
                    require: false, 
                    minLength: {
                        value: 15,
                        message: "imei inválido"
                    },
                }
  
            }
            render={({field, fieldState}) => (
                <Input.Root>
                    <div className = 'flex gap-2 items-center'>
                        <Input.Label label={"Imei (opcional):"}/>
                        {fieldState.error && <Input.Error message={fieldState.error.message}/>}
                    </div>
                    <Input.Field
                        value = {field.value}
                        onChange = {(e) => {
                            const value = e.target.value;
                            const formatted = maskIMEI(value);
                            field.onChange(formatted);
                        }}
                    />
                    <Input.Row />
                </Input.Root>     
            )}
        />

    )
}

function maskIMEI(value) {
  return value
    .replace(/\D/g, "")              // só números
    .slice(0, 15)                    // limita 11 dígitos
}