import React from 'react';
import Card_container from './Card_container';
import Header from './Header';

const Container = ({ s }) => {
  return (
    <div className='container text-center'>
      <Header />
      <Card_container />
    </div>
  );
};

export default Container;
