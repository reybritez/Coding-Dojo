import './App.css';
import BtnFetch from './components/Fetch';
import ShowPkmn from './components/ShowPokemon';
import { useState } from 'react';

function App() {
  const [pokemons, setPkmns] = useState([]);
  
  return (
    <>
      <BtnFetch pokemons={pokemons} setPkmns={setPkmns} />
      <ShowPkmn pokemons={pokemons}/>
    </>
  );
}

export default App;