import React, { FunctionComponent as FC,useState } from "react";
import { Form, FormTitle, FormSubtitle, Input, Button } from "./styles";
import { useInputValue } from "../../hooks/useInputValue";

type UserFormProps = {
  title: string;
  handleLogin: Function;
};

export const UserForm: FC<UserFormProps> = ({title,handleLogin}: UserFormProps) => {
  const Email = useInputValue("");
  const Password = useInputValue("");
  const [error, setError] = useState("");

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const valid = isValid()
    if (valid) {
      handleLogin(Email.value,Password.value);
    } else {
      console.log(error);
    }
  };

  function isValid() {
    if (Email.value === "") {
      setError("Email is requiered");
      return false;
    }
    if (Password.value === "") {
      setError("Password is requiered");
      return false;
    }
    return true;
  }

  return (
    <Form>
      <FormTitle>{title}</FormTitle>
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
