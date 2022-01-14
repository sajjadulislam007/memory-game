import React from 'react';

const Count = () => {
  return (
    <section>
      <h1></h1>
      <button onClick={handlePlus}>Increase</button>
      <button onClick={handleMinus}>Decrease</button>
    </section>
  );
};

export default Count;
