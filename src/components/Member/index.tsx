import React, { FunctionComponent as FC } from "react";
import { CardMember } from "./styles";

type Participant = {
  id: number;
  participant: string;
  partofpayment: number;
};

export const Member: FC<Participant> = ({
  id,
  participant,
  partofpayment
}: Participant) => {
  return (
    <CardMember>
      <span>Participant: {participant}</span>
      <span>amount: {partofpayment}</span>
    </CardMember>
  );
};
