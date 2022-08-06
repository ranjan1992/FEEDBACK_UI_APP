import React from 'react';
import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt="Loading....."
      style={{ width: '100px', margin: 'auto', display: 'block' }}
    />
  );
}
const styles = {
  marginX: 'auto',

  height: '20px',
  width: '20px',
};

export default Spinner;
