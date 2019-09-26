import React, {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { getCampaigns, grabCampaign, deleteCampaign } from '../store/actions/campaignAction';
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
    const { getCampaigns, grabCampaign, deleteCampaign, campaigns, match, history, isLoading } = props
    const [campaign, setCampaign] = useState({});
    const user_id = localStorage.getItem('user_id')

    useEffect(()=>{
        if (campaigns.length === 0) {getCampaigns(user_id)};
        const campaignToDisplay = campaigns.find(campaignInList => `${campaignInList.id}` === match.params.id)
        if (campaignToDisplay) {
            setCampaign(campaignToDisplay);
        }
    },[campaigns, match])
    
    if(isLoading) {
		return (
		<>
		<Loader type='Puff' color='#05ce78' height={60} width={60}/>
		</>)
	}
    
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
                    <ColoredButton small onClick={()=>grabCampaign(campaign, history)}>Edit</ColoredButton>
                    <ColoredButton small  onClick={()=>deleteCampaign(campaign.id, history)}>Delete</ColoredButton>
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

export default connect(mapStateToProps, { getCampaigns, grabCampaign, deleteCampaign })(CampaignDetail);