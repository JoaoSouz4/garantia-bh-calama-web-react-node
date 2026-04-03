export function InputLabel({label, icon: Icon}){
    return (
        <label className = 'mb-1 flex gap-2 items-center text-blue-600 text-sm' >
            {Icon && <Icon />}
            {label}
        </label>
    )
}