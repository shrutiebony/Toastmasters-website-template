import React from 'react';
import CardComponent from './Cards';
import Header from '../Header/Header';
import Introduction from './Introduction';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <CardComponent></CardComponent>
      <Footer></Footer>
    </div>
  );
};

export default Home;
