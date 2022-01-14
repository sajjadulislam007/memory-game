import React, { useState } from 'react';
import Container from './Container';

const Count = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {}

  return (
    <section>
      <h1></h1>
      <button onClick={handlePlus}>Increase</button>
      <button onClick={handleMinus}>Decrease</button>
    </section>
  );
};

export default Count;
