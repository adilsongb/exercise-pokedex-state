import React from 'react';

class ButtonFilter extends React.Component {
  render() {
    const { filterPokemons, types } = this.props;
    return (
      <>
        <button onClick={(event) => filterPokemons(event, 'All')}>All</button>
        { types.map((type) => <button key={type} onClick={(event) => filterPokemons(event, type)}>{type}</button>) }
      </>
    );
  }
}

export default ButtonFilter;
