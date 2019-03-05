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
import PhotosIndexContainer from "./photos/photos_index_container";
import PhotoShowContainer from "./photos/photo_show_container";
import UploadFormContainer from "./photos/upload_form_container";
import EditFormContainer from "./photos/edit_form_container";

import SplashRoute from './splash_auth_route';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <>
    <header className="nav-bar">
      <NavBar />
    </header>
    <section>
      <Switch>
        <Route exact path="/photos/:id" component={PhotoShowContainer} />
        <Route exact path="/photos" component={PhotosIndexContainer} />
        <AuthRoute exact path="/photos/:id/edit" component={EditFormContainer} />
        <AuthRoute exact path="/upload" component={UploadFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <SplashRoute exact path="/" loggedInComp={PhotosIndexContainer} loggedOutComp={Splash}/>
      </Switch>
    </section>
    <section>
      <Footer />
    </section>

  </>
)

export default App;