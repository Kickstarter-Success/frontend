import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../store/actions/authAction';
import styled from 'styled-components';
import { NavStyle } from './style';
import KICK from '../imgs/KICK.png';

const StyledNav = styled.div`
  background: linear-gradient(90.4deg, #74d5ab 0.21%, #abd7c4 99.73%);
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;

`;
const LogoStyle = styled.img`
  width: 50px;
  height: 60px;
  background-size: contain;
`;

const LogoDiv = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

const ButtonNoStyle = styled(NavStyle)`
  background: none;
	border: none;
	padding: 0;
	outline: inherit;
`;

const LogoText = styled(NavStyle)`
font-size: 36px;
`;
const NavBar = props => {
  return (
    <StyledNav>
      <LogoDiv >
      <LogoStyle src={KICK}></LogoStyle>
      <LogoText>Kickstarter Success</LogoText>
      </LogoDiv >
      <div>
      {!props.isAuth && (
        <NavStyle to='/login'>
          LOGIN
        </NavStyle>
      )}
      {!props.isAuth && (
        <NavStyle to='/signup'>
          SIGN UP
        </NavStyle>
      )}
      {props.isAuth && (
        <NavStyle to='/dashboard'>
          DASHBOARD
        </NavStyle>
      )}
      {props.isAuth && (
        <NavStyle to='/dashboard/campaignform'>
          ADD CAMPAIGN
        </NavStyle>
      )}
      {props.isAuth && (
        <NavStyle to='/login' >
          <ButtonNoStyle onClick={() => props.logout()}>
            LOGOUT
          </ButtonNoStyle>
        </NavStyle>
      )}
      </div>
    </StyledNav>
  )
}

const mapPropsToState = state => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapPropsToState, { logout })(NavBar);