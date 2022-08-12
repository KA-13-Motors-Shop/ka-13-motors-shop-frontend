import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 20px;
  font-family: "Inter", sans-serif;
  border-bottom: 1px solid ${(props) => props.theme.colors.grey.grey5};
  background-color: ${(props) => props.theme.colors.grey.grey10};

  .menuOptionsDesktop {
    display: none;
  }

  @media (min-width: 800px) {
    .menuIcon {
      display: none;
    }
    .menuOptionsDesktop {
      display: flex;
    }
  }
`;
