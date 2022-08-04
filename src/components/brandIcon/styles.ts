import styled from "styled-components";

export const StyledBrandIcon = styled.div`
  
  font-family: 'Inter',sans-serif;
  font-weight:600;
  width:140px;
    /* height:27px; */
    /* border-radius:4px; */

  p{
      
      
      font-size:26px;
      display:flex;
      flex-direction:row;
      justify-content:center;
      align-items:flex-end;
    
      /* Linear Gradient Configuration */
      background-image: linear-gradient(
        to right, 
        ${props=>props.theme.colors.grey.grey0}, 
        ${props=>props.theme.colors.brand.brand1});
      
      background-size: 100%;
      background-repeat: repeat;
    
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent; 
      -moz-background-clip: text;
      -moz-text-fill-color: transparent;
  }

  span{
    font-size:16px;
    height:23px;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin-left:5px;
    color: ${props=>props.theme.colors.brand.brand1};
  }
    
`