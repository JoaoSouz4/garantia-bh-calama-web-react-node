export function InputError({message}){
    if(!message) return <div></div>
    return (
        <label className = {'text-xs text-red-400'}>
            {message}
        </label>
    )
}