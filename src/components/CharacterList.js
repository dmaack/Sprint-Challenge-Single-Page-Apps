import React, { useEffect, useState } from "react";


import axios from 'axios';
import styled from "styled-components";

import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";


const Container = styled.div`
width: auto;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`;

const Header = styled.h2`
  text-align: center;
`;


export default function CharacterList() {
  const [characters, setCharacters] = useState( [] );
  const [searchTerm, setSearchTerm] = useState("");
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    const results = characters.filter(character => character.name.toLowerCase().includes(searchTerm));
    setSearchTerm(results);
  }, [searchTerm])

  useEffect(() => {
    const getCharacters = () => {
      axios 
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results);
      console.log(response);
    })
    .catch(error => {
      console.log('Not data received', error);
    })
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    }
    getCharacters();
  }, []);

  const handleChange = event => {
   
    setSearchTerm(event.target.value);
  };
  return (
    <section className="character-list">
      <Header>Rick &amp; Morty Characters</Header>
      <SearchForm />
      <Container>
      {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
      ))}
      </Container>
     
    </section>
  );
}


