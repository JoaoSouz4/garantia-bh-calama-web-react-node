import { Input } from "../../Input"
import { MdDevices } from "react-icons/md";
import { useFormContext } from "react-hook-form";

export function ClientDevice(){

    const { register, formState: {errors}} = useFormContext();

    return (
        <Input.Root>
            <Input.Label label={"Nome do Dispositivo"} icon = {MdDevices}/>
            <Input.Wrapper>
                    <Input.Content error={errors.device}>
                        <Input.Field
                            {...register("device", 
                                {
                                    required: "Campo obrigatório",
                                    minLength: {
                                        value: 3,
                                        message: 'Muito curto'
                                    }
                                }
                            )}
                        />
                    </Input.Content>
            </Input.Wrapper>
            { errors.device && <Input.Error message = {errors.device.message}/>}
         </Input.Root>
    )
}