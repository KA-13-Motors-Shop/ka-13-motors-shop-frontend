import styled from "styled-components";

export const Container = styled.div<{ auction?: boolean; imgURL: string }>`
  background-image: url(${(props) => props.auction && props.imgURL});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px 0;
  width: 90%;
  min-width: 300px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardWrapper = styled.div<{
  auction?: boolean;
}>`
  background: ${(props) =>
    props.auction
      ? "linear-gradient(180deg, rgba(0, 0, 0, 0.29) 0%, #000000 100%)"
      : "transparent"};
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 33px 31px 33px 22px;
`;

export const StyledImgDiv = styled.div<{ auction?: boolean; imgURL: string }>`
  background-color: ${(props) => props.theme.colors.grey.grey7};
  width: 90%;
  height: 152px;
  background-image: url(${(props) => props.imgURL});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 4px 0;
`;

export const StyledClockCount = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  gap: 14px;
  border-radius: 32px;
  padding: 8px 16px 8px 8px;
  width: 123px;
  > svg {
    color: ${(props) => props.theme.colors.brand.brand1};
  }
  > span {
    font-family: "Lexend", sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const StyledDescription = styled.div<{
  auction?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h3 {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${(props) =>
      props.auction
        ? props.theme.colors.grey.grey10
        : props.theme.colors.grey.grey1};
  }

  > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: ${(props) =>
      props.auction
        ? props.theme.colors.grey.grey5
        : props.theme.colors.grey.grey2};
  }
`;

export const StyledTagsContainer = styled.div<{
  auction?: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (props.auction ? "column" : "row")};
  justify-content: ${(props) => !props.auction && "space-between"};
  align-items: ${(props) => !props.auction && "center"};
  gap: 24px;
`;

export const StyledTags = styled.div`
  display: flex;
  gap: 12px;

  > span {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    background: ${(props) => props.theme.colors.brand.brand4};
    border-radius: 4px;
    color: ${(props) => props.theme.colors.brand.brand1};
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }
`;

export const StyledPrice = styled.span<{
  auction?: boolean;
}>`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) =>
    props.auction ? props.theme.colors.white : props.theme.colors.grey.grey1};
`;

export const StyledCardAction = styled.button<{
  auction?: boolean;
}>`
  width: 100%;
  display: ${(props) => (props.auction ? "flex" : "none")};
  padding: 30px 22px;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.colors.brand.brand1};
  border-radius: 0px 0px 4px 4px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.colors.white};
`;
