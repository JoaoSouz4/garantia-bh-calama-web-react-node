export function ChangeQuantity({char, func, label}){
    return (
        <div className = 'flex items-center gap-2'>
            <button
                onClick={func}
                className = 'h-[1.5rem] px-3 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-300 rounded-full  text-xs text-blue-600 bg-white'
            >
                {char}
                <label className = ''>{label}</label>
                
            </button>
        </div>
    )
}