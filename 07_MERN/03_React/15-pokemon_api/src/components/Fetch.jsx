const BtnFetch = ({ pokemons, setPkmns: mostrarPokemons }) => {
  function fetchPkmn() {
    console.log("Buscando lista de pokemons...");
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => response.json())
      .then((response) => {
        mostrarPokemons(response.results.map((pokemon) => pokemon.name));
      });
  }

  return (
    <div>
      <button className="button-fetch" onClick={fetchPkmn}>
        Buscar Pokemon
      </button>
    </div>
  );
};
export default BtnFetch;
