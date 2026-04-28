import { forwardRef } from "react"

export const InputField = forwardRef((props, ref) => {
    return (
        <input
            ref = {ref}
            className = 'w-full focus:outline-none text-sm text-gray-200'
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                e.preventDefault();
                }
            }}
            {...props}
        />
    );

});