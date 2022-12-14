import styled from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  width: 20px;
  height: 1.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  transform-origin: 1px;
  cursor: pointer;

  div {
    width: 20px;
    position: ${({ open }) => open && "fixed"};
    height: 0.22rem;
    background-color: ${(props) => props.theme.colors.grey.grey0};
    border-radius: 10px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open && "rotate(45deg)"};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open && "translateX(100%)"};
      opacity: ${({ open }) => open && "0"};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open && "rotate(-45deg)"};
    }
  }

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
