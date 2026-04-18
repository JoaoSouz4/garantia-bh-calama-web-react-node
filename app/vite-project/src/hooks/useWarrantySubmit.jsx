import { genPdf } from "../api/genPdf";
import { useStatus } from "../hooks/useStatus";
import { useModal } from "../hooks/useModal";
import { useFormContext } from "react-hook-form";
import { useContext } from "react";
import { SignatureContext } from "../context/SignatureContext";

export function useWarrantySubmit() {
  const { setIsLoading } = useStatus();
  const { setIsOpen } = useModal();
  const { reset } = useFormContext();
  const { clear } = useContext(SignatureContext);

  const onSubmit = async (data) => {
    setIsLoading(true);

    const payload = {
      ...data,
      isGuaranted: data.isGuaranted === "true"
    };

    try {
      await genPdf(payload);
      setIsOpen(true);
      reset();
      clear();
    } catch (err) {
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { onSubmit };
}
