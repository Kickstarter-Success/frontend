import React from "react";
import { Link } from 'react-router-dom'


function Header(){
    const username = localStorage.getItem('username') 
    return(
        <>
        <img src="#" alt="header"/>        
        <img src="#" alt="userprofile"/> 
        <h1>Welcome back, {username}</h1>
        <Link to="/dashboard/campaignform">
        <button>
            Create A New Campaign
        </button>
        </Link>
        </>
    );
}

export default Header;