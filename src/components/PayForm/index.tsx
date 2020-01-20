import React, { useState, FormEvent, FunctionComponent as FC } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import {
  Form,
  Title,
  FormContainer,
  Input,
  Button,
  FloattingLogo,
  Error
} from "./styles";

export const PayForm: FC = () => {
  const title = useInputValue("");
  const content = useInputValue("");
  const nparticipants = useInputValue("");
  const amount = useInputValue("");

  const [seending, setSeending] = useState(false);
  const [error, SetError] = useState("");
  const [existError, SetExistError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const validate =validateForm()
    setTimeout(() => {
      if (validate) {
        console.log("validado")
        setSeending(true);
      }
    }, 1000);
    setSeending(false)
    console.log(seending)
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
        <Input
          placeholder="Description"
          value={content.value}
          onChange={content.onChange}
          type="text"
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
        <Button>Add Pay </Button>
        {existError && <Error>{error}</Error>}
      </Form>
    </FormContainer>
  );
};
