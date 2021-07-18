import React from "react";
import Pokemon from "./Pokemon";
import "../stylesheets/pokemon.scss";
const PokemonList = (props) => {
  const pokemonsItems = props.getPokemons.map((pokemonItem) => {
    return (
      <li key={pokemonItem.id}>
        <Pokemon pokemon={pokemonItem} />
      </li>
    );
  });
  return <ul className="list">{pokemonsItems}</ul>;
};

export default PokemonList;
