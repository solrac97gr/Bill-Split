import React, {
  useState,
  FormEvent,
  FunctionComponent as FC,
  useEffect
} from "react";

import { useInputValue } from "../../hooks/useInputValue";
import { useParticipantsConstruc } from "../../hooks/useParticipantsConstruc";
import { Member } from "../Member";
import { BallLoader } from "../BallLoader";

import {
  Form,
  Title,
  FormContainer,
  Input,
  Button,
  FloattingLogo,
  Error,
  TextArea,
  ButtonContainer,
  Separator
} from "./styles";
import { navigate } from "@reach/router";

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

  var author_id = JSON.parse(localStorage.getItem("id") || "{}");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSeending(true);
    }
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
    if (title.value.length >= 200 && !payData) {
      SetError("Max number of character in title 100");
      SetExistError(true);
      return false;
    }
    if (content.value.length >= 200) {
      SetError("Max number of character in description 200");
      SetExistError(true);
      return false;
    }
    if (nparticipants.value === "") {
      SetError("Add the number of participants");
      SetExistError(true);
      return false;
    }
    if (nparticipants.value > 20) {
      SetError("Max number of participants 20");
      SetExistError(true);
      return false;
    }
    if (amount.value === "") {
      SetError("Add a valid amount");
      SetExistError(true);
      return false;
    }
    if(amount.value>100000){
      SetError("Max amount 100 000");
      SetExistError(true);
      return false;
    }
    if(amount.value<=0){
      SetError("Min amount 1");
      SetExistError(true);
      return false;
    }
    return true;
  };

  useEffect(
    function() {
      if (payData) {
        title.setValue(payData.title);
        amount.setValue(payData.amount);
        content.setValue(payData.content);
        nparticipants.setValue(payData.nparticipants);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const handlePayActions = () => {
    if (validateForm()) {
      setSeending(true);
      if (payData) {
        const data = {
          title: title.value,
          content: content.value,
          amount: parseFloat(amount.value),
          nparticipants: parseInt(nparticipants.value),
          author_id: parseInt(author_id)
        };
        fetch(`https://hip-informatics-265419.appspot.com/pays/${payId}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
          }
        })
          .then((response) => response.json())
          .then((data) => {
            setSeending(false);
            navigate("/");
          });
      } else {
        setSeending(true);
        const data = {
          title: title.value,
          content: content.value,
          amount: parseFloat(amount.value),
          nparticipants: parseInt(nparticipants.value),
          author_id: parseInt(author_id)
        };

        fetch("https://hip-informatics-265419.appspot.com/pays", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            Authorization: `Bearer ${window.localStorage.getItem("token")}`
          }
        })
          .then((response) => response.json())
          .then((data) => {
            setSeending(false);
            navigate("/");
          });
      }
    }
  };
  const handlePayDelete = () => {
    if (validateForm()) {
      setSeending(true);
      fetch(`https://hip-informatics-265419.appspot.com/pays/${payId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${window.localStorage.getItem("token")}`
        }
      })
        .then((response) => response.text())
        .then((data) => {
          setSeending(false);
          navigate("/");
        });
    }
  };
  return (
    <FormContainer>
      <FloattingLogo></FloattingLogo>
      <Title>${amount.value}</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Title (Max 100)"
          value={title.value}
          onChange={title.onChange}
          type="text"
        />
        <TextArea
          maxlength="200"
          placeholder="Description (Max 200)"
          value={content.value}
          onChange={content.onChange}
        />
        <Input
          placeholder="Number of participants (Max 20)"
          value={nparticipants.value}
          onChange={nparticipants.onChange}
          type="number"
        />
        <Input
          placeholder="Amount in Dollars (Max $100000)"
          value={amount.value}
          onChange={amount.onChange}
          type="number"
        />
        {payData ? (
          <ButtonContainer>
            {!seending ? (
              <>
                <Button onClick={handlePayActions}>Edit Pay</Button>
                <Button warning onClick={handlePayDelete}>
                  Delete Pay
                </Button>
              </>
            ) : (
              <BallLoader />
            )}
          </ButtonContainer>
        ) : (
          <div>
            {!seending ? (
              <Button onClick={handlePayActions}>Add Pay</Button>
            ) : (
              <BallLoader />
            )}
          </div>
        )}

        {existError && <Error>{error}</Error>}
        <Separator>test</Separator>
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
