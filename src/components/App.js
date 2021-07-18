import React, { useState } from "react";
import data from "../data/pokemons.json";
import PokemonList from "./PokemonList";
import "../stylesheets/pokemon.scss";
const App = () => {
  const [pokemon] = useState(data);

  return (
    <div className="App">
      <h1 className="App_title">Mi lista de Pokemon</h1>
      <PokemonList getPokemons={pokemon} />
    </div>
  );
};

export default App;
