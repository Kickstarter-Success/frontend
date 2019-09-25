import React from "react";
import { Link } from 'react-router-dom';
import { id } from "postcss-selector-parser";

export default function CampaignCard(props) {
  const { id, campaignName, categories, monetaryGoal, duration, country } = props.campaign
  return (
    <>
    <p>Campaign:{campaignName}</p>
    <p>Category:{categories}</p>
    <p>Monetary Goal:{monetaryGoal}</p>
    <p>Duration:{duration}</p>
    <p>Country:{country}</p>
    <p>Status:</p>
    <Link to={`/dashboard/campaign/${id}`}>
        <button>
        Campaign Details
        </button>
    </Link>
    </>
  );
}
