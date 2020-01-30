import React, { FunctionComponent as FC, useState } from "react";
import { Form, FormTitle, FormSubtitle, Input, Button } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";

type UserFormProps = {
  title: string;
  handleRegister: Function;
};

export const UserRegister: FC<UserFormProps> = ({
  title,
  handleRegister
}: UserFormProps) => {
  const Nickname = useInputValue("");
  const Email = useInputValue("");
  const Password = useInputValue("");
  const [error, setError] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    isValid();
    handleRegister(Nickname.value, Email.value, Password.value, error);
  };

  function isValid() {
    console.log("validando");
    if (Email.value === "") {
      setError("Email is requiered");
      return false;
    }
    if (Password.value === "") {
      setError("Password is requiered");
      return false;
    }
    if (Nickname.value === "") {
      setError("Nickname is requiered");
      return false;
    }
    var mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{7,})"
    );
    if (mediumRegex.test(Password.value)) {
      setError(
        "Password must contain at least 1 lowercase,1 Uppercase,number and 7 characters"
      );
      return false;
    }
    return true;
  }

  return (
    <Form>
      <FormTitle>{title}</FormTitle>
      <FormSubtitle>Nickname</FormSubtitle>
      <Input
        onChange={Nickname.onChange}
        value={Nickname.value}
        type="text"
        placeholder="freed89"
        required
      />
      <FormSubtitle>Email</FormSubtitle>
      <Input
        onChange={Email.onChange}
        value={Email.value}
        type="text"
        placeholder="example@gmail.com"
        required
      />
      <FormSubtitle>Password</FormSubtitle>
      <Input
        onChange={Password.onChange}
        value={Password.value}
        type="password"
        placeholder="minimun 7 characters include numnbers"
        required
      />
      <Button onClick={handleSubmit}>{title}</Button>
    </Form>
  );
};
