import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";

export function useSignature(){
    const [status, setStatus] = useState('Aguardando assinatura...');
    const [signature, setSignature] = useState();
    const { formState } = useFormContext();
    const { isSubmitSuccessful } = formState;

    useEffect(() => {
        setSignature("");
    }, [isSubmitSuccessful]);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost:5001?type=desktop');

        ws.onopen = () => {
            console.log('WS conectado');
        };

        ws.onclose = () => {
            setStatus('Aguardando assinatura');
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);

            if (data.type === 'SIGNATURE_OPENED') {
                setStatus('Dispositivo conectado');
            }

            if (data.type === 'SIGNATURE_CLOSED') {
                setStatus('Dispositivo desconectado');
            }

            if(data.type === 'SIGNATURE_UPDATED'){
                setTimeout(() => {
                    setStatus('Assinatura pronta');
                    setSignature(data.payload)
                }, 500)
            }
        };
    }, []);

    return { status, signature };
}