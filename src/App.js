import React from 'react';
import Pokedex from './Pokedex';
import Root from './Root';
import About from './About';
import PokemonCard from './PokemonCard';



function App() {

  return(
      <div className='homePage'>
        <h1>Home</h1>
        <p>Why this is the best pokemon: Swampert is a powerful and unique Pokémon that
           has many strengths in battle. With its dual Water and Ground typing, it is only
            weak to Grass-type moves, giving it a limited number of weaknesses to exploit. 
            Additionally, its ability to learn the ability "Damp" makes it immune to explosive moves like Selfdestruct and Explosion. 
            Swampert's design is also very cool and  has a wide range of powerful moves that cover different types and offer strategic 
            options in battle. Among its strongest moves are Earthquake, a Ground-type move that hits all opposing Pokémon with a base
             power of 100, and Hydro Pump, a Water-type move with a base power of 110 that has a high critical-hit ratio. Other strong 
             moves include Hammer Arm, a Fighting-type move that lowers the user's Speed but has a high chance of lowering the target's 
             Defense, and Ice Punch, an Ice-type move with a base power of 75 that has a high chance of causing the target to flinch.
            Additionally, Swampert has access to Waterfall, a reliable Water-type move with a base power of 80 that has a high chance
            of making the target flinch, and Stone Edge, a Rock-type move with a base power of 100 that has a high critical-hit ratio.
             Lastly, Superpower, a Fighting-type move with a base power of 120 that lowers the user's Attack and Defense stats, is also a 
            powerful move to consider.</p>
        < PokemonCard name = {"swampert"}></PokemonCard>
      </div>
  );
 
}

   









export default App;
