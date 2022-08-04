import React from "react"
import {StyledButton} from "./styles"

type Props = JSX.IntrinsicElements['button']

export const Button:React.FC<Props> = ({...props}) => {
    return(
        <StyledButton {...props as any}>
            DefaultButton
        </StyledButton>
    )
}