import styled from "styled-components";

export const StyledButton = styled.button`

    border:1px solid ${props=>props.theme.colors.brand.brand1};
    color: ${props=>props.theme.colors.white};
    width:146px;
    height:48px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    border-radius:4px;
    font-size:16px;
    font-weight:600;
    font-family:Inter;
    background-color:${props=>props.theme.colors.brand.brand1};
    
`