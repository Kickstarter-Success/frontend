import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Campaign = styled.div`
    display: flex;
`


const CampaignDetail = (props) => {

const sampleObj = {
        "id": 1,
        "user_id": 1,
        "campaignName": "Test_Project_1",
        "categories": "Games",
        "description": "Put the decription here and bla bla bla.",
        "monetaryGoal": 100000,
        "duration": 30,
        "country": "USA"
    }
    // axios
    // .get('https://kickstarter-backend.herokuapp.com/api/kickstarter/:id')//Get a single Kickstarter by ID
    // // .get('https://kickstarter-backend.herokuapp.com/api/kickstarter/user/:id')//Gets user Kickstarter by ID
    // // .get('https://kickstarter-backend.herokuapp.com/api/kickstarter/all')//Gets all KickStarter
    // .then(res=> console.log(res))
    // .catch(error=> console.log(error))
    return(
        <Campaign>
            <h3>{sampleObj.campaignName}</h3>
        </Campaign>
    )
}
export {CampaignDetail}