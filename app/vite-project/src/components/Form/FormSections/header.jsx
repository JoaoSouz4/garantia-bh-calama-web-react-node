import { MdEditDocument } from 'react-icons/md';

export function Header(){
    return (
        <div className = 'border-b pb-2 border-gray-200 '>
            <h1 className = 'text-2xl text-gray-800 font-bold flex items-center gap-2'>
                <MdEditDocument/>
                Formulário de garantia
            </h1>
            <p className = ' text-gray-400 rounded-md text-sm'>
                Saída do arquivo em: C:\Users\usuario\Desktop\Garantias
            </p>
        </div>
    )
}