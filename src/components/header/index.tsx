import React from "react"
import { BrandIcon } from "../brandIcon"
import {StyledHeader, StyledMenuOptions} from "./styles"
import menu from "../../others/bars.png"
import { Link } from "react-router-dom"

type Props = JSX.IntrinsicElements['header']

export const Header:React.FC<Props> = ({...props}) => {
    return(
        <>
            <StyledHeader {...props as any}>
                <BrandIcon/>
                <img src={menu} alt="MenuIcon"/>
            </StyledHeader>
            <StyledMenuOptions>
                <div className="categories">
                    <Link to={""}>Carros</Link>
                    <Link to={""}>Motos</Link>
                    <Link to={""}>Leilão</Link>
                </div>
                <div className="user">
                    <Link to={""}>Fazer Login</Link>
                    <button>Cadastrar</button>
                </div>
            </StyledMenuOptions>
        </>
        

    )
}