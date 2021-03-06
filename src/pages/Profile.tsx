import React, { FunctionComponent as FC, useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";
import { UserForm } from "../components/UserForm";
import { UserRegister } from "../components/UserRegister";
import {
  Button,
  LogoutContainer,
  LogoutText
} from "../components/UserForm/styles";

export const Profile: FC<RouteComponentProps> = () => {
  const [errordata, SetErrorData] = useState("");
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

  const handleLogin = (email: string, password: string, error: string) => {
    SetErrorData(error);
    if (errordata.length === 0) {
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
          if (data.error) {
            console.log(data.error);
            SetErrorData(data.error);
          } else {
            localStorage.setItem("token", data);
            fetch(
              `https://hip-informatics-265419.appspot.com/usersemail/${email}`
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                if (data.error) {
                  console.log(data.error);
                  SetErrorData(data.error);
                } else {
                  localStorage.setItem("id", data);
                  navigate("/", { replace: true });
                  window.location.reload(true);
                  SetisLogin(true);
                }
              })
              .catch((error) => {
                localStorage.removeItem("id");
                localStorage.removeItem("token");
              });
          }
        })
        .catch((error) => {
          localStorage.removeItem("token");
          localStorage.removeItem("id");
        });
    }
  };
  const handleRegister = (
    nickname: string,
    email: string,
    password: string,
    error: string
  ) => {
    SetErrorData(error);
    if (errordata.length === 0) {
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
          if (data.error) {
            console.log(data.error);
            SetErrorData(data.error);
          } else {
            console.log(data.id);
            localStorage.setItem("id", data.id);
            fetch("https://hip-informatics-265419.appspot.com/login", {
              method: "POST",
              body: JSON.stringify({ email: email, password: password })
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.error) {
                  console.log(data.error);
                  SetErrorData(data.error);
                } else {
                  localStorage.setItem("token", data);
                  SetisLogin(true);
                  navigate("/", { replace: true });
                  window.location.reload(true);
                }
              })
              .catch((error) => {
                console.log(error);
                localStorage.removeItem("token");
              });
          }
        })
        .catch((error) => {
          console.log(error);
          localStorage.removeItem("token");
        });
    }
  };

  return (
    <div>
      {" "}
      {!isLogin ? (
        <>
          <UserForm title={"Login"} handleLogin={handleLogin} />
          {errordata.length > 0 && <div>{errordata}</div>}
          <UserRegister title={"Register"} handleRegister={handleRegister} />
        </>
      ) : (
        <LogoutContainer>
          <LogoutText>Bye!</LogoutText>
          <Button onClick={handleLogOut}>LogOut</Button>
        </LogoutContainer>
      )}{" "}
    </div>
  );
};
