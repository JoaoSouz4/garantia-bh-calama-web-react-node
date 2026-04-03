import { useContext } from "react";
import { StatusContext } from "../context/StatusContext";

export function useStatus() {
  const { isLoading, setIsLoading } = useContext(StatusContext);

  return { isLoading, setIsLoading };
}