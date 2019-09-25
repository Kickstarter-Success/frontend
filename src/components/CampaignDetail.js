import React, {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { getCampaigns, editCampaign, deleteCampaign } from '../store/actions/campaignAction';
import Loader from 'react-loader-spinner';
import styled from 'styled-components'
import {H1,WhiteButton, ColoredButton, Card, P, H2, H3} from './style'

const Campaign = styled.div`
   margin-top:8%;
`;
const ButtonWrapper = styled.div`
display:flex;
justify-content: space-around; `

const Details = styled.div`
display:flex;
justify-content: space-around;
align-items: center; 
align-content: center;
padding: 8% 0 10% 0;
`


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
        <Campaign>
            <Card>
                <H1>{campaign.campaignName}</H1>
                <H2>{campaign.description}</H2>
                <Details>
                    <div>
                        <H3>Industry:  {campaign.categories}</H3>
                        <H3>Country:  {campaign.country}</H3>
                    </div>
                    <div>
                        <H3>Goal:  {campaign.monetaryGoal}</H3>
                        <H3>Length:  {campaign.duration}</H3>
                    </div>
                </Details>
                <ButtonWrapper>
                    <ColoredButton small >Edit</ColoredButton>
                    <ColoredButton small >Delete</ColoredButton>
                </ButtonWrapper>
            </Card>
        </Campaign>
    )
};

const mapStateToProps = state => {
	return {
		campaigns: state.campaign.campaigns,
		isLoading: state.campaign.isLoading
	}
};

export default connect(mapStateToProps, { getCampaigns, editCampaign, deleteCampaign })(CampaignDetail);