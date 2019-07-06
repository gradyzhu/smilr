import React from 'react';
import { Link } from 'react-router-dom';

const BackToExplore = props => {
  return (
    <div className="back-to-explore flex-center">
      <div className="back-to-ex-size">
        <Link className ="back-to-ex-text" to={`/`}>
          <p>Back to explore</p>
        </Link>
      </div>
    </div>
  )
}

export default BackToExplore;