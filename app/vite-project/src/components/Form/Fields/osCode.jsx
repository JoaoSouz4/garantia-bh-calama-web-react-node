import { useFormContext } from "react-hook-form";
import { Input } from "../../Input";

export function OsCode(){

    const { register, formState: {errors} } = useFormContext();

    return (
        <Input.Root>
            <Input.Label label={"Codigo da os:"}/>
            <Input.Field
                maxlength="2"
                {...register("code", {required: true, maxLength: 2})}
            />
            <Input.Row errorStatus = {errors.code}/>
        </Input.Root>
    )
}