import styled from "styled-components";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Container = styled(DropdownMenu.Root)``;

export const StyledTrigger = styled(DropdownMenu.Trigger)<{
  auction?: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  > span {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: ${(props) =>
      props.auction ? props.theme.colors.white : props.theme.colors.grey.grey2};
  }
`;
