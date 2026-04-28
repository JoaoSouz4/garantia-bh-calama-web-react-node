import { useModal } from "../../hooks/useModal"
import { FaCircleCheck } from "react-icons/fa6";
import { MdCloseFullscreen } from "react-icons/md";

export function Modal({message, isSuceess}){
    
    const { setIsOpen, isOpen } = useModal();

    function closeModal() {
        setIsOpen(false)
    }

    return (
        <div className = {isOpen ? ' flex items-center justify-center w-full h-full fixed right-0 top-0 backdrop-blur' : 'hidden'}>
            <div className = 'border border-gray-400 flex items-center justify-center bg-white shadow-lg p-4 rounded-4xl w-[40%] h-[50%]'>
                <div className = 'flex flex-col gap-4'>
                    <div className = 'flex flex-col items-center '>
                        <FaCircleCheck  className = 'text-7xl text-green-400 mb-4 '/>
                        <h2 className = 'text-xl'>PDF gerado com sucesso!</h2>
                        <h3 className ='text-ms text-teal-600'>Verifique a area de trabalho</h3>
                    </div>
                    <div
                        onClick={closeModal}
                        className = 'flex justify-center items-center gap-2  shadow-md cursor-pointer hover:bg-teal-800 bg-teal-600 rounded-xl px-8 py-4 text-white font-bold '
                    >
                        <MdCloseFullscreen /> Fechar
                    </div>
                </div>
            </div>
        </div>
    )
}