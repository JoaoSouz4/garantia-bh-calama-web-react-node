import { useSignature } from "../../../hooks/useSignature";

export function Signature(){

    const {signature} = useSignature();
  
    return (
        <div className = 'flex flex-col border border-gray-500 rounded-md overflow-hidden h-[320px]'>
            <div className = 'flex items-center justify-between p-2 text-white'>
                <div className = 'font-bold'>Assinatura | Pré-visualização</div>
            </div>

            <div className = 'grow flex flex-col text-xs p-2 justify-start gap-4'>

                <div className = 'h-full grow flex flex-col'>
                    <h2 className = 'bg-gray-700 translate-y-[0.5rem] w-fit px-2 text-zinc-400'>Assinatura do cliente: </h2>
                    <div className = 'border grow rounded-lg border-zinc-300'>
                        {
                        signature && 
                            <div className = 'flex justify-center items-center'>
                                <img
                                    className = 'h-[150px] w-[300px] flex justify-center items-center'
                                    src={signature || ''}
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