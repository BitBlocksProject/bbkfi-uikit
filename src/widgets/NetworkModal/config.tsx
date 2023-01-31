import BSC from "./icons/BSC";
import MATIC from "./icons/MATIC";
import ETH from "./icons/ETH";
import { Config } from "./types";

const connectors: Config[] = [
  {
    title: "Binance Smart Chain",
    icon: BSC,
    link: "https://bitblocks.finance",
  },
  {
    title: "Polygon",
    icon: MATIC,
    link: "https://polygon.bitblocks.finance",
  },
  {
    title: "Ethereum (SOON)",
    icon: ETH,
    link: "https://bitblocks.finance",
  },
];

export default connectors;
export const localStorageKey = "accountStatus";
