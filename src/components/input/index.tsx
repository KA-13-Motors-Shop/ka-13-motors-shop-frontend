import { useField } from "@unform/core";
import React from "react";

import { Container, StyledInputContainer } from "./styles";

const Input: React.FC<{
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  value?: string;
  id?: string;
}> = ({ label, name, placeholder, type = "text", value, id, ...rest }) => {
  const inputRef = React.useRef({} as any);

  const { fieldName, defaultValue, registerField } = useField(name);

  React.useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value;
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      },
      clearValue: (ref) => {
        ref.current.value = "";
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container id={id}>
      <label htmlFor="inputForm">{label}</label>
      <StyledInputContainer>
        <input
          type={type}
          name={name}
          ref={inputRef}
          value={value}
          defaultValue=""
          placeholder={placeholder}
          {...(rest as any)}
        />
      </StyledInputContainer>
    </Container>
  );
};

export default Input;
