import React, { useEffect, useState } from "react";
import CampaginCard from "./CampaignCard";
import axios from "axios";

function CampaignList() {
	const [campaignList, setCampaignList] = useState([]);

	useEffect(() => {
		axios
			.get("https://kickstarter-backend.herokuapp.com/api/kickstarter/all")
			.then(res => {
				console.log(res);
				setCampaignList(res);
			})
			.catch(err => {
				console.log(err);
			});
	}, []);
	return (
		<>
			{campaignList.map(campaign => (
				<CampaginCard />
			))}
		</>
	);
}

export default CampaignList;
