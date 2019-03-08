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
import PhotosIndexContainer from "./photos/photos_index_container";
import PhotoShowContainer from "./photos/photo_show_container";
import UploadFormContainer from "./photos/upload_form_container";
import EditFormContainer from "./photos/edit_photo_form_container";
import UserShowContainer from "./users/user_show_container";

import SplashRoute from './splash_auth_route';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <section>
      <Switch>
        <Route path="/users/:id/photos" component={UserShowContainer} />
        <Route exact path="/photos/:id" component={PhotoShowContainer} />
        <Route exact path="/photos" component={PhotosIndexContainer} />
        <AuthRoute exact path="/photos/:id/edit" component={EditFormContainer} />
        <ProtectedRoute exact path="/upload" component={UploadFormContainer} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <SplashRoute exact path="/" loggedInComp={PhotosIndexContainer} loggedOutComp={Splash}/>
        {/* <Redirect to="/"/> */}
      </Switch>
    </section>
    <section>
    </section>

  </>
)

export default App;