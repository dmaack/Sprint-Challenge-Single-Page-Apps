import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HomeImg = styled.img`
  margin-left: 35%;
  box-shadow: -11px 8px 10px grey; 
  margin-top: 4%;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to='/character-list'>
        <HomeImg
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
       </Link>
      </header>
    </section>
  );
}
