export function InputLabel({label, icon: Icon}){
    return (
        <label className = 'mb-1 flex gap-2 items-center text-slate-700 text-sm' >
            {Icon && <Icon />}
            {label}
        </label>
    )
}