import React from 'react';
import HomeOptions from './home_options';
import HomeIndexes from './home_indexes';
import HomeTitleBar from './home_title_bar';
import Footer from '../../footer';

const Home = props => {
  return (
    <>
      <HomeOptions />
      <HomeTitleBar />
      <HomeIndexes />
    </>
  )
}

export default Home;