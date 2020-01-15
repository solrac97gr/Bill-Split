import React,{FunctionComponent as FC} from 'react'
import {PayCard as PayCardStyled,TitleSkelet,Resumen} from './styles'

export const PayCardLoader:FC = () => {
    return (
        <PayCardStyled>
            <TitleSkelet>Title</TitleSkelet>
            <Resumen>amount</Resumen>
            <Resumen>participants</Resumen>
            <Resumen>participants</Resumen>
        </PayCardStyled>
    )
}
