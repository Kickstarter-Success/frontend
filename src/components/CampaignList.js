import React, { useEffect } from "react";
import CampaignCard from "./CampaignCard";
import { connect } from 'react-redux';
import { getCampaigns } from '../store/actions/campaignAction'
import Loader from 'react-loader-spinner'


function CampaignList(props) {
	const { getCampaigns, isLoading, campaigns } = props
	const user_id = localStorage.getItem('user_id')

	useEffect(() => {
		getCampaigns(user_id)
	}, [getCampaigns, user_id]);

	if(isLoading) {
		return (
		<>
		<Loader type='Puff' color='#05ce78' height={60} width={60}/>
		</>)
	}

	return (
		<>
			{campaigns.length > 0 && campaigns.map(campaign => (
				<CampaignCard key={campaign.id} campaign={campaign}/>
			))}
		</>
	);
}

const mapStateToProps = state => {
	return {
		campaigns: state.campaign.campaigns,
		isLoading: state.campaign.isLoading
	}
};

export default connect(mapStateToProps, { getCampaigns })(CampaignList);
