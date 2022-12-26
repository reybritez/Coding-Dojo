import GruposMusicales from "./componentes/Musica";

const App = () => {

  const bienvenida = "Bienvenidos a la app de grupos musicales";
  
  const numeros = [1,2,3,4,5];

  return (
    <div className="App">
      <h1> {bienvenida} </h1>

      {
        numeros.map(numero => { return (<p> Numero: {numero} </p>);
        })
      }
      
      <GruposMusicales nombre="Tool" estilo="tool"/>
      <GruposMusicales nombre="AC/DC" estilo="rock"/>
      </div>
    );
}

export default App;