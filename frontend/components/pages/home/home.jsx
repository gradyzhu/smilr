import React from 'react';
import HomeOptions from './home_options';
import HomeIndexes from './home_indexes';
import Footer from '../../footer';

const Home = props => {
  return (
    <>
      <HomeOptions />
      <HomeIndexes />
      <Footer />
    </>
  )
}

export default Home;