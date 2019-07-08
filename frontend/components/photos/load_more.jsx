import React from 'react';
import { SyncLoader } from 'react-spinners';

const LoadMore = props => {
  const { isLoading, handleClick } = props;

  if (isLoading) {
    return (
      <div className="user-show-loader">
        <SyncLoader color={'#919191'} />      
      </div> 
    ) 
  } else {
    return (
      <button 
        className="load-more-button"
        onClick={handleClick}>
          Load more
      </button> 
    )
  }
};

export default LoadMore;