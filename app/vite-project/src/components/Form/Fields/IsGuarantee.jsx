import { RadioOption } from "../../Radio/option";

export function IsGuaranted(){
    return (
        <div className = 'flex flex-col gap-2 my-4'>

            <h4 className = 'text-sm font-bold text-blue-600'>
                Tem garantia: 
            </h4>
            <div className ='flex gap-2 '>
                <RadioOption label={"Sim"} name = {"isGuaranted"} value = {"true"} />
                <RadioOption label={"Não"} name = {"isGuaranted"} value = {"false"}/>
            </div>
        </div>
    )
}