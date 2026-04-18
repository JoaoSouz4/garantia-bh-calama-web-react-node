import { Submit } from "./submit";

import { useFormContext } from "react-hook-form";
import { Services } from "./Fields/Services";
import { Payment } from "./Fields/Payment";

import { Modal } from "../Modal";
import { ClientSection } from "./FormSections/clientSection";
import { DeviceSection } from "./FormSections/deviceSeaction";
import { ReportsSection } from "./FormSections/reportSection";
import { Header } from "./FormSections/header";
import { useWarrantySubmit } from "../../hooks/useWarrantySubmit";
import { Signature } from "./FormSections/signature";

export function Form(){

    const { handleSubmit} = useFormContext();
    const { onSubmit } = useWarrantySubmit();

    return (

        <div className = 'flex flex-col h-screen py-12'>
            <Header />

            <form
                className = ' flex flex-col flex-1 justify-between overflow-hidden'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className =  'flex-1 overflow-y-scroll bg-white p-6 shadow-md'>

                    <ClientSection />
                    <DeviceSection />
                    <ReportsSection />

                    <div className = 'flex justify-between gap-5 items-start'>
                        <div className = 'w-[60%]'>
                            <Services />
                            <Payment />
                        </div>
                        <div className = 'grow'>
                            <Signature />
                        </div>
                    </div>
                    <Modal />
                </div>

                <Submit />
            </form>
        </div>
    );
}