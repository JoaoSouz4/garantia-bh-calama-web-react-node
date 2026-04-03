
import { ThreeDot } from "react-loading-indicators";
import { FaFilePdf } from "react-icons/fa6";
import { useStatus } from "../../hooks/useStatus";

export function Submit(){

    const { isLoading } = useStatus();

    return (
        <button
            type = 'submit'
            className = ' flex items-center justify-center hover:bg-blue-800 cursor-pointer bg-blue-600 font-bold text-blue-50 w-full rounded-lg shadow-md mt-2 h-[3rem]'>
            {
                !isLoading?
                    <div className = 'flex gap-2 items-center'> <FaFilePdf /> Gerar PDF</div>
                :
                <ThreeDot color="white" size="small" text="" textColor="" />
            }
        </button>
    )
}