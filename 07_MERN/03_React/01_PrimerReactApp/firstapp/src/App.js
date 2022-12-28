const App = () => {

  const bienvenida = "Hello Dojo!";
  
  const listaDeCosas = ["Learn React", "Climb Mt. Everest", "Run a marathon", "Feed the dogs"];

  return (
    <div className="App">
      <h1> {bienvenida} </h1>
      <h2> Things i need to do:</h2>
      {
        listaDeCosas.map(item => { return (<p> * {item} </p>);
        })
      }
      </div>
    );
}

export default App;