import styled from 'styled-components'
import {Link} from '@reach/router'

export const PayCard = styled.div`
display:flex;
flex-direction:column;
box-shadow:0px 2px 8px rgba(0,0,0,0.5);
padding:20px;
margin:10px;
border-radius:12px;
`
export const Button = styled(Link)`
text-decoration:none;
background-color:#3366FF;
color:white;
padding:8px;
margin:10px 0px;
border-radius:12px;
text-align:center;
`
export const PayCardTitle = styled.h1`
color:#3366FF
`