import React from "react";
import CampaignList from './CampaignList';
import Header from './Header';

function Dashboard(){
    return(
        <>
        <Header/>
        <CampaignList />
        {/* <Search/> */}
        </>
    );
}

export default Dashboard; 