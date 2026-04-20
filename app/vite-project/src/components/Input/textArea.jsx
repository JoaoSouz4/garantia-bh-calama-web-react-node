import { forwardRef } from "react"

export const InputTextArea = forwardRef((props, ref) => {
    return (
        <textarea
            ref = {ref}
            className = 'w-full focus:outline-none text-sm text-blue-800'
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                e.preventDefault();
                }
            }}
            {...props}
        />
    );

});