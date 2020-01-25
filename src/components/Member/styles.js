import styled from 'styled-components'

export const CardMember = styled.div`
  display: flex;
  background-image: linear-gradient(45deg, rgb(66, 103, 178), rgb(41, 72, 125));
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  color: white;
  border-radius: 6px;
  text-align: left;
  margin: 5px;
  border-left:20px solid #C9911A;
  padding: 20px;
`
export const ParticipantName = styled.span`
font-size:18px;
font-weight:700;
`
export const Amount = styled.span`
font-size:18px;
`