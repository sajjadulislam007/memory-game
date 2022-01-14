import React from 'react';
import Card_container from './Card_container';
import Header from './Header';

const Container = ({ shuffleCards }) => {
  return (
    <div className='container text-center'>
      <Header />
      <Card_container shuffleCards="shuffleCards"/>
    </div>
  );
};

export default Container;
