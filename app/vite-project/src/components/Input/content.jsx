export function InputContent({children, error}){    
    return (
        <div className ={ error? 'w-full shadow-inner rounded-lg border border-red-400 py-1 px-4' : 'w-full bg-gray-800 shadow-inner rounded-lg py-1 px-4 border border-gray-500'}>
            {children}
        </div>
    )
}