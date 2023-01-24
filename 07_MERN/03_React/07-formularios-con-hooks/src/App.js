import './App.css';
import Formulario from "./components/Formulario";
import Resultado from "./components/Resultado";
import React, { useState } from "react";

function App() {
  //Initial State
  const [state, setState] = useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
  });

  return (
      <div className="App">
          <Formulario entradas={state} setInputs={setState} />
          <Resultado datos={state} />
      </div>
  );
}

export default App;