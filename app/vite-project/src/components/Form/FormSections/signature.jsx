import { useFormContext } from "react-hook-form";
import { useSignature } from "../../../hooks/useSignature";

export function Signature(){

    const {status, signature} = useSignature();
  
    return (
        <div className = 'flex flex-col mt-2 border border-blue-500 rounded-md overflow-hidden mt-6 h-[300px]'>
            <div className = 'flex items-center justify-between p-2 bg-blue-600 text-white'>
                <div className = 'font-bold'>Assinatura | Pré-visualização</div>
            </div>

            <div className = 'grow flex flex-col text-xs p-2 justify-start gap-4'>

                <div className = 'grow flex flex-col'>
                    <h2 className = 'translate-y-[0.5rem] bg-white w-fit px-2 text-zinc-400'>Assinatura do cliente: </h2>
                    <div className = 'border grow rounded-lg border-zinc-300'>
                        {
                        signature && 
                            <div className = ''>
                                <img
                                    className = 'h-[150px]'
                                    src={`${signature}`}
                                    alt="Assinatura"
                                />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}