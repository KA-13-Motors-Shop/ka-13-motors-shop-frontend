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
    border-bottom:1px solid ${props=>props.theme.colors.grey.grey5};
    background-color:${props=>props.theme.colors.grey.grey10};
    
`
export const StyledMenuOptions = styled.div`

    color:${props=>props.theme.colors.grey.grey2};
    font-weight:600;
    width:374px;
    position:absolute;
    right:0;

    padding:0px 30px 0px 20px;
    font-family:"Inter",sans-serif;
    background-color:${props=>props.theme.colors.grey.grey10};
    .categories{
        height:236px;
        display:flex;
        flex-direction:column   ;
        justify-content:space-evenly;
    }
    .user{
        border-top:1px solid ${props=>props.theme.colors.grey.grey4};
        height:184px;
        display:flex;
        flex-direction:column   ;
        justify-content:space-evenly;
        
    button{
        width:310px;
        height:40px;
        border:1px solid ${props=>props.theme.colors.grey.grey4};
        border-radius:4px;
    }
    }
`