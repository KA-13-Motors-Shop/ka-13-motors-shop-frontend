import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > label {
    font-size: 0.875rem;
    line-height: 1.06rem;
    color: ${(props) => props.theme.colors.grey.grey1};
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  > input {
    border: 2px solid;
    border-color: ${(props) => props.theme.colors.grey.grey5};
    border-radius: 4px;
    background-color: transparent;
    padding: 10px;
    width: 100%;

    &:focus {
      border-color: ${(props) => props.theme.colors.brand.brand1};
    }
  }
`;
