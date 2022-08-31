import React from "react";
import DropDownUserMenu from "../dropDownUserMenu";
import ProfileAvatar from "../profile-avatar";

import { Container, StyledTrigger } from "./styles";

const ProfileLogger: React.FC<{ auction?: boolean; name: string }> = ({
  auction,
  name,
}) => {
  return (
    <Container>
      <StyledTrigger auction={auction}>
        <ProfileAvatar size={30} title={name ? name : " "} />
        <span>{name ? name : " "}</span>
      </StyledTrigger>
      <DropDownUserMenu />
    </Container>
  );
};

export default ProfileLogger;
