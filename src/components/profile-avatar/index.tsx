import React from "react";

import { Container } from "./styles";
import randomcolor from "randomcolor";

function makeAvatar(title: string) {}

const ProfileAvatar: React.FC<{
  size: number;
  title: string;
}> = ({ size, title }) => {
  //   const profile = useFormattedProfile();

  const color = randomcolor();

  const userInitials = React.useMemo(() => {
    const names = title?.split(" ");
    const { firstName, secondName } =
      title && names
        ? { firstName: names[0], secondName: names[1] }
        : { firstName: names[0], secondName: names[1] };
    //   : profile;
    const [firstInitial] = firstName.split("");
    const [secondInitial] = secondName.split("");

    return `${firstInitial}${secondInitial}`.toLocaleUpperCase();
  }, [title]);
  return (
    <Container size={size} color={color}>
      <span>{userInitials}</span>
    </Container>
  );
};

export default ProfileAvatar;
