import React from 'react';
import PhotosIndex from './photos_index';
import Footer from '../footer';
import { Link } from 'react-router-dom';

const Explore = props => {
  return (
    <>
      <div className="index-flex-center-col">
        <div className="options-bar-container index-flex-center-col">
          <div className="options-bar index-flex-center-row">
            <div className="option-tab-explore index-flex-center-row">
              <Link to="/" className='options-tabs-font-style'>Explore</Link>
            </div>
          </div>
        </div>
        <div className="index-page-header-container index-flex-center-col">
          <div className="index-page-header index-flex-left">
            <h1 className="options-font-style">Explore</h1>  
          </div>
        </div>
        <ul className="index-ul-container index-items-flex">
          <div className="index-li-flex">
            <PhotosIndex />
          </div>
        </ul>
      </div>
      <Footer />
    </>
  ) 
}

export default Explore;
