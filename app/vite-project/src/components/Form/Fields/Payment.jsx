import { useFormContext, useFieldArray } from "react-hook-form";
import { DropDown } from "../../DropDown";
import { ChangeQuantity } from "../../changeQuantity";
import { useEffect } from "react";


export function Payment(){
    const maxCount = 3;
    const minCount = 1;

    const { control  } = useFormContext();
    const { fields, append, remove } = useFieldArray({control, name: "payments"})
    

    function AddPayment() {
        if (fields.length >= maxCount) return
        append({ mode: "", value: "" });
    }

    function RemovePayment(){
        if (fields.length <= minCount) return
        remove(fields.length - 1) // remove o último
    }
    return (
        <div className = 'mt-2 border border-blue-500 rounded-md overflow-hidden'>

            <div className = 'flex items-center justify-between p-2 bg-blue-600 text-white'>
                <div className = 'font-bold'>Informações de pagamento:</div>

                <div className = 'flex gap-2 items-center'>
                    <ChangeQuantity label = "incluir" char={'+'} func={AddPayment}/>
                    <ChangeQuantity label = {"remover"} char={'-'} func={RemovePayment}/>
                </div>
            </div>
            
            <div className = 'p-2'>
                {
                    fields.map((field, index) => {
                        return (
                            <DropDown
                                indexx = {index} 
                                key = {index + 1}
                                label={`Método: ${index + 1}`}
                                options ={['Pix', 'Dinheiro', 'Débito', 'Crédito']}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}


