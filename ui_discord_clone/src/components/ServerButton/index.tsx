import React from "react";
import { Button } from "./styles";
import Logo from "../../assets/Logo.svg";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
}) => {
  return (
    // Se o Botão estiver na Home Mostrar Logo se não não mostrar nada
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
    >
      {isHome && <img src={Logo} alt="Logo da Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
