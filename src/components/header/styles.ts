import styled from "styled-components";

export const StyledHeader = styled.header`

    width:100vw;
    height:80px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0px 30px 0px 20px;
    font-family:"Inter",sans-serif;
    background-color:${props=>props.theme.colors.grey.grey10};
    
`
export const StyledMenuOptions = styled.div`

    
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    padding:0px 30px 0px 20px;
    font-family:"Inter",sans-serif;
    background-color:${props=>props.theme.colors.grey.grey10};
    
`