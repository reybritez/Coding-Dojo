import { useEffect } from "react";
import axios from "axios";

const BtnFetch = ({ setPokemons }) => {
  const searchPokemons = () => {
    console.log("Buscando Pokimons...");
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        const pokemons = response.data.results.map((pokemon) => pokemon.name);
        setPokemons(pokemons);
      });
  };

  return (
    <div>
      <button className="button-fetch" onClick={searchPokemons}>
        Buscar Pokemon
      </button>
    </div>
  );
};

export default BtnFetch;
