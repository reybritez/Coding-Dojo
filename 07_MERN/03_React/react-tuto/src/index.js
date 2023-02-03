import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import MiNuevoComponente from './componentes/miComponente'
import Header from './componentes/Header'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <MiNuevoComponente algunTexto={"Hola Mundo"}/>
        <Header firstName={"Steven"} lastName={"Britez"}/>
      </div>
    )
    
  }
}

ReactDOM.render(<App />, document.getElementById('root'));