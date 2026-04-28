export function InputRow({errorStatus}){
    return (
        <div className = {errorStatus ? `h-[1px] bg-red-500` :' h-[1px] bg-gray-500'}/>
    )
}