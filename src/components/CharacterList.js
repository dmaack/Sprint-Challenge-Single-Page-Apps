import React, { useEffect, useState } from "react";


import axios from 'axios';
import styled from "styled-components";

import CharacterCard from './CharacterCard';



const Container = styled.div`
width: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
margin-top: 4%;
`;

const Header = styled.h2`
  text-align: center;
`;


export default function CharacterList() {
  const[characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const getCharacters = () => {
      axios 
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      const fullCharaterList = response.data.results;
      const filteredCharacterList = fullCharaterList.filter(character =>
        character.name.toLowerCase().includes(searchTerm)
      );
      setCharacters(filteredCharacterList);
      console.log(response);
    })
    .catch(error => {
      console.log('Not data received', error);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }
    getCharacters();
    
  }, [searchTerm]);

 
  return (
    <>
    <div className="Search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
    </div>

    <div className="character-list">
  
      <Header>Rick &amp; Morty Characters</Header>
      <Container>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
      ))}
      </Container>
     
    </div>
    </>
  );
}


