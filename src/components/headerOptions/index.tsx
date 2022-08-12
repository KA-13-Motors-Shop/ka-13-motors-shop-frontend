import React, { useState } from "react";
import { StyledMenuOptions, StyledDivider } from "./styles";
import { Link } from "react-router-dom";

type Props = JSX.IntrinsicElements["header"];

export const HeaderOptions: React.FC<Props> = ({ ...props }) => {
  return (
    <StyledMenuOptions {...(props as any)}>
      <div className="categories">
        <Link to={""}>Carros</Link>
        <Link to={""}>Motos</Link>
        <Link to={""}>Leilão</Link>
      </div>
      <StyledDivider />
      <div className="user">
        <Link to={""}>Fazer Login</Link>
        <button>Cadastrar</button>
      </div>
    </StyledMenuOptions>
  );
};
