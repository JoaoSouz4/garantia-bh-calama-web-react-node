import { useEffect, useContext } from "react";
import { SignatureContext } from "../context/SignatureContext";

export function useSignature(){
    const { signature, put } = useContext(SignatureContext);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5001?type=desktop');

        ws.onopen = () => {
            console.log('WS conectado');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if(data.type === 'SIGNATURE_UPDATED'){
                put(data.payload)
            }
        };

        return () => {
            ws.close();
        };
    }, []);

    return { signature };
}
