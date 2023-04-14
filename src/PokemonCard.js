import React, { useState, useEffect } from 'react';


function PokemonCard(props){

    const [pokemon, setPokemon] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchPokemon = async () => {
        try {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+props.name);
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setPokemon(data);
        } catch (error) {
          setError(error.message);
        }
      };
      fetchPokemon();
    }, []);
  
    if (error) {
      return <div>{error}</div>;
    }
  
    if (!pokemon) {
      return <div>Loading...</div>;
    }
  
   
    return (
      <div>
        <h2>{pokemon.name}</h2>
        <img src={pokemon.sprites.front_default} alt={`${pokemon.name}`} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        {pokemon.stats.map((stat, index) => (
          <li key={index}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </div>
    );
  }
  

export default PokemonCard

