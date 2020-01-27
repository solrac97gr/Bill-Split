import styled,{css} from "styled-components";
import { Logo } from "../Logo";
import { fadeIn } from "../../styles/animation";
import Slider from "react-input-slider";

export const SliderStyled = styled(Slider)`
  width: 100%;
  margin: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
export const Title = styled.div`
  background: rgb(66, 103, 178);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.3);
  color: rgb(66, 103, 178);
  font-weight: 600;
  font-size: 25px;
  padding: 35px;
  color: white;
  border-radius: 0px 0px 50px 50px;
  text-align: right;
  &:after {
    background-color: rgba(201, 145, 26, 0.9);
    content: "blah";
    width: 101px;
    height: 101px;
    color: transparent;
    border-radius: 0% 50% 50% 50%;
    position: absolute;
    left: 0;
    top: 0;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const FormContainer = styled.div`
  padding: 0px;
`;

export const Input = styled.input`
  font-size: 13px;
  padding: 10px;
  margin: 10px 0px;
  border: 2px solid rgb(41, 72, 125);
  border-radius: 20px;
  word-break: break-word;
  &:focus {
    outline: none;
    border: 2px solid #c9911a;
    border-radius: 20px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.3);
  }
`;

export const TextArea = styled.textarea`
  font-size: 13px;
  height:100px;
  padding: 10px;
  margin: 10px 0px;
  border: 2px solid rgb(41, 72, 125);
  border-radius: 20px;
  word-break: break-word;
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
  margin-bottom: 5px;
  width:100%;
  &:hover {
    border-left: 10px solid rgb(41, 72, 125);
  }
  ${(props) =>
    props.warning &&
    css`
      background-image: linear-gradient(45deg, #c9911a, #b07f17);
      border-left: 10px solid rgb(66, 103, 178);
    `}
`;
export const FloattingLogo = styled(Logo)`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100px;
  z-index: 9999;
`;

export const InputRange = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  padding: 20px;
  &:-webkit-slider-thumb {
    -webkit-appearance: none;
  }
  &:-ms-track {
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &:focus {
    outline: none;
  }
  &:-webkit-slider-thumb {
    -webkit-appearance: none;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    margin-top: -14px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &:-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &:-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
`;

export const Error = styled.span`
  color: white;
  margin-top: 10px;
  padding: 10px 0px;
  border-radius: 6px;
  width: 100%;
  text-align: center;
  background-image: linear-gradient(45deg, rgb(211, 47, 47), rgb(154, 0, 7));
  ${fadeIn({ time: "0.1s" })}
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Separator = styled.div`
margin-top:3px;
font-size:3px;
text-align:center;
color:white;
border-top:1px solid #7e7e7e;
width:100%
`