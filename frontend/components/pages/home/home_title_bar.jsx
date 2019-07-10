import React from 'react';

const HomeTitleBar = ({title}) => {
  return (
    <div className="index-page-header-container index-flex-center-col">
      <div className="index-page-header index-flex-left">
        <h1 className="options-font-style">
          {title}
        </h1>  
      </div>
    </div>
  )
}

export default HomeTitleBar;