import { Input } from "../../Input"
import { FaUserLarge } from "react-icons/fa6";
import { useFormContext } from "react-hook-form";

export function ClientName(){

    const { register, formState: {errors} } = useFormContext();

    return (
        <div className = 'w-[40%]'>
            <Input.Root>
                <Input.Label label={"Nome completo do cliente"} icon = {FaUserLarge}/>
                <Input.Wrapper>
                        <Input.Content error={errors.name}>
                            <Input.Field
                                {...register("name", {
                                    required: "O nome é obrigatório",
                                    maxLength: {
                                        value: 30,
                                        message: "O nome é grande demais"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: 'O nome é muito curto'
                                    }
                                })}
                            />
                        </Input.Content>
                </Input.Wrapper>
                { errors.name && <Input.Error message = {errors.name.message}/>}
             </Input.Root>
        </div>
    )
}