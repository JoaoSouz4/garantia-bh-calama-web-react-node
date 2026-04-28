export function ChangeQuantity({char, func, label}){
    return (
        <div className = 'cursor-pointer flex items-center gap-2'>
            <button
                type="button"
                onClick={func}
                className='transition-all duration-300 ease-in-out h-[1.5rem] px-3 py-2 flex items-center gap-2 cursor-pointer border border-transparent hover:border-gray-500 rounded-full text-xs text-gray-400 bg-gray-800'
            >
                {char}
                <label className = 'cursor-pointer'>{label}</label>
                
            </button>
        </div>
    )
}