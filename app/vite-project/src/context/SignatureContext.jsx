/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const SignatureContext = createContext(null);

export default function SignatureProvider({children}){

    const [signature, setSignature ] = useState(null);

    function clear(){
        setSignature(null)
    }

    function put(signature){
        setSignature(signature)
    }

    return (
        <SignatureContext.Provider value = {{signature, put, clear}}>
            {children}
        </SignatureContext.Provider>
    )
}