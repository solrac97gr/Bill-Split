import React, { FunctionComponent as FC, useState  } from "react";
import { RouteComponentProps } from "@reach/router";
import { PayForm } from "../components/PayForm";

interface EditProps
  extends RouteComponentProps<{
    id: number;
    title:string;
    content:string;
    nparticipants:number
    amount:number;
  }> {}

export const Edit: FC<EditProps> = ({ id,title,content,nparticipants,amount }: EditProps) => {
  const [payData] = useState({
    id: id,
    title: title,
    content: content,
    nparticipants: nparticipants,
    amount: amount
  });
  return <PayForm payId={id} payData={payData}></PayForm>;
};
