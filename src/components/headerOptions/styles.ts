import styled from "styled-components";

export const StyledMenuOptions = styled.div`
  color: ${(props) => props.theme.colors.grey.grey2};
  font-weight: 600;
  width: 374px;
  position: absolute;
  top: 80px;
  right: 0;

  padding: 0px 30px 0px 20px;
  font-family: "Inter", sans-serif;
  background-color: ${(props) => props.theme.colors.grey.grey10};

  /* background-color:blue; */
  .categories {
    height: 236px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .user {
    border-top: 1px solid ${(props) => props.theme.colors.grey.grey4};
    height: 184px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    button {
      width: 310px;
      height: 40px;
      border: 1px solid ${(props) => props.theme.colors.grey.grey4};
      border-radius: 4px;
    }
  }
  @media (min-width: 800px) {
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    width: 470px;
    height: 79px;

    .user {
      display: flex;
      flex-direction: row;
      height: 79px;
      width: 200px;

      align-items: center;
      justify-content: space-between;
      border: none;
      button {
        width: 100px;
      }
    }
    .categories {
      display: flex;
      align-items: center;
      width: 200px;
      flex-direction: row;
      justify-content: space-evenly;
      height: 79px;
    }
  }
`;

export const StyledDivider = styled.div`
  width: 2px;
  height: 79px;
  background-color: ${(props) => props.theme.colors.grey.grey6};

  display: none;

  @media screen and (min-width: 900px) {
    display: flex;
  }
`;
