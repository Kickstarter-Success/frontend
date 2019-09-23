import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

// Components
import NavBar from './components/NavBar';

import './App.css';
import {FormikNewUserForm} from './components/SignUpForm'
import {FormikSignInForm} from './components/SignInForm'
import {Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            {/*public routes*/}
            <Route path='/login' component={FormikSignInForm}/>
            <Route path='/signup' component={FormikNewUserForm}/>
            {/*private routes*/}
            <PrivateRoute exact path='/dashboard' />
            <PrivateRoute exact path='/dashboard/campaignform' />

            {/*default*/}
            <Redirect from='/' to='/dashboard' />
          </Switch>          
        </div>
      </Router>
    </>
  );
}

export default App;
