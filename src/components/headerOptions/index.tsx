import React from "react";
import { useNavigate } from "react-router-dom";
import { StyledMenuOptions, StyledDivider } from "./styles";

type Props = JSX.IntrinsicElements["header"];

export const HeaderOptions: React.FC<Props> = ({ ...props }) => {
  const navigate = useNavigate();
  return (
    <StyledMenuOptions {...(props as any)}>
      <div className="categories">
        <span>Carros</span>
        <span>Motos</span>
        <span>Leilão</span>
      </div>
      <StyledDivider />
      <div className="user">
        <span onClick={() => navigate("/login")}>Fazer Login</span>
        <button onClick={() => navigate("/register")}>Cadastrar</button>
      </div>
    </StyledMenuOptions>
  );
};
