import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCampaigns, grabCampaign, deleteCampaign, getDataUrl } from '../store/actions/campaignAction';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';
import { H1, ColoredButton, Card, H2, H3, P } from './style';
import tag from '../imgs/tag.png';
import location from '../imgs/location.png';
import Iframe from 'react-iframe';

const Campaign = styled.div`

    h1 {
        margin-top: 20px;
    }

   .Campaignheader{
       display:flex;
       flex-direction: column;
   }
`;

const Details = styled.div`
background: rgba(255,255,255, 0.3);
display:flex;
justify-content: space-around;
align-items:center; 
align-content: center;
width: 80%;
margin: 1% auto;
padding: 2% 0 0 0;
`
const Box1 = styled.div`
padding: 50px;
// height: 100px;
// width: 200px;
// font-align: center;
background: #abd7c4ff;
font-family:'Prata', serif;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
border-radius: 2px;

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
    margin:5%;
    
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
const TagWrapper = styled.div`
width: 100%;
display:flex;
justify-content: space-between;

`

const Gauge = styled.div`
margin: 0 auto;
display:flex;
justify-content: center;
`



const BodyText = styled.div`
display: flex;
flex-direction: column;
align-items:center;
align-content: center;
margin: 0 auto;
width:100%;
.topText{
    display:flex;
    justify-content: center;
    margin: 1.5% 0;
    width: 80%;
    .one{
        background-color:#abd7c4ff;
        box-shadow: -1px 3px 5px -1px rgba(0, 0, 0, 0.85);
    }
    .two{
        background-color:#74d5abff;
        box-shadow: -1px 3px 5px -1px rgba(0, 0, 0, 0.85);
    }
    .three{
        background-color: #48c891ff;
        box-shadow: -1px 3px 5px -1px rgba(0, 0, 0, 0.85);
    }
}
.bottomText{
    display:flex;
    justify-content: center;
    margin-bottom: 5%;
    width: 80%;
    .four{
        background-color: #48c891ff;
        box-shadow: -1px 3px 5px -1px rgba(0, 0, 0, 0.85);
    }
    .five{
        background-color: #05ce78ff;
        box-shadow: -1px 3px 5px -1px rgba(0, 0, 0, 0.85);
    }
    .six{
        background-color: #74d5abff;
        box-shadow: -1px 3px 5px -1px rgba(0, 0, 0, 0.85);
    }
}   
`
const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    height: 290px;
    font-size: 28px;
    align-items: center;
    padding: 4rem;
    text-align: center;
    font-weight: 400;
    line-height: 30px;
    background:green;
    font-size: 24px;
    // box-shadow: -1px 3px 5px -1px rgba
    `

const UDButton = styled.div`
display: flex;
justify-content: space-between;
margin-right: 6%;
div{
    margin: 0 5%;
    button{
        color:black;
    }
}
`
const Bold = styled.div`
font-size: 40px;
font-weight: 900;
font-family: Prata;
font-size: 50px;
`
const B = styled.b`
    font-weight: 900;
    font-family: Prata;
    font-size: 30px;
    `

const Icon = styled.img`
width: 40px;
`;

const EditButton = styled(ColoredButton)`
background-color: #abd7c4ff;
`
const CampaignDetail = (props) => {
    const { getCampaigns, grabCampaign, deleteCampaign, campaigns, match, history, isLoading, getDataUrl, url } = props
    const [campaign, setCampaign] = useState({});
    const user_id = localStorage.getItem('user_id')

    useEffect(() => {
        if (campaigns.length === 0) { getCampaigns(user_id) };
        const campaignToDisplay = campaigns.find(campaignInList => `${campaignInList.id}` === match.params.id)
        if (campaignToDisplay) {
            setCampaign(campaignToDisplay);
            getDataUrl(campaignToDisplay.id)
        };
    }, [campaigns, match, getDataUrl])

    const campaignSuccess = Math.round(campaign.category_success * 100)
    const campaignAverage = Math.round(campaign.category_average / 1000)
    const averageOver = Math.round(campaign.average_over / 1000)
    const averageBacker = Math.round(campaign.average_backers / 100)
    const averageDays = Math.ceil(campaign.average_duration)

    if (isLoading) {
        return (
            <>
                <Loader type='Puff' color='#05ce78' height={200} width={200} />
            </>)
    }

    return (
        <Campaign>
            <H1>Campaign Results</H1>
            <div className='Campaignheader'>
                <Details>
                    <CampaignTitle>
                        <H1>{campaign.campaignName}</H1>
                        <P>{campaign.description}</P>
                        <TagWrapper>
                            <div>
                                <div className='tag'>
                                    <Icon src={tag} alt='tag' />
                                    <p>{campaign.categories}</p>
                                </div>
                                <div>
                                    <Icon src={location} alt='location' />
                                    <p>{campaign.country}</p>
                                </div>
                            </div>
                            <UDButton>
                                <div>
                                    <EditButton small onClick={() => grabCampaign(campaign, history)}>EDIT</EditButton>
                                </div>
                                <div>
                                    <ColoredButton small onClick={() => deleteCampaign(campaign.id, history)}>DELETE</ColoredButton>
                                </div>
                            </UDButton>
                        </TagWrapper>
                    </CampaignTitle>
                    <BoxWrap>
                        <div>
                            <Box1><H1>${campaign.monetaryGoal}<br /> goal</H1></Box1>
                        </div>
                        <div><P>In</P></div>
                        <div>
                            <Box2><H1>{campaign.duration} <br /> days</H1></Box2>
                        </div>
                    </BoxWrap>
                </Details>
            </div>

            <div className='graph'>
                <Iframe url={url.graph3} height='350px' width='100%' className='rainbowGraph' />
            </div>

            <div className='chartBox2'>
                <h1>Backers and Goals</h1>
                <h3>How many backers should you expect to have for your campaign to be successful? Find yourself in blue and set your goals accordingly to achieve success!</h3>
                <Iframe url={url.graph2} height='850px' width='60%' className='chartGraph' />
            </div>
            <div className='chartBox1'>
                <h1>Categories and Goals</h1>
                <h3>See how your goal compares to the average raised in your category and others! Aim to keep your goal in the average range of the successful campaigns in your chosen category</h3>
                <Iframe url={url.graph1} height='500px' width='60%' className='chartGraph' />
            </div>
            <BodyText>
                <div className='bottomWord'>
                    <h1>A little stats never hurt nobody!</h1>
                    <h3>See how your campaign compares to others with similar goals and categories.</h3>
                </div>
                <div className='topText'>
                    <TextBox className='one'><Bold>{campaign.raising_more_success}</Bold>campaigns raising more than <B>${campaign.monetaryGoal}</B> have been successful</TextBox>
                    <TextBox className='two'><Bold>{campaignSuccess}%</Bold> of campaigns in the <B>{campaign.categories}</B> category have been successful</TextBox>
                    <TextBox className='three'>Campaigns in the <B>{campaign.categories}</B> category raise an average of <Bold>${campaignAverage}K</Bold> successfully</TextBox>
                </div>
                <div className='bottomText'>
                    <TextBox className='four'>Successful campaigns raising more than  <B>{campaign.monetaryGoal}</B> raise an average of <Bold>${averageOver}K</Bold>above their goal!</TextBox>
                    <TextBox className='five'>Successful campaigns raising <B>{campaign.monetaryGoal}</B> have an average of <Bold>{averageBacker}</Bold> backers</TextBox>
                    <TextBox className='six'>Successful campaigns in the <B>{campaign.categories}</B> category have an average duration of <Bold>{averageDays}</Bold> day</TextBox>
                </div>
            </BodyText>
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