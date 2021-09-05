// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex'
import listPokemons from './data';

class App extends React.Component {
  render() {
    const types = listPokemons.map((pokemon) => pokemon.type);
    const correctedTypes = types.filter((type, i) => types.indexOf(type) === i);
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex data={listPokemons} types={correctedTypes}/>
      </div>
    );
  }
}

export default App;
