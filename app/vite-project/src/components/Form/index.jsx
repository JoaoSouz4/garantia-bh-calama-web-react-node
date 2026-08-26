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

export function Form() {
  const { handleSubmit } = useFormContext();
  const { onSubmit } = useWarrantySubmit();

  return (
    <div className="flex flex-col min-w-[60%]">

      <form
        className=" flex flex-col flex-1 justify-between overflow-hidden"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex-1 bg-gray-700 border border-gray-500 rounded-2xl p-10 px-12 shadow-md">
          <ClientSection />
          <DeviceSection />
          <ReportsSection />

          <div className="flex justify-between gap-5">
            <div className="w-[60%]">
              <Services />
              <Payment />
            </div>
            <div className="flex-1 border-box">
              <Signature />
            </div>
          </div>
          <Modal />
        </div>

        <div className="w-full flex justify-end">
          <div className="w-75">
            <Submit />
          </div>
        </div>
      </form>
    </div>
  );
}
