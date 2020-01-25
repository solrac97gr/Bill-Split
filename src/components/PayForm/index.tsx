import React, {
  useState,
  FormEvent,
  FunctionComponent as FC,
  useEffect
} from "react";

import { useInputValue } from "../../hooks/useInputValue";
import { useParticipantsConstruc } from "../../hooks/useParticipantsConstruc";
import { Member } from "../Member";

import {
  Form,
  Title,
  FormContainer,
  Input,
  Button,
  FloattingLogo,
  Error,
  TextArea
} from "./styles";

export const PayForm: FC<any> = ({ payId, payData }: any) => {
  const title = useInputValue("");
  const content = useInputValue("");
  const nparticipants = useInputValue("");
  const amount = useInputValue("");

  const [seending, setSeending] = useState(false);
  const [error, SetError] = useState("");
  const [existError, SetExistError] = useState(false);

  const [participants] = useParticipantsConstruc(
    nparticipants.value,
    amount.value
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validate = validateForm();
    setTimeout(() => {
      if (validate) {
        console.log("validado");
        setSeending(true);
      }
    }, 1000);
    setSeending(false);
    console.log(seending);
  };

  const validateForm = () => {
    if (title.value === "") {
      SetError("Add a title");
      SetExistError(true);
      return false;
    }
    if (content.value === "") {
      SetError("Add Content");
      SetExistError(true);
      return false;
    }
    if (nparticipants.value === "") {
      SetError("Add the number of participants");
      SetExistError(true);
      return false;
    }
    if (amount.value === "") {
      SetError("Add a valid amount");
      SetExistError(true);
      return false;
    }
    return true;
  };

  useEffect(
    function() {
      if(payData){
        title.setValue(payData.title);
        amount.setValue(payData.amount);
        content.setValue(payData.content);
        nparticipants.setValue(payData.nparticipants);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  return (
    <FormContainer>
      <FloattingLogo></FloattingLogo>
      <Title>${amount.value}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Title"
          value={title.value}
          onChange={title.onChange}
          type="text"
        />
        <TextArea
          placeholder="Description"
          value={content.value}
          onChange={content.onChange}
        />
        <Input
          placeholder="Number of participants"
          value={nparticipants.value}
          onChange={nparticipants.onChange}
          type="number"
        />
        <Input
          placeholder="Amount in Dollars"
          value={amount.value}
          onChange={amount.onChange}
          type="number"
        />
        <Button>{payData?'Edit Pay':'Add Pay'} </Button>
        {existError && <Error>{error}</Error>}
        {participants instanceof Function ? (
          <div>loading...</div>
        ) : (
          participants.map((participant) => {
            return <Member key={participant.id} {...participant} />;
          })
        )}
      </Form>
    </FormContainer>
  );
};
