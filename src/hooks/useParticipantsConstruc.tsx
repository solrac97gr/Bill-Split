import { Participant } from "../models/models";

export const useParticipantsConstruc = (
  nparticipant: number,
  total: number
) => {
  const initialpart = total / nparticipant;

  const participants: Participant[] = [];
  for (var i = 0; i < nparticipant; i++) {
    participants.push({
      id: i + 1,
      participant: `Participant ${i + 1}`,
      partofpayment: initialpart
    });
  }

  /* function recalcParts(id: number, partofpayment: number) {
    const objIndex = participants.findIndex((obj) => obj.id === id);
    participants[objIndex].partofpayment = partofpayment;
    const rest = total - partofpayment;
    const newParts = rest / nparticipant - 1;
    participants[objIndex].partofpayment = newParts;
    return "done";
  } */

  return [participants];
};
