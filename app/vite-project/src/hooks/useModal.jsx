import { useContext } from "react";
import {ModalContext} from '../context/ModalContext';

export function useModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return { isOpen, setIsOpen };
}