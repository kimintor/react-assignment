import React, { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom';
function Pokedex() {
  
    const [itemIds, setItemIds] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      async function fetchItems() {
        const requests = itemIds.map(id =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
        );
        const items = await Promise.all(requests);
        setItems(items);
      }
  
      fetchItems();
    }, [itemIds]);
  
    function handleNextPage() {
      const lastId = itemIds[itemIds.length - 1];
      const nextIds = Array.from({ length: 12 }, (_, i) => lastId + i + 1);
      setItemIds(nextIds);
    }
  
    function handlePrevPage() {
      const firstId = itemIds[0];
     const prevIds = Array.from({ length: 12 }, (_, i) => firstId - i - 1).reverse();
      setItemIds(prevIds);
    }
  
    return (
      <div class="board">
        <h2>Shiny pokemons</h2>
        <button onClick={handlePrevPage}>Prev Page</button>
        <button onClick={handleNextPage}>Next Page</button>
        {items.map(item => (
          <div class="card" key={item.id}>
           
            <h2>{item.name}</h2>
            <p>pokekex id:{item.id}</p>
            <img alt='' src={`${item.sprites.front_shiny}`}></img>
           </div>
        ))}
        
      </div>
    );
  }


  export default Pokedex;