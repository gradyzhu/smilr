import React from 'react';
import DemoButton from './session_form/demo_button';

const Splash = () => {
  return (
    <div className="center">
      <div className="splash-content-wrap">
        <h1 className="main-text">Welcome to smilr</h1>
        <p className="sub-text">Choose a demo user by clicking below</p>
        <div className="splash-bg"></div>
        <div className="flex-center">
          <DemoButton user={"lisa"}/>
          <DemoButton user={"josh"}/>
        </div>
      </div>
    </div>
  )
}

export default Splash;