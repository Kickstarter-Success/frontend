import React, {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { getCampaigns, editCampaign, deleteCampaign } from '../store/actions/campaignAction';
import Loader from 'react-loader-spinner';
import styled from 'styled-components'

const Campaign = styled.div`
    display: flex;
`;

const CampaignDetail = (props) => {
    console.log(props)
    const { getCampaigns, editCampaign, deleteCampaign, campaigns, match, history } = props
    const [campaign, setCampaign] = useState({});

    useEffect(()=>{
        const campaignToDisplay = campaigns.find(campaignInList => `${campaignInList.id}` === match.params.id)
        if (campaignToDisplay) {
            setCampaign(campaignToDisplay);
        }
        console.log(campaignToDisplay)
    },[campaigns, match])
        console.log(campaign)
    
    return(
        <div>
            <h1>{campaign.campaignName}</h1>
            <p>{campaign.description}</p>
            <p>{campaign.categories}</p>
            <p>{campaign.monetaryGoal}</p>
            <p>{campaign.duration}</p>
            <p>{campaign.country}</p>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
};

const mapStateToProps = state => {
	return {
		campaigns: state.campaign.campaigns,
		isLoading: state.campaign.isLoading
	}
};

export default connect(mapStateToProps, { getCampaigns, editCampaign, deleteCampaign })(CampaignDetail);