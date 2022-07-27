import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  > label {
    font-size: 0.875rem;
    line-height: 1.06rem;
    color: #212529;
  }
`;

export const StyledInputContainer = styled.div`
  width: 100%;
  > input {
    border: 2px solid;
    border-color: #ced4da;
    border-radius: 4px;
    background-color: transparent;
    padding: 10px;
    width: 100%;

    &:focus {
      border-color: #5126ea;
    }
  }
`;
