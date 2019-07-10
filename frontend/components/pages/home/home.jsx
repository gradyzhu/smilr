import React from 'react';
import HomeOptions from './home_options';
import HomeIndexes from './home_indexes';
import HomeTitleBar from './home_title_bar';

const Home = props => {
  return (
    <>
      <HomeOptions />
      <HomeTitleBar title={"Explore"}/>
      <HomeIndexes indexType={"explore"} />
    </>
  )
}

export default Home;