import React, { useState } from 'react';

const Countdown = () => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount((previousState => {
      previousState +1
    });
  };
  const handleMinus = () => {
    setCount(count - 1);
    setCount(count - 1);
  };

  return (
    <section>
      <h1>{count}</h1>
      <button onClick={handlePlus}>Increacse by 1</button>
      <button onClick={handleMinus}>Decreacse by 1</button>
    </section>
  );
};

export default Countdown;
