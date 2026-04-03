import { RadioOption } from "./option";

export function Radio({label, name}){

    return (
        <div className = 'mt-1'>
            <h4 className = 'mb-2 font-bold text-slate-200 text-sm'>
                {label}
            </h4>

            <div className = 'flex flex-col gap-2'>
                <RadioOption label={"Sim"} name = {name} value = "sim" />
                <RadioOption label={"Não"} name = {name} value = "não"/>
            </div>
        </div>
    )
}