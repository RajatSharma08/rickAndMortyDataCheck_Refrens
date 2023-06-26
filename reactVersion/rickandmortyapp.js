// RickAndMortyApp.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const RickAndMortyApp = () => {
// State to store the characters fetched from the API
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
// Fetch the characters when the component go up
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    try {
// Make an API request to fetch the characters
      const response = await axios.get('https://rickandmortyapi.com/api/character');

 // Update the characters state with the fetched data
      setCharacters(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

return (
<div>
      <h1>Rick & Morty Characters</h1>
      <div className="grid-container">
        {/* Map over the characters and render a card for each */}
        {characters.map((character) => (
          <div key={character.id} className="card">
            <img src={character.image} alt={character.name} />
            <h2>{character.name}</h2>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin.name}</p>
            <p>Location: {character.location.name}</p>
            <p>Featured in:</p>
            <ul>
              {/* Map over the episodes and render a list item for each */}
              {character.episode.map((episode, index) => (
                <li key={index}>{episode}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RickAndMortyApp;
