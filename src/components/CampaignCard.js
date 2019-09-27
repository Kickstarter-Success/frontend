import React from "react";
import { Link } from "react-router-dom";
import { id } from "postcss-selector-parser";
import styled from "styled-components";
import {
	H3,
	h1_font_size,
	Pale_KickStarter,
	Mute_Sea_Green,
	medium,
	smalltwo,
	WhiteButton,
	P 
} from "./style";
import tag from '../imgs/tag.png';
import location from '../imgs/location.png';
//--------------------------------_Styles Sorry - I just now remember you can nest in Styles component
const CustomCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 375px;
	border-radius: 20px;
	margin: 3% auto;
	background-color: white;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
	box-sizing: border-box;
`;

const StyledDiv = styled.div`
	background: ${Mute_Sea_Green};
	padding: ${medium};
	display: flex;
	flex-direction: column;
	justify-content: space-between;

`;

const HeaderStyleDiv = styled(StyledDiv)`
	background: ${Mute_Sea_Green};

	h3{
		font-size: 25px;
	}
`;

const CategoryCountry = styled.div`
	display: flex;
	justify-content: space-between;
	margin: ${smalltwo};
`;

const Monetary = styled.p`
	font-size: 70px;
	color: ${Pale_KickStarter};
	font-weight: 800;
	text-shadow: 0.5px 0.5px #aaafaa;
`;

const OutcomeDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 15rem;

	padding-bottom: 40px;
`;

const RegText = styled.p`
	color: ${Pale_KickStarter};
	font-size: 18px;
	text-shadow: 0.5px 0.5px #aaafaa;
	font-weight: 800;
`;

const DayText = styled(RegText)`
	font-size: 32px;
`;

const Success = styled.div`
	color: black;
	font-size: ${h1_font_size};
	margin-bottom: 20px;
	font-family: 'Lato';
`;

const Icon = styled.img`
width: 40px;
`;

const Categrory = styled.div`
	display: flex;

`;

const Country = styled.div`
	display: flex;
	justify-content: flex-end;
	
`;


//--------------------------------_Styles END

export default function CampaignCard(props) {
	const {
		id,
		campaignName,
		categories,
		monetaryGoal,
		duration,
		country,
		result
	} = props.campaign;
	return (
		<>
			<CustomCard>
				<HeaderStyleDiv>
					<H3 black>{campaignName}</H3>
				</HeaderStyleDiv>
				<CategoryCountry>
					<Categrory>
						<Icon src={tag} alt='tag'/>
						<P mediumbrand>{categories}</P>
					</Categrory>
					<Country>
						<Icon src={location} alt='location'/>
						<P mediumbrand>{country}</P>
					</Country>
				</CategoryCountry>
				<OutcomeDiv>
					<Monetary>${monetaryGoal}</Monetary>
					<RegText>Goal </RegText>
					<RegText> in</RegText>
					<DayText>{duration} days</DayText>
				</OutcomeDiv>
				<StyledDiv>
					<Success>{result===1 ? 'Success': 'Fail'}</Success>
					<Link to={`/dashboard/campaign/${id}`}>
						<WhiteButton mediumbrand>View Results
						</WhiteButton>
						</Link>
				</StyledDiv>
			</CustomCard>
		</>
	);
}
