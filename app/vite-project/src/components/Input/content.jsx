export function InputContent({children, error}){    
    return (
        <div className ={ error? 'w-full bg-red-50 shadow-inner rounded-lg py-2 px-4 border border-red-500' : 'w-full bg-blue-50/10 shadow-inner rounded-lg py-1 px-4 border border-blue-500'}>
            {children}
        </div>
    )
}