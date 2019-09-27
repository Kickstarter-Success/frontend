import React, {useState, useEffect}from 'react';
import { connect } from 'react-redux';
import { getCampaigns, grabCampaign, deleteCampaign, getDataUrl } from '../store/actions/campaignAction';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import {H1, ColoredButton, Card, H2, H3, P} from './style';
import tag from '../imgs/tag.png';
import location from '../imgs/location.png';
import Iframe from 'react-iframe';

const Campaign = styled.div`
   margin-top:3%;
   .Campaignheader{
       display:flex;
       
       flex-direction: column;
   }
`;
const ButtonWrapper = styled.div`
display:flex;
justify-content: center;
 
button{
    color:black;
    margin: 0 2%;
}
`

const Details = styled.div`
background: white;
display:flex;
justify-content: space-around;
align-items:center; 
align-content: center;
width: 90%;
margin: 3%;
padding: 2% 0;
`
const Box1 = styled.div`
padding: 35px;
background: #abd7c4ff;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
border-radius: 10px;
@media all and (max-width: 768px) {
    padding: 25px;
    }
`
const Box2 = styled(Box1)`
background: #48c891ff;`

const CampaignTitle = styled.div`
width: 50%;
display:flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
H1{
    margin-bottom: 0;
}
P{
    font-size: 18px;
    margin:3%;
    
}
div{
    display:flex;
    align-items: center;
}
`
const BoxWrap = styled.div`
display: flex;
justify-content: space-evenly;
align-items:baseline;
width: 35%;
div{
    P{
        font-size: 24px;
    } 
}
div{
    H1{
        font-size: 24px;
    }

}
`
const Icon = styled.img`
width: 40px;
`;


const CampaignDetail = (props) => {
    const { getCampaigns, grabCampaign, deleteCampaign, campaigns, match, history, isLoading, getDataUrl, url } = props
    const [campaign, setCampaign] = useState({});
    // const [dataUrl, setDataUrl] =useState({});
    const user_id = localStorage.getItem('user_id')

    useEffect(()=>{
        if (campaigns.length === 0) {getCampaigns(user_id)};
        const campaignToDisplay = campaigns.find(campaignInList => `${campaignInList.id}` === match.params.id)
        if (campaignToDisplay) {
            setCampaign(campaignToDisplay);
            getDataUrl(campaignToDisplay.id)
        };
    },[campaigns, match, getDataUrl])
    // console.log(dataUrl)
    
    const campaignSuccess = Math.round(campaign.category_success*100)
    const campaignAverage = Math.round(campaign.category_average/1000)
    const averageOver = Math.round(campaign.average_over/1000)
    const averageBacker = Math.round(campaign.average_backers/100)
    const averageDays = Math.ceil(campaign.average_duration)
    
    if(isLoading) {
		return (
		<>
		<Loader type='Puff' color='#05ce78' height={200} width={200}/>
		</>)
	}
    
    return(
        <Campaign>
                <H1>Campaign Results</H1>
                <div className='Campaignheader'>
                <Details>
                    <CampaignTitle>
                        <H1>{campaign.campaignName}</H1>
                        <P>{campaign.description}</P>
                        <div>
                            <div>
                                <div className='tag'>
                                    <Icon src={tag} alt='tag'/>
                                    <p>{campaign.categories}</p>
                                </div>
                                <div>
                                    <Icon src={location} alt='location'/>
                                    <p>{campaign.country}</p>
                                </div>
                            </div>
                        </div>
                    </CampaignTitle>
                    <BoxWrap>
                        <div>
                            <Box1><H1>${campaign.monetaryGoal}<br/> goal</H1></Box1>
                        </div>
                        <div><P>In</P></div>
                        <div>
                            <Box2><H1>{campaign.duration} <br/> days</H1></Box2>
                            {/* <Box2><H3>Industry:  {campaign.categories}</H3></Box2>
                            <Box2><H3>Country:  {campaign.country}</H3></Box2> */}
                        </div>
                    </BoxWrap>
                </Details>
                <ButtonWrapper>
                    <ColoredButton big onClick={()=>grabCampaign(campaign, history)}>EDIT CAMPAIGN</ColoredButton>
                    <ColoredButton big  onClick={()=>deleteCampaign(campaign.id, history)}>DELETE CAMPAIGN</ColoredButton>
                </ButtonWrapper>
            <div>
                <Iframe url={url.graph3} height='500px' width='600px' className='rainbowGraph'/>
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
                <Iframe url={url.graph1} height='500px' width='600px' className='chartGraph'/>
            </div>
            <div>
                <H1>Categories and Goals</H1>
                <p>See how your goal compares to the average raised in your category and others! Aim to keep your goal in the average range of the successful campaigns in your chosen category</p>
                <Iframe url={url.graph2} height='500px' width='800px' className='chartGraph'/>
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