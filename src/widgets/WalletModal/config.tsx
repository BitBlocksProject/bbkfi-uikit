import Metamask from "./icons/Metamask";
import WalletConnect from "./icons/WalletConnect";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Metamask",
    icon: Metamask,
    connectorId: "injected",
  },
  {
    title: "WalletConnect",
    icon: WalletConnect,
    connectorId: "walletconnect",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
