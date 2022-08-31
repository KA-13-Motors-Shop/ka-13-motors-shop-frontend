import React, { useState } from "react";
import { BrandIcon } from "../brandIcon";
import { StyledHeader } from "./styles";
import menu from "../../others/bars.png";
import xmark from "../../others/xmark.png";
import { useNavigate } from "react-router-dom";
import { HeaderOptions } from "../headerOptions";

type Props = JSX.IntrinsicElements["header"];

export const Header: React.FC<Props> = ({ ...props }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      <StyledHeader {...(props as any)}>
        <BrandIcon onClick={() => navigate("/")} />
        <button
          className="menuIcon"
          onClick={() =>
            isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
          }
        >
          {isMenuOpen ? (
            <img src={xmark} alt="XmarkImage" />
          ) : (
            <img src={menu} alt="MenuIcon" />
          )}
        </button>
        <HeaderOptions className="menuOptionsDesktop" />
        {isMenuOpen ? <HeaderOptions className="menuOptionsMobile" /> : <></>}
      </StyledHeader>
    </>
  );
};
