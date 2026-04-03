import { IoMdArrowDropdown } from "react-icons/io";

export function DropDownButton({func}){

    function handleClick(e){
        e.preventDefault();
        func();
    }
    return (
        <button
            onClick={handleClick}
            className = 'cursor-pointer hover:bg-blue-800 hover:shadow-inner bg-blue-600 py-2 px-4 rounded-lg'>
            <IoMdArrowDropdown className="text-white"/>
        </button>
    )
}