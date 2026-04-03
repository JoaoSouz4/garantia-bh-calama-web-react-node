import { Input } from "../../Input"
import { MdOutlineReportProblem } from "react-icons/md";
import { useFormContext } from "react-hook-form";

export function ClientReport(){

    const { register, formState: {errors}} = useFormContext();

    return (
        <Input.Root>
            <Input.Label label={"Problema relatado pelo cliente"} icon = {MdOutlineReportProblem}/>
            <Input.Wrapper>
                    <Input.Content error={errors.clientDeport}>
                        <Input.TextArea
                            {...register("clientDeport", {required: "Campo obrigatório"})}
                        />
                    </Input.Content>
            </Input.Wrapper>
            { errors.clientDeport && <Input.Error message = {errors.clientDeport.message}/>}
         </Input.Root>
    )
}