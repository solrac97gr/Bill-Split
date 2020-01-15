import React, { FunctionComponent as FC, useState, useEffect } from "react";
import { PayCard} from "../PayCard";
import { PayCardLoader } from "../PayCardLoader";
/*Model */
import {PayCardProps} from '../../models/models'

type ListOfPayCardProps = {
  data?: PayCardProps[];
};

const initialData = [
  {
    id: 2,
    title: "Title 2",
    content: "Hello world 2",
    nparticipants: 2,
    amount: 230,
    author: {
      id: 2,
      nickname: "Martin Luther",
      email: "luther@gmail.com",
      password: "$2a$10$7ktj7YMhK6vvXakC4BbFdecf7VaL7g90AQ0BAcx6MIj6OkAZ/NVCi",
      created_at: "2020-01-14T18:06:16.611835-05:00",
      updated_at: "2020-01-14T18:06:16.611835-05:00"
    },
    author_id: 2,
    created_at: "2020-01-14T18:06:16.615288-05:00",
    updated_at: "2020-01-14T18:06:16.615288-05:00"
  },
  
];

export const ListOfPayCard: FC<ListOfPayCardProps> = (
  props: ListOfPayCardProps
) => {
  const [pays, setPays] = useState(initialData);
  const [loading, setLoading] = useState(true);
  useEffect(function() {
    fetch("http://localhost:8080/pays")
      .then((r) => r.json())
      .then((data) => {
        setPays(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
   
  }, []);
  return (
    <>
      {loading
        ? [1, 2, 3, 4, 5, 6].map((loader) => <PayCardLoader key={loader} />)
        : pays.map((pay) => <PayCard key={pay.id} {...pay}></PayCard>)}
    </>
  );
};
