import React from "react";
import { Link } from "react-router-dom";

export default function CampaignCard() {
	return (
		<>
			<p>Campaign:</p>
			<p>Category:</p>
			<p>Monetary Goal:</p>
			<p>Duration:</p>
			<p>Country:</p>
			<p>Status:</p>
			<Link to='#'>
				<button>Campaign Details</button>
			</Link>
		</>
	);
}
