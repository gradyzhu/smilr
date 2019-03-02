import React from 'react';

import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import NavBar from './navbar_container';
import Splash from './splash';
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import Footer from './footer';

import {AuthRoute} from '../util/route_util';

const App = () => (
  <>
    <header className="nav-bar">
      <NavBar />
    </header>
    <section>
      <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <Redirect to="/"/>
      </Switch>
    </section>
    <section>
      <Route exact path="/" component={Splash}/>
    </section>
    <section>
      <Footer />
    </section>

  </>
)

export default App;