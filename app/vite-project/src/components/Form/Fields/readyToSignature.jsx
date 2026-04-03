import { useContext} from "react"
import { SignatureContext } from "../../../context/signatureContext"

export function ReadyToAssignature(){

    const {status, initProcess} = useContext(SignatureContext);

    function handleClick(e){
        e.preventDefault();
        initProcess();
    }
    return (
        <div className = 'my-8'>
            <div className = 'w-full'>
                <div className = 'flex justify-between'>
                    <h2 className = 'font-bold text-gray-900'>Assinatura do cliente:</h2>

                    <div className = 'flex flex-col gap-4'>
                        <label className = {`${status == "ok" ? "bg-green-200 text-green-700" : "bg-red-100 text-red-800 "}  rounded-md px-4 py-1 text-sm`}>
                            Status:   <span>{status}</span>
                        </label>
                    </div>
                </div>

                
                <div className = ''>
                    <button
                        disabled = {status === "aguardando assinatura" || status === "ok"}
                        onClick={handleClick} 
                        className = 'disabled:bg-blue-300 disabled>text-blue-700 cursor-pointer hover:bg-blue-800 mt-2 bg-blue-600 px-3 py-1 rounded-md text-white text-sm'>
                        Atualizar
                    </button>
                </div>
            </div>
        </div>
    )
}