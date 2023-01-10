import React from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import { Config } from "./types";

interface Props {
  walletConfig: Config;
  onDismiss: () => void;
  mb: string;
}

const WalletCard: React.FC<Props> = ({ walletConfig, onDismiss, mb }) => {
  const { title, icon: Icon, link } = walletConfig;
  const handleClick = () => {
    if (link) {
      window.location.href = link;
    }
    onDismiss();
  };
  return (
    <Button
      fullWidth
      variant="tertiary"
      onClick={handleClick}
      style={{ justifyContent: "space-between" }}
      mb={mb}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Text bold color="primary" mr="16px">
        {title}
      </Text>
      <Icon width="32px" />
    </Button>
  );
};

export default WalletCard;
