import React from "react";
import { Card, CardBody, CardTitle, CardText, CardImg } from "reactstrap";

const CharacterCard = props => {
  return (
    <Card>
      <CardTitle>Character Name: {props.character.name}</CardTitle>
    <CardImg
      src={props.character.image}
      alt="Characters Image"
    />
    <CardBody>
      <CardText>Status: {props.character.status}</CardText>
      <CardText>Species: {props.character.species}</CardText>
      <CardText>Gender: {props.character.gender}</CardText>
    </CardBody>
  </Card>
  )
}
export default CharacterCard;