import React from "react";

import { Container, StyledInputContainer } from "./styles";

const Input: React.FC<{
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
}> = ({ label, name, placeholder, type = "text", ...rest }) => {
  return (
    <Container>
      <label htmlFor="inputForm">{label}</label>
      <StyledInputContainer>
        <input
          type={type}
          name={name}
          id="inputForm"
          placeholder={placeholder}
          {...rest}
        />
      </StyledInputContainer>
    </Container>
  );
};

export default Input;
