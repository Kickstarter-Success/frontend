import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/authAction";
import styled from "styled-components";
import KICK from "../imgs/KICK.png";

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

const ButtonNoStyle = styled.a`
  background: none;
	border: none;
	padding: 0;
  outline: inherit;
  font-weight: 900;
	font-size: 18px;
	color: white;
	text-decoration: none;
  margin-left: 30px;
  &:hover {
  transform: scale(1.1);
}

&:active {
  transform: scale(1.1);
  color: white;
}



`;

const LogoText = styled.a`
  font-size: 36px;
  font-weight: 900;
	font-size: 18px;
	color: white;
	text-decoration: none;
	margin-left: 30px;
  &:hover {
  transform: scale(1.1);

}
&:active {
  transform: scale(1.1);
  color: white;
}




  
`;
const NavBar = props => {
	return (
		<StyledNav>
			<LogoDiv>
				<a href='https://kickstart-success.netlify.com/index.html'><LogoStyle src={KICK}></LogoStyle></a>
				<LogoText>Kickstarter Success</LogoText>
			</LogoDiv>
			<div>
				{!props.isAuth && (
					<NavLink className='nav' to='/login'>
						LOGIN
					</NavLink>
				)}
				{!props.isAuth && (
					<NavLink className='nav' to='/signup'>
						SIGN UP
					</NavLink>
				)}
				{props.isAuth && (
					<NavLink className='nav' to='/dashboard'>
						DASHBOARD
					</NavLink>
				)}
				{props.isAuth && (
					<NavLink className='nav' to='/dashboard/campaignform'>
						ADD CAMPAIGN
					</NavLink>
				)}
				{props.isAuth && (
					<NavLink to='/login'>
						<ButtonNoStyle onClick={() => props.logout()}>LOGOUT</ButtonNoStyle>
					</NavLink>
				)}
			</div>
		</StyledNav>
	);
};

const mapPropsToState = state => {
	return {
		isAuth: state.auth.isAuth
	};
};

export default connect(
	mapPropsToState,
	{ logout }
)(NavBar);
