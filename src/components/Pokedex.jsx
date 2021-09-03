import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  constructor(props) {
    super(props);
    this.nextPokemon = this.nextPokemon.bind(this);
    this.state = {
      index: 0,
      pokemons: this.props.data
    }
  }

  nextPokemon() {
    if (this.state.index !== (this.state.pokemons.length - 1)) {
      this.setState((state) => ({
        index: state.index + 1
      }));
    } else {
      this.setState({ index: 0 });
    }
  }

  filterPokemons(event, filter) {
    const div = event.target.parentElement;
    const botoes = div.children;
    const btnNextPokemon = div.nextElementSibling;
    for (let i = 0; i < botoes.length; i++) {
      botoes[i].style.backgroundColor = 'white';
      botoes[i].style.color = 'rgb(223, 71, 71)';
    }
    event.target.style.backgroundColor = 'rgb(223, 71, 71)';
    event.target.style.color = 'white';

    if (filter === 'All') {
      this.setState({ pokemons: this.props.data });
      btnNextPokemon.removeAttribute("disabled");
    } else {
      this.setState(
        { pokemons: this.props.data.filter((pokemon) => pokemon.type === filter) },
        () => {
          if (this.state.pokemons.length === 1) {
            btnNextPokemon.setAttribute("disabled", "disabled");
          } else {
            btnNextPokemon.removeAttribute("disabled");
          }
        })
      this.setState({ index: 0 });
    }
  }

  render() {
    const { index, pokemons } = this.state;
    return (
      <div id="pokedex">
        <Pokemon pokemon={pokemons[index]} colorType={pokemons[index].type}/>
        <div className="buttonsFilter">
          <button onClick={(event) => this.filterPokemons(event, 'All')}>All</button>
          <button onClick={(event) => this.filterPokemons(event, 'Electric')}>Electric</button>
          <button onClick={(event) => this.filterPokemons(event, 'Fire')}>Fire</button>
          <button onClick={(event) => this.filterPokemons(event, 'Bug')}>Bug</button>
          <button onClick={(event) => this.filterPokemons(event, 'Poison')}>Poison</button>
          <button onClick={(event) => this.filterPokemons(event, 'Psychic')}>Psychic</button>
          <button onClick={(event) => this.filterPokemons(event, 'Normal')}>Normal</button>
          <button onClick={(event) => this.filterPokemons(event, 'Dragon')}>Dragon</button>
        </div>
        <button onClick={this.nextPokemon}>Próximo Pokemon</button>
      </div>
    )
  }
}

Pokedex.propTypes = {
  data: PropTypes.array
}

export default Pokedex;
