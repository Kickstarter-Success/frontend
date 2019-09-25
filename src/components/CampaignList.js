import React, { useEffect } from "react";
import CampaginCard from "./CampaignCard";
import { connect } from 'react-redux';
import { getCampaigns } from '../store/actions/campaignAction'
import Loader from 'react-loader-spinner'


function CampaignList(props) {
	
	console.log(props)
	const user_id = localStorage.getItem('user_id')

	useEffect(() => {
		props.getCampaigns(user_id)
	}, [getCampaigns, user_id]);

	if(isLoading) {
		return <Loader />
	}

	return (
		<>
			{props.campaigns.length > 0 && props.campaigns.map(campaign => (
				<CampaginCard campaign={campaign}/>
			))}
		</>
	);
}

const mapStateToProps = state => {
	console.log(state)
	return {
		campaigns: state.campaign.campaigns,
		isLoading: state.campaign.isLoading
	}
};

export default connect(mapStateToProps, { getCampaigns })(CampaignList);
