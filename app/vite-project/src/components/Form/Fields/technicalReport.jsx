import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";
import { TbReportAnalytics } from "react-icons/tb";

export function TechnicalReport(){

    const { register, formState: {errors} } = useFormContext();

    return (
        <Input.Root>
            <Input.Label label={"Laudo técnico"} icon={TbReportAnalytics}/>
            <Input.Wrapper>
                <Input.Content error={errors.techReport}>
                    <Input.TextArea {...register("techReport", {required: "Campo obrigatório"} )}/>
                </Input.Content>
            </Input.Wrapper>
            { errors.techReport && <Input.Error message = {errors.techReport.message}/>}
        </Input.Root>
    )
}