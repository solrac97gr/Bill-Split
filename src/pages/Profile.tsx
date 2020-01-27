import React, { FunctionComponent as FC, useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { UserForm } from "../components/UserForm";
import { UserRegister } from "../components/UserRegister";
import { Button,LogoutContainer,LogoutText } from "../components/UserForm/styles";

export const Profile: FC<RouteComponentProps> = () => {
  const [isLogin, SetisLogin] = useState(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  });
  const handleLogOut = () => {
    SetisLogin(false);
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("id");
    navigate("/", { replace: true });
    window.location.reload();
  };

  const handleLogin = (email: string, password: string) => {
    SetisLogin(!isLogin);
    const data = {
      email: email,
      password: password
    };
    fetch("https://hip-informatics-265419.appspot.com/login", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("token", data);

        fetch(`https://hip-informatics-265419.appspot.com/usersemail/${email}`)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("id", data);
            navigate("/", { replace: true });
            window.location.reload(true);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRegister = (
    nickname: string,
    email: string,
    password: string
  ) => {
    SetisLogin(!isLogin);
    const data = {
      nickname: nickname,
      email: email,
      password: password
    };
    fetch("https://hip-informatics-265419.appspot.com/users", {
      method: "POST",
      body: JSON.stringify(data)
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.id);
        localStorage.setItem("id", data.id);
        fetch("https://hip-informatics-265419.appspot.com/login", {
          method: "POST",
          body: JSON.stringify({ email: email, password: password })
        })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("token", data);
            navigate("/", { replace: true });
            window.location.reload(true);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {" "}
      {!isLogin ? (
        <>
          <UserForm title={"Login"} handleLogin={handleLogin} />
          <UserRegister title={"Register"} handleRegister={handleRegister} />
        </>
      ) : (
        <LogoutContainer>
          <LogoutText>you leave so soon</LogoutText>
          <Button onClick={handleLogOut}>LogOut</Button>
        </LogoutContainer>
      )}{" "}
    </div>
  );
};
