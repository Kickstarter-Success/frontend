import React from 'react';
import logo from './logo.svg';
import './App.css';
import {FormikNewUserForm} from './components/SignUpForm'
import {FormikSignInForm} from './components/SignInForm'


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      
      <Route path='/sign_up' component={FormikNewUserForm}/>
      <Route path='/sign_in' component={FormikSignInForm}/>
    </div>
  );
}

export default App;
