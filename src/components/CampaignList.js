import React, { useEffect, useState } from "react";
import CampaginCard from "./CampaignCard";
import axios from "axios";

function CampaignList() {
	const [campaignList, setCampaignList] = useState([]);

	useEffect(() => {
		axios
			.get("#")
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
				<CampaginCard campaign={campaign}/>
			))}
		</>
	);
}

export default CampaignList;
