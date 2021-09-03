// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex'
import listPokemons from './data';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex data={listPokemons}/>
      </div>
    );
  }
}

export default App;
