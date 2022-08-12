import React from "react";
import ProfileAvatar from "../profile-avatar";

import { Container } from "./styles";

const ProfileLogger: React.FC<{ auction?: boolean }> = ({ auction }) => {
  return (
    <Container auction={auction}>
      <ProfileAvatar size={30} title="Luiz Felipe" />
      <span>Luiz Felipe</span>
    </Container>
  );
};

export default ProfileLogger;
