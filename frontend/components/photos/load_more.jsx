import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadMore = props => {
  const { isLoading, handleClick } = props;

  let buttonOrLoader = isLoading ?
    <SyncLoader color={'#919191'} /> :
    <button 
      className="load-more-button"
      onClick={handleClick}>
        Load more
    </button> 

  return (
    <div className="loader-margin flex-center">
      {buttonOrLoader}
    </div>
  )
};

export default LoadMore;