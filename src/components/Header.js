import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";



const HomeLink = styled(Link)`
  text-decoration: none;
  color: #6387cbfc;
  
  
`;


export default function Header() {
  return (
    <header className="ui centered">
      <HomeLink to='/'><h1 className="ui center">Rick &amp; Morty Fan Page</h1></HomeLink>
    </header>
  );
}
