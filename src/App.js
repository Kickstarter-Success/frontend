import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormikNewUserForm} from './components/SignUpForm'
import {FormikSignInForm} from './components/SignInForm'
import {Route, Switch} from 'react-router-dom'
import {CampaignDetail} from './components/CampaignDetail'

function App() {
  return (
    <div className="App">
      {/* Wrapped in the Switch to prevetn /:id route from running when route /all is triggered*/}
      <Switch>
        <Route path='/sign_up' exact component={FormikNewUserForm}/>
        <Route path='/sign_in' exact component={FormikSignInForm}/>
        {/* Campaign details can be accessed three different ways!! */}
        <Route path='/all' render={(props)=><CampaignDetail {...props}/>}/>
        <Route path='/:id' render={(props)=><CampaignDetail {...props}/>}/>
        <Route path='/:user/:id' render={(props)=><CampaignDetail {...props}/>}/>
      </Switch>
    </div>
  );
}

export default App;
