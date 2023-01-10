import React from "react";
import { Modal } from "../Modal";
import WalletCard from "./WalletCard";
import config from "./config";

interface Props {
  onDismiss?: () => void;
}

const ConnectModal: React.FC<Props> = ({ onDismiss = () => null }) => (
  <Modal title="Change network" onDismiss={onDismiss}>
    {config.map((walletConfig, index) => (
      <WalletCard
        key={walletConfig.title}
        walletConfig={walletConfig}
        onDismiss={onDismiss}
        mb={index < config.length - 1 ? "8px" : "0"}
      />
    ))}
  </Modal>
);

export default ConnectModal;
