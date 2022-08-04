import React from "react"
import {StyledHeader} from "./styles"

type Props = JSX.IntrinsicElements['header']

export const Header:React.FC<Props> = ({...props}) => {
    return(
        <StyledHeader {...props as any}>
            
        </StyledHeader>
    )
}