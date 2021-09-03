import React from 'react';

class ButtonFilter extends React.Component {
  render() {
    return (
      <button onClick={(event) => this.props.function(event, 'Electric')}>Electric</button>
    );
  }
}

export default ButtonFilter;
