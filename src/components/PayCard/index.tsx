import React, { FunctionComponent as FC } from "react";
/* Styles */
import {
  PayCard as PayCardStyled,
  Button,
  PayCardTitle,
  Amount,
  AmountCant,
  Date,
  Content
} from "./styles";
/*Custom Hooks */
import { useFormatDate } from "../../hooks/useFormatDate";
/*Model */
import { PayCardProps } from "../../models/models";

export const PayCard: FC<PayCardProps> = ({
  id,
  title,
  created_at,
  amount,
  content
}: PayCardProps) => {
  const [date_dmy] = useFormatDate(created_at);
  return (
    <Button to={`/edit/${id}`}>
      <PayCardStyled>
        <PayCardTitle>{title}</PayCardTitle>
        <Content>{content}</Content>
        <Date>{date_dmy}</Date>
      </PayCardStyled>
      <Amount>
        <AmountCant>${amount}</AmountCant>
      </Amount>
    </Button>
  );
};
