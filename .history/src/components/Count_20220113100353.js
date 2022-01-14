import React, { useState } from 'react';
import Container from './Container';

const Count = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((previousState) => previousState + 1);

  };
  const handleMinus = () => {
    setCount((previousState) => previousState - 1);
    setCount((previousState) => previousState - 1);
    setCount((previousState) => previousState - 1);
    setCount((previousState) => previousState - 1);
    setCount((previousState) => previousState - 1);
  };

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={handlePlus}>Increase</button>
      <button onClick={handleMinus}>Decrease</button>
    </section>
  );
};

export default Count;
