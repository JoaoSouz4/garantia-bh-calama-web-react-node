import { useForm } from "react-hook-form";
import { FormProvider } from "react-hook-form";
import { ModalProvider } from "./context/ModalContext";
import { StatusProvider } from "./context/StatusContext";
import { Layout } from "./components/Layout";
import SignatureProvider from "./context/SignatureContext";

function App() {

  const methods = useForm(
    {
      mode: "onSubmit",
      defaultValues: 
      {
        cpf: "",
        imei: "",
        payments: [{ mode: "", value: ""}],
        isGuaranted: true
      },
    }
  );

  return (
      <SignatureProvider>
        <StatusProvider>
          <ModalProvider>
            <FormProvider {...methods}>
              <div className = 'overflow-y-hidden bg-slate-100 w-[100dvw] h-[100dvh] flex justify-center items-center'>
                  <Layout />
              </div>
            </FormProvider>
          </ModalProvider>
        </StatusProvider>
      </SignatureProvider>
  )
}

export default App
