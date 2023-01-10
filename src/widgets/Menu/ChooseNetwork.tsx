import React from "react";
import Button from "../../components/Button/Button";
import { useNetworkModal } from "../NetworkModal";

const ChooseNetwork: React.FC = () => {
  const { openModal } = useNetworkModal();
  return (
    <div>
      <Button size="sm" onClick={() => openModal()}>
        Change network
      </Button>
    </div>
  );
};

export default ChooseNetwork;
