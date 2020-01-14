import React,{FunctionComponent as FC} from 'react'
import { RouteComponentProps } from '@reach/router';

interface EditProps extends RouteComponentProps <{
    id: number;
}>{}

export const  Edit:FC<EditProps> = ({id}:EditProps) => {
    return (
        <div>Edit {id}</div>
    )
} 