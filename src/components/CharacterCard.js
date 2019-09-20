import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

import styled from "styled-components";


const RickCard = styled.div`
background: grey;
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
      <CardTitle>Character Name: {props.character.name}</CardTitle>
    <RickImg
      src={props.character.image}
      alt="Characters Image"
    />
    <CardBody>
      <CardText>Status: {props.character.status}</CardText>
      <CardText>Species: {props.character.species}</CardText>
      <CardText>Gender: {props.character.gender}</CardText>
    </CardBody>
  </RickCard>

  )
}
export default CharacterCard;