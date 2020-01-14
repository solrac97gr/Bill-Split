import styled from 'styled-components'
import {skeletonAnimation} from '../../styles/animation'

export const TitleSkelet = styled.h1`
color: transparent;
border-radius:12px;
width:90%;
${skeletonAnimation}
`
export const PayCard = styled.div`
display:flex;
flex-direction:column;
box-shadow:0px 2px 8px rgba(0,0,0,0.5);
padding:20px;
margin:10px;
border-radius:12px;
color:transparent;

`
export const Resumen = styled.span`
margin:5px 0px;
color:transparent;
border-radius:12px;
width:70%;
${skeletonAnimation}
`