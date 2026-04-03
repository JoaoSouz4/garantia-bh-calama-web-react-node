import { forwardRef } from "react"

export const InputField = forwardRef((props, ref) => {
    return (
        <input
            ref = {ref}
            className = 'w-full focus:outline-none text-sm'
            {...props}
        />
    );

});