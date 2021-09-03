import React from 'react';
import PropTypes from 'prop-types';

function colorTypePokemon(type) {
  if (type === 'Electric') return 'yellow';
  if (type === 'Fire') return 'red';
  if (type === 'Bug') return 'green';
  if (type === 'Poison') return 'purple';
  if (type === 'Psychic') return 'magenta';
  if (type === 'Normal') return 'burlywood';
  if (type === 'Dragon') return 'cyan';
}

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    const styleColor = {
      borderWidth: '4px',
      borderStyle: 'solid',
      borderColor: colorTypePokemon(this.props.colorType)
    }

    return (
      <div className="pokemon" style={styleColor}>
        <div id="infoPokemon">
          <h2>{name}</h2>
          <span>{type}</span>
          <span>Average weight: {averageWeight.value} {averageWeight.measurementUnit}</span>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired
  }),
  colorType: PropTypes.string.isRequired
}

export default Pokemon;
