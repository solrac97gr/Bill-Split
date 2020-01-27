import React, { FunctionComponent as FC, useState, useEffect } from "react";
import { PayCard } from "../PayCard";
import { PayCardLoader } from "../PayCardLoader";
import {AddPayDiv} from "./styles"
/*Model */
import { Pays } from "../../models/models";

type ListOfPayCardProps = {
  data?: Pays[];
};
const initialData: Pays[] = [];
const ArrayX: number[] = [1, 2, 3, 4, 5];

export const ListOfPayCard: FC<ListOfPayCardProps> = (
  props: ListOfPayCardProps
) => {
  const [pays, setPays] = useState(initialData);
  const [loading, setLoading] = useState(true);
  const [nodata, setNodata] = useState(false);
  const user_id = window.localStorage.getItem("id");

  useEffect(
    function() {
      if (user_id) {
        fetch(
          `https://hip-informatics-265419.appspot.com/paysbyuser/${user_id}`
        )
          .then((r:Response) => r.json())
          .then((data: Pays[]) => {
            if (data.length === 0) {
              setNodata(true);
            } else {
              setPays(data);
            }
            setLoading(false);
          })
          .catch((e) => console.log(e));
      }
    },
    [user_id]
  );
  return (
    <>
      {nodata ? (
        <AddPayDiv>You don't have payments yet add your first payment.</AddPayDiv>
      ) : loading ? (
        ArrayX.map((loader: number) => <PayCardLoader key={loader} />)
      ) : (
        pays.map((pay: Pays) => <PayCard key={pay.id} {...pay}></PayCard>)
      )}
    </>
  );
};
