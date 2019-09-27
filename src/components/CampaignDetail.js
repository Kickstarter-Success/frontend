import React, {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { getCampaigns, grabCampaign, deleteCampaign, getDataUrl } from '../store/actions/campaignAction';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import {H1, ColoredButton, Card, H2, H3} from './style';
import Iframe from 'react-iframe';

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
    const { getCampaigns, grabCampaign, deleteCampaign, campaigns, match, history, isLoading, getDataUrl } = props
    const [campaign, setCampaign] = useState({});
    const [dataUrl, setDataUrl] =useState();
    const user_id = localStorage.getItem('user_id')

    useEffect(()=>{
        if (campaigns.length === 0) {getCampaigns(user_id)};
        const campaignToDisplay = campaigns.find(campaignInList => `${campaignInList.id}` === match.params.id)
        if (campaignToDisplay) {
            setCampaign(campaignToDisplay);
            setDataUrl(getDataUrl(campaignToDisplay.id))
        };
    },[campaigns, match])
    
    const campaignSuccess = Math.round(campaign.category_success*100)
    const campaignAverage = Math.round(campaign.category_average/1000)
    const averageOver = Math.round(campaign.average_over/1000)
    const averageBacker = Math.round(campaign.average_backers/100)
    const averageDays = Math.ceil(campaign.average_duration)
    
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
            <p>Your campaign will be a {campaign.result===1 ? 'success' : 'fail'}!</p>
            <div>
                <Iframe url='https://jbti-kickstarter-success.s3.us-east-2.amazonaws.com/visualizations/visual3-1.html' height='500px' width='600px' className='rainbowGraph'/>
            </div>
            <div>
                <H2>A little stats never hurt nobody!</H2>
                <p>See how your campaign compares to others with similar goals and categories.</p>
                <p>{campaign.raising_more_success} campaigns raising more than ${campaign.monetaryGoal} have been successful</p>
                <p>{campaignSuccess}% of campaigns in the {campaign.categories} category have been successful</p>
                <p>Campaigns in the {campaign.categories} category raise an average of ${campaignAverage}K successfully</p>
                <p>Successful campaigns raising more than  {campaign.monetaryGoal} raise an average of ${averageOver}K above their goal!</p>
                <p>Successful campaigns raising {campaign.monetaryGoal} have an average of {averageBacker} backers</p>
                <p>Successful campaigns in the {campaign.categories} category have an average duration of {averageDays} day</p>
            </div>
            <div>
                <H1>Explore the dataset</H1>
                <H3>Hover, click, drag, zoom to see all of the data points included in our model. </H3>
                <Iframe url='https://jbti-kickstarter-success.s3.us-east-2.amazonaws.com/visualizations/visual1-1.html' height='500px' width='600px' className='chartGraph'/>
            </div>
            <div>
                <H1>Categories and Goals</H1>
                <p>See how your goal compares to the average raised in your category and others! Aim to keep your goal in the average range of the successful campaigns in your chosen category</p>
                <Iframe url='https://jbti-kickstarter-success.s3.us-east-2.amazonaws.com/visualizations/visual1-1.html' height='500px' width='600px' className='chartGraph'/>
            </div>
        </Campaign>
    )
};

const mapStateToProps = state => {
	return {
		campaigns: state.campaign.campaigns,
        isLoading: state.campaign.isLoading,
        url: state.campaign.url
	}
};

export default connect(mapStateToProps, { getCampaigns, grabCampaign, deleteCampaign, getDataUrl })(CampaignDetail);