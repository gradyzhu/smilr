import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NavBar from './navbar_container';
import Splash from './splash';
import Home from './pages/home/home';
import SignUpFormContainer from './session_form/sign_up_form_container';
import LogInFormContainer from './session_form/log_in_form_container';
import AlbumShowContainer from "./pages/album_show/album_show_container";
import UploadFormContainer from "./photos/upload_form";
import EditFormContainer from "./photos/edit_photo_form_container";
import PhotoShowContainer from "./pages/photo_show/photo_show_container";
import UserShowPhotosContainer from "./pages/user_show/user_show_photos_container";
import UserShowAlbumsContainer from "./pages/user_show/user_show_albums";
import Footer from "./footer";
import SplashRoute from '../reducers/splash_auth_route';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <>
    <header>
      <NavBar />
    </header>
    <section>
      <Switch>
        <Route path="/users/:id/photos" component={UserShowPhotosContainer} />
        <Route exact path="/users/:id/albums" component={UserShowAlbumsContainer} />
        <Route exact path="/photos/:id" component={PhotoShowContainer} />
        <Route exact path="/albums/:id" component={AlbumShowContainer} />
        <Route exact path="/photos" component={Home} />
        <AuthRoute exact path="/photos/:id/edit" component={EditFormContainer} />
        <ProtectedRoute exact path="/upload" component={UploadFormContainer} /> */}
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} /> 
        <SplashRoute exact path="/" loggedInComp={Home} loggedOutComp={Splash}/>
        <Redirect to="/"/>
      </Switch>
    </section>
    <Footer />
  </>
)

export default App;
