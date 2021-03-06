import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
  max-width:500px;
  justify-content: space-around;
  left: 0;
  margin: 0 auto;
`;
export const FormTitle = styled.span`
  font-weight: 700;
  font-size: 34px;
  color: rgb(66, 103, 178);
`;
export const FormSubtitle = styled.span`
  font-size: 21px;
  color: rgb(66, 103, 178);
  margin: 8px 0px;
`;
export const Input = styled.input`
  padding: 10px;
  margin: 10px 0px;
  border: 2px solid rgb(41, 72, 125);
  border-radius: 20px;
  &:focus {
    outline: none;
    border: 2px solid #c9911a;
    border-radius: 20px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  }
`;
export const Button = styled.button`
  background-image: linear-gradient(45deg, rgb(66, 103, 178), rgb(41, 72, 125));
  padding: 10px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  border-left: 10px solid #c9911a;
  &:hover {
    border-left: 10px solid rgb(41, 72, 125);
  }
`;

export const LogoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  font-weight: 600;
  font-size: 1em;
  height: 100px;
  width: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  top: 50%;
  margin-top: -50px;
`;
export const LogoutText = styled.span`
  color: rgb(41, 72, 125);
  font-size: 21px;
  font-weight: 600;
  margin: 10px;
`;
