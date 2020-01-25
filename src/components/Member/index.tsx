import React, { FunctionComponent as FC } from "react";
import { CardMember,ParticipantName,Amount } from "./styles";
import {Participant} from '../../models/models'


export const Member: FC<Participant> = ({
  id,
  participant,
  partofpayment
}: Participant) => {
  return (
    <CardMember>
      <ParticipantName>{participant}</ParticipantName>
      <Amount>${Math.round(partofpayment * 100) / 100}</Amount>
    </CardMember>
  );
};
