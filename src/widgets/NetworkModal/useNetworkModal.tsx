import React from "react";
import { useModal } from "../Modal";
import ConnectModal from "./ConnectModal";

export function useNetworkModal() {
  const [openModal, closeModal] = useModal(<ConnectModal />);
  return { openModal, closeModal };
}


export default useNetworkModal;
