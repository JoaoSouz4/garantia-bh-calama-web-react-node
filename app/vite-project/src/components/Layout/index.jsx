import { Form } from "../Form";

export function Layout(){
    return  (
        <div className = 'flex justify-between w-[100dvw]'>
            <div className = "bg-blue-500 p-5" />

            <div className = 'grow flex justify-center'>
                <div className = 'w-[75%]'>
                    <Form />
                </div>
            </div>
        </div>
    )
}