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
	WhiteButton 
} from "./style";
//--------------------------------_Styles
const CustomCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 400px;
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
`;

const HeaderStyleDiv = styled(StyledDiv)`
	background: ${Mute_Sea_Green};
`;

const CategoryCountry = styled.div`
	display: flex;
	justify-content: space-between;
	margin: ${smalltwo};
`;

const Monetary = styled.p`
	font-size: ${h1_font_size};
	color: ${Pale_KickStarter};
	font-weight: 800;
	text-shadow: 0.5px 0.5px #aaafaa;
`;

const OutcomeDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 10rem;
	padding-bottom: 20px;
`;

const RegText = styled.p`
	color: ${Pale_KickStarter};
	font-size: 14px;
	text-shadow: 0.5px 0.5px #aaafaa;
	font-weight: 800;
`;

const DayText = styled(RegText)`
	font-size: 18px;
`;

const Success = styled.div`
	color: black;
	font-size: ${h1_font_size};
`;

//--------------------------------_Styles END

export default function CampaignCard(props) {
	const {
		id,
		campaignName,
		categories,
		monetaryGoal,
		duration,
		country
	} = props.campaign;
	return (
		<>
			<CustomCard>
				<HeaderStyleDiv>
					<H3 white>{campaignName}</H3>
				</HeaderStyleDiv>
				<CategoryCountry>
					<p>{categories}</p>
					<p>{country}</p>
				</CategoryCountry>
				<OutcomeDiv>
					<Monetary>${monetaryGoal}</Monetary>
					<RegText>Goal </RegText>
					<RegText> in</RegText>
					<DayText>{duration} days</DayText>
				</OutcomeDiv>
				<StyledDiv>
					<Success>Success</Success>
					<Link to={`/dashboard/campaign/${id}`}>
						<WhiteButton lightgreen>View Results
						</WhiteButton>
						</Link>
				</StyledDiv>
			</CustomCard>
		</>
	);
}
