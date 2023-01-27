import { useState, useEffect } from 'react';
import './App.css';
import BtnFetch from './components/Fetch';
import ShowPkmn from './components/ShowPokemon';

function App() {
  const [pokemons, setPokemons] = useState([]);
  
  return (
    <div className='centrar'>
      <BtnFetch setPokemons={setPokemons} />
      <ShowPkmn pokemons={pokemons}/>
    </div >
  );
}

export default App;