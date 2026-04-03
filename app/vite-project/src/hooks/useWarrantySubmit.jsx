import { genPdf } from "../api/genPdf";
import { useStatus } from "../hooks/useStatus";
import { useModal } from "../hooks/useModal";
import { useFormContext } from "react-hook-form";


export function useWarrantySubmit() {
  const { setIsLoading } = useStatus();
  const { setIsOpen } = useModal();
  const { reset } = useFormContext();

  const onSubmit = async (data) => {
    console.log(data)
    setIsLoading(true);

    const payload = {
      ...data,
      isGuaranted: data.isGuaranted === "true"
    };

    try {
      await genPdf(payload);
      setIsOpen(true);
      reset();
    } catch (err) {
      alert(err.message);

    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit };
}
