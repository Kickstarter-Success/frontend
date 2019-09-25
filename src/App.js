import React from 'react';
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

// Components
import NavBar from './components/NavBar';
import FormikNewUserForm from './components/SignUpForm';
import FormikSignInForm from './components/SignInForm';
import FormikAddCampaignForm from './components/AddCampaignForm';
import Dashboard from './components/Dashboard';
import {CampaignDetail} from './components/CampaignDetail';

import './App.css';

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
            <PrivateRoute exact path='/dashboard' component={Dashboard}/>
            <PrivateRoute exact path='/dashboard/campaignform' component={FormikAddCampaignForm}/>
             {/* Campaign details can be accessed three different ways!! */}
            {/* <Route path='/all' render={(props)=><CampaignDetail {...props}/>}/>
            <Route path='/:id' render={(props)=><CampaignDetail {...props}/>}/>
            <Route path='/:user/:id' render={(props)=><CampaignDetail {...props}/>}/> */}

            {/*default*/}
            <Redirect from='/' to='/dashboard' />
          </Switch>          
        </div>
      </Router>
    </>
  );
}

export default App;
