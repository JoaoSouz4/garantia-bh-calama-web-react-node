import { useFormContext } from "react-hook-form"

export function Option({value, func, index}){
    const { setValue } = useFormContext();
    
    function handleClick(){
        setValue(`payments[${index}].mode`, value)
        func()
    }
    return (
        <li
            onClick={handleClick}
            className = 'overflow-hidden cursor-pointer hover:bg-teal-300/30 p-3 text-sm bg-blue-100 '>
            {value}
        </li>
    )
}