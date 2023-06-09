import React from 'react';
import CardComponent from './Cards';
import Header from '../Header/Header';
import Introduction from './Introduction';
const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <CardComponent></CardComponent>
    </div>
  );
};

export default Home;
