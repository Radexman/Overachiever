import { ReactNode } from "react";

export type ModalProps = {
  isOpen: boolean;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: ReactNode;
};
