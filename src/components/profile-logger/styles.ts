import styled from "styled-components";

export const Container = styled.div<{ auction?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) =>
      props.auction ? props.theme.colors.white : props.theme.colors.grey.grey2};
  }
`;
