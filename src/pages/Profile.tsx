import React, { FunctionComponent as FC, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { UserForm } from "../components/UserForm";
import {Button} from '../components/UserForm/styles'

export const Profile: FC<RouteComponentProps> = () => {
  const [isLogin, SetisLogin] = useState(false);
    const handleLogin = () => {
        SetisLogin(!isLogin)
    }
  return (
    <div>
      {" "}
      {!isLogin ? (
        <>
          <UserForm title={"Login"} handleLogin={handleLogin} /> <UserForm title={"Register"}  handleLogin={handleLogin}/>
        </>
      ) : (
        <Button onClick={()=>SetisLogin(!isLogin)}>Cerrar sesion</Button>
      )}{" "}
    </div>
  );
};
