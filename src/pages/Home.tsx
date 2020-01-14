import React,{FunctionComponent as FC} from 'react'
import {ListOfPayCard} from '../components/ListOfPayCard'
import { RouteComponentProps } from '@reach/router';



export const  Home:FC<RouteComponentProps> = () => {
    return (
        <ListOfPayCard/>
    )
} 