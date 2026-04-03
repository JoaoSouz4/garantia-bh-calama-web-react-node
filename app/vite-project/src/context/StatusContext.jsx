import { createContext, useState } from "react";

export const StatusContext = createContext();

export function StatusProvider({children}){
    const [isLoading, setIsLoading] = useState(false);

    return (
        <StatusContext.Provider value = {{isLoading, setIsLoading}}>
            {children}
        </StatusContext.Provider>
    )
}