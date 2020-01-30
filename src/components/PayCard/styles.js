import styled from "styled-components";
import { Link } from "@reach/router";

export const PayCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin: 5px;
  border-radius: 12px;
 width:100%;
`;
export const Button = styled(Link)`
  display: flex;
  background-image: linear-gradient(45deg, rgb(66, 103, 178), rgb(41, 72, 125));
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  flex-direction: row;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  border-radius: 12px;
  text-align: left;
  margin: 10px;
  border-left:20px solid #C9911A;
`;
export const PayCardTitle = styled.h1`
  color: white;
  font-size: 25px;
`;
export const Amount = styled.span`
  display: flex;
  flex-direction: row;
  font-size: 15px;
  text-align: center;
  align-items: center;
  padding: 10px;
`;
export const AmountCant = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: white;
`;
export const Date = styled.small`
margin:3px 3px;
color:#e8e8e8;
font-size:12px;
`
export const Content = styled.small`
margin:3px 3px;
color:#e8e8e8;
font-size:12px;
`