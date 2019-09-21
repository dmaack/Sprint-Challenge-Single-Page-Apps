import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap";

import styled from "styled-components";


const RickCard = styled.div`
background: white;
color: black;
width: 250px;
max-height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
margin-bottom: 20px;
font-size: 1rem;
padding:2%;
box-shadow: -11px 8px 10px grey; 
`;

const RickImg = styled.img`
  width: 150px;
  height: 150px;
  object-fit: scale;
  flex-shrink: 2;
`;




const CharacterCard = props => {
  return (
  
    <RickCard>
      <CardTitle><strong>Character Name: </strong>{props.character.name}</CardTitle>
    <RickImg
      src={props.character.image}
      alt="Characters Image"
    />
    <CardBody>
      <CardText><strong>Status: </strong>{props.character.status}</CardText>
      <CardText><strong>Species: </strong>{props.character.species}</CardText>
      <CardText><strong>Gender: </strong>{props.character.gender}</CardText>
    </CardBody>
  </RickCard>

  )
}
export default CharacterCard;