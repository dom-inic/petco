import React from 'react';
import {RevolvingDot} from 'react-loader-spinner';

function Spinner({ message }) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <RevolvingDot
          heigth="100"
          width="100"
          color='grey'
          ariaLabel='loading'
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}

export default Spinner;