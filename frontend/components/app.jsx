import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import GreetingContainer from './greeting_container';
import Splash from './session_form/splash';

import {AuthRoute} from '../util/route_util';

const App = () => (
  <>
    <header>
      <GreetingContainer />
    </header>
    <div>
      <Switch>
        <Route exact path="/" component={Splash}/>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Redirect to="/"/>
      </Switch>
    </div>
  </>
)

export default App;