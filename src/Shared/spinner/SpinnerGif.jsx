import React from 'react';
import spinner from '../../Assests/spinner.gif';

function SpinnerGif() {
  return (
    <img
      src={spinner}
      alt='loading'
      style={{ width: '7rem', margin: 'auto', display: 'block' }}
    />
  );
}

export default SpinnerGif;
