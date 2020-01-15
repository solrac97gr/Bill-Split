import React, { FunctionComponent as FC } from "react";
/* Styles */
import { PayCard as PayCardStyled, Button, PayCardTitle } from "./styles";
/*Custom Hooks */
import {useFormatDate} from '../../hooks/useFormatDate'
/*Model */
import {PayCardProps} from '../../models/models'



export const PayCard: FC<PayCardProps> = ({
  id,
  title,
  created_at,
  amount,
  nparticipants
}: PayCardProps) => {
  const [date] = useFormatDate(created_at)
  return (
    <PayCardStyled>
      <PayCardTitle>{title}</PayCardTitle>
      <span>amount: ${amount}</span>
      <span>participants: {nparticipants}</span>
      <span>Date: {date}</span>
      <Button to={`/edit/${id}`}>Edit</Button>
    </PayCardStyled>
  );
};
