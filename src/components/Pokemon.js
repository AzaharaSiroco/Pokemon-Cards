import React from "react";

const Pokemon = (props) => {
  const types = props.pokemon.types.map((type, index) => {
    return (
      <li key={index} className="item_type_list">
        {type}
      </li>
    );
  });
  return (
    <article className="item">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
      <h4 className="item_name">{props.pokemon.name}</h4>
      <li className="item_type">{types}</li>
    </article>
  );
};

export default Pokemon;
