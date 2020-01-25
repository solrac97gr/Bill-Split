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
  nparticipants,
  content
}: PayCardProps) => {
  const [date_dmy] = useFormatDate(created_at);
  return (
    <Button to={`/edit/${id}/${title}/${content}/${nparticipants}/${amount}`}>
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
