import React from "react";
import { Link } from 'react-router-dom'


function Header(props){
    return(
        <>
        <img src="#" alt="header"/>        
        <img src="#" alt="userprofile"/> 
        <h1>Welcome back, {props.username}</h1>
        <Link to="#">
        <button>
            Create A New Campaign
        </button>
        </Link>
        </>
    );
}

export default Header;