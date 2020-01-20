import React,{useState,FormEvent} from "react";
import { useInputValue } from "../../hooks/useInputValue";
import {Form} from './styles'

export const PayForm = () => {
  const title = useInputValue("");
  const content = useInputValue("");
  const nparticipants = useInputValue(0);
  const amount = useInputValue(0);

  const [seending, setSeending] = useState(false)


  const handleSubmit = async (e:FormEvent<HTMLFormElement>): Promise<void> =>{
      e.preventDefault()
      setTimeout(() => {
        setSeending(true)
        console.log(seending)
      }, 2000)
      
  };
  return (
    <Form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title.value}
        onChange={title.onChange}
        type="text"
      />
      <input
        placeholder="Description"
        value={content.value}
        onChange={content.onChange}
        type="text"
      />
      <input
        placeholder="Number of participants"
        value={nparticipants.value}
        onChange={nparticipants.onChange}
        type="number"
      />
      <input
        placeholder="Amount in Dollars"
        value={amount.value}
        onChange={amount.onChange}
        type="number"
      />
      <button>Enviar</button>
    </Form>
  );
};
