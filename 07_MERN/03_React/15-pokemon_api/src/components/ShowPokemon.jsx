const ShowPkmn = ({ pokemons }) => {
  return (
    <>
      <h2>Lista de Pokemons (Legacy) </h2>
      <ul>
        {pokemons.map((pokemon, i) => {
          return <li key={i}>{pokemon}</li>;
        })}
      </ul>
    </>
  );
};

export default ShowPkmn;
