import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authAction';

const NavBar = props => {
  return (
    <div>
      <a href="#"><h1>Kickstarter Success</h1></a>
      {!props.isAuth && (
        <NavLink to='/login'>
          Login
        </NavLink>
      )}
      {!props.isAuth && (
        <NavLink to='/signup'>
          Sign Up
        </NavLink>
      )}
      {props.isAuth && (
        <NavLink to='/dashboard'>
          Dashboard
        </NavLink>
      )}
      {props.isAuth && (
        <NavLink to='/dashboard/campaignform'>
          Create Campaign
        </NavLink>
      )}
      {props.isAuth && (
        <NavLink to='/login'>
          <button onClick={() => props.logout()}>
            Logout
          </button>
        </NavLink>
      )}
    </div>
  )
}

const mapPropsToState = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapPropsToState, { logout })(NavBar);