import { useFormContext, Controller} from "react-hook-form"

export function RadioOption({label, name, value}){
    const { register} = useFormContext();

        return (
            <div className = 'flex flex-col'>
                <label className = 'flex gap-2 items-center  text-xs'>
                    <input
                        className = 'sr-only peer'
                        type="radio" 
                        value = {value}
                        {...register(name)}
                    />

                    <div className=" cursor-pointer w-[1.4rem] h-[1.4rem] border-2 border border-blue-100 bg-blue-100 rounded-full flex items-center justify-center peer-checked:border-blue-600">
                        <div className="w-[0.6rem] h-[0.6rem] bg-blue-300 rounded-full scale-0 peer-checked:scale-100 transition-transform" />
                    </div>

                        {label}
                    </label>
                </div>
            )
}