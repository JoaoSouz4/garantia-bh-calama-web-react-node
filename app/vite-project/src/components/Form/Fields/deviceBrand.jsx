import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import { SiBrandfolder } from "react-icons/si";

export function DeviceBrand(){

    const { register, formState: {errors}} = useFormContext();

    return (
        <Input.Root>
            <Input.Label label={"Marca"} icon={SiBrandfolder}/>
            <Input.Wrapper>
                <Input.Content>
                    <Input.Field {...register("deviceBrand", {required: "Campo obrigatório"})}/>
                </Input.Content>
            </Input.Wrapper>
            { errors.deviceBrand && <Input.Error message = {errors.deviceBrand.message}/>}
        </Input.Root>
    )
}