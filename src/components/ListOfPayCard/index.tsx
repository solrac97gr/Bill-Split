import React, { FunctionComponent as FC, useState, useEffect } from "react";
import { PayCard, PayCardProps } from "../PayCard";
import { PayCardLoader } from "../PayCardLoader";

type ListOfPayCardProps = {
  data?: PayCardProps[];
};

const fakeData = [
  {
    id: 1,
    title: "Food",
    amount: 220,
    participants: 5
  },
  {
    id: 2,
    title: "Pet",
    amount: 200,
    participants: 5
  },
  {
    id: 3,
    title: "Transport",
    amount: 500,
    participants: 5
  }
];
const initialData = [
  {
    id: 0,
    title: "Test",
    amount: 5,
    participants: 3
  }
];

export const ListOfPayCard: FC<ListOfPayCardProps> = (
  props: ListOfPayCardProps
) => {
  const [pays, setPays] = useState(initialData);
  const [loading, setLoading] = useState(true);
  useEffect(
    function() {
      setPays(fakeData);
      setLoading(false);
    },
    [loading]
  );
  return (
    <>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((loader) => <PayCardLoader key={loader} />)
        : pays.map((pay) => <PayCard key={pay.id} {...pay}></PayCard>)}
    </>
  );
};
