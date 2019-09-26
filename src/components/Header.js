import React from "react";
import { Link } from 'react-router-dom'
import {H1, ColoredButton, large} from './style'
import styled from 'styled-components';
import {Mute_Sea_Green} from './style';

const StyledHeader = styled.div`
    margin-top: ${large};
`;

const ColoredButtonShadow = styled(ColoredButton)`
box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
border-radius: 5px;
width: 250px;
color: black;
height: 70px;
background: ${Mute_Sea_Green};
margin-top: 30px;

`;

function Header(){
    const username = localStorage.getItem('username') 
    return(
        <StyledHeader>

        <H1 black>Welcome Back, {username}</H1>
        <Link to="/dashboard/campaignform">
        <ColoredButtonShadow>
            ADD A CAMPAIGN
        </ColoredButtonShadow>
        </Link>
        </StyledHeader>
    );
}

export default Header;