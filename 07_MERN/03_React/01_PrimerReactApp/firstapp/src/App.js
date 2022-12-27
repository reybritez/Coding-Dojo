const App = () => {

  const bienvenida = "Bienvenidos a mi primera app react";
  
  const numeros = [1,2,3,4,5];

  return (
    <div className="App">
      <h1> {bienvenida} </h1>

      {
        numeros.map(numero => { return (<p> Numero: {numero} </p>);
        })
      }
      </div>
    );
}

export default App;