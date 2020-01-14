import React, { FunctionComponent as FC } from 'react';
/* Styles */
import {PayCard as PayCardStyled,Button,PayCardTitle} from './styles'

export type PayCardProps = {
  id:number;
  title: string;
  amount: number;
  participants:number;
};


export const PayCard: FC<PayCardProps> = ({ id,title, amount,participants }: PayCardProps) => {
  return (
    <PayCardStyled>
      <PayCardTitle>{title}</PayCardTitle>
      <span>amount: ${amount}</span>
      <span>participants: {participants}</span>
      <Button to={`/edit/${id}`} >Edit</Button>
    </PayCardStyled>
  );
};
