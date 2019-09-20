import React, { useEffect, useState } from "react";
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [characters, setCharacters] = useState( [] );
  // TODO: Add useState to track data from useEffect

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

  return (
    <section className="character-list">
      {characters.map(character => (
        <CharacterCard key={character.id} character={character}/>
      ))}
    </section>
  );
}
