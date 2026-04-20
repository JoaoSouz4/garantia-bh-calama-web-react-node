export function List({children, isOpen}){
    if(isOpen == false) return null
    return (
        <ul className = 'ease-in duration-300 shadow-lg grid grid-cols-2  gap-[1px] absolute top-[-2rem] z-100 bg-slate-300 rounded-lg overflow-hidden'>
            {children}
        </ul>
    )
}