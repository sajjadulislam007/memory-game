import React, { useState } from 'react';

const Countdown = () => {

  const [count, setCount] = useState(0);

  const handlePlus = () =>{
    
  }


  return (
    <section>
      <h1></h1>
      <button onClick={handlePlus}>Increacse by 1</button>
      <button onClick={handleMinus}>Decreacse by 1</button>
    </section>
  );
};

export default Countdown;
